import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  }));
  return files.flat();
}

const files = [
  ...await filesUnder('src'),
  ...await filesUnder('public'),
  'index.html', 'package.json', 'package-lock.json', 'fly.toml',
  'PRODUCT.md', 'DESIGN.md', 'README.md', '.impeccable/design.json',
].filter(path => /\.(?:tsx?|css|svg|html|json|toml|md)$/.test(path));

const errors = [];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  if (/fausecrew/i.test(text)) errors.push(`${file}: uygulama adı yanlış yazılmış.`);
  if (/\bEce\b/u.test(text)) errors.push(`${file}: eski örnek kullanıcı adı kalmış.`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('İçerik kontrolü başarılı: FausCrew / Elif.');
}
