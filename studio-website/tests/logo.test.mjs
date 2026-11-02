import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

test('both Studios wordmarks use the approved, unchanged transparent master', async () => {
  const html = await readFile('index.html', 'utf8');
  const images = [...html.matchAll(/<a class="wordmark"[^>]*>(.*?)<\/a>/gs)];
  assert.equal(images.length, 2);
  for (const [, markup] of images) {
    assert.match(markup, /src="\/assets\/slot13-studios-logo\.png"/);
    assert.match(markup, /width="1774" height="887"/);
    assert.match(markup, /alt="SLOT13 Studios"/);
  }
  assert(!html.includes('SLOT<span>13</span><small>STUDIOS</small>'));
  const master = await readFile('assets/slot13-studios-logo.png');
  assert.equal(createHash('sha256').update(master).digest('hex'), 'e30b552728276972e11594415f73987d50f318c74ae03a5dfbb6a0f9e3ea9107');
  assert.equal(master.readUInt32BE(16), 1774);
  assert.equal(master.readUInt32BE(20), 887);
  assert.equal(master[25], 6, 'PNG must retain RGBA transparency');
});

test('brand metadata points to the approved artwork', async () => {
  const html = await readFile('index.html', 'utf8');
  assert.match(html, /rel="icon" href="\/assets\/favicon\.png" type="image\/png" sizes="128x128"/);
  assert.match(html, /"logo":"https:\/\/slot13studios\.com\/assets\/slot13-studios-logo\.png"/);
  assert.match(html, /property="og:image:alt"/);
  assert.match(html, /name="twitter:image"/);
  const icon = await readFile('assets/favicon.png');
  assert.equal(icon.readUInt32BE(16), 128);
  assert.equal(icon.readUInt32BE(20), 128);
  assert.equal(icon[25], 6);
});

test('each image placement keeps the intrinsic 2:1 logo ratio', async () => {
  const css = await readFile('styles.css', 'utf8');
  assert.match(css, /\.wordmark>img\{display:block;width:100%;height:auto;object-fit:contain\}/);
  assert.match(css, /\.header \.wordmark\{width:120px\}/);
});
