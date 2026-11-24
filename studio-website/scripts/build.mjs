import { rm, mkdir, copyFile, cp } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const file of ['index.html', 'styles.css', 'app.js', 'robots.txt', 'sitemap.xml']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', {recursive:true});
console.log('Built dependency-free static website in dist/');

