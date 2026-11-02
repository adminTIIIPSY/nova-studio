import assert from 'node:assert/strict';
import http from 'node:http';
import path from 'node:path';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(path.join(process.env.STUDIO_BROWSER_TOOLS || process.cwd(), 'package.json'));
const { chromium } = require('playwright');
const root = path.resolve('dist');
const output = path.resolve('browser-evidence');
await mkdir(output, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.otf': 'font/otf', '.ttf': 'font/ttf' };
const server = http.createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    assert(file.startsWith(root + path.sep));
    response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    response.end(await readFile(file));
  } catch { response.writeHead(404); response.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ headless: true });
const report = [];
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 740 }]) {
    const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
    const errors = [], failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failures.push(response.url()); });
    await page.goto(`http://127.0.0.1:${server.address().port}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const logos = await page.locator('.wordmark img').evaluateAll(images => images.map(image => ({ loaded: image.complete && image.naturalWidth === 1774, naturalHeight: image.naturalHeight, width: image.getBoundingClientRect().width, height: image.getBoundingClientRect().height, alt: image.alt, objectFit: getComputedStyle(image).objectFit })));
    assert.equal(logos.length, 2);
    for (const logo of logos) { assert(logo.loaded); assert.equal(logo.naturalHeight, 887); assert.equal(logo.alt, 'SLOT13 Studios'); assert(Math.abs(logo.width / logo.height - 2) < .01); assert.equal(logo.objectFit, 'contain'); }
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Page overflows viewport');
    await page.locator('.header').screenshot({ path: path.join(output, `header-${viewport.width}.png`) });
    if (viewport.width <= 760) {
      await page.locator('.menu-toggle').click();
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
      await page.locator('.menu-toggle').click();
      await page.locator('#navigation a[href="#games"]').click();
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
    }
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.locator('footer').screenshot({ path: path.join(output, `footer-${viewport.width}.png`) });
    await page.screenshot({ path: path.join(output, `page-${viewport.width}.png`), fullPage: true });
    assert.deepEqual(errors, []); assert.deepEqual(failures, []);
    report.push({ viewport, logos, errors, failedResponses: failures, menuVerified: viewport.width <= 760, passed: true });
    await page.close();
  }
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log('Passed desktop, 390px and 320px logo, layout, asset and menu browser checks.');
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
