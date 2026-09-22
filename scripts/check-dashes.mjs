// Fails if any file under src/ contains an em dash or en dash (literal or HTML entity).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BANNED = [/—/, /–/, /&mdash;/i, /&ndash;/i];
const TEXT = /\.(astro|md|mdx|ts|js|mjs|css|json|html|svg)$/;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : TEXT.test(name) ? [path] : [];
  });
}

const hits = [];
for (const file of walk('src')) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (BANNED.some((re) => re.test(line))) hits.push(`${file}:${i + 1}: ${line.trim()}`);
  });
}

if (hits.length) {
  console.error('Dashes are not allowed. Use commas, periods, colons, or a plain hyphen.\n' + hits.join('\n'));
  process.exit(1);
}
console.log('check-dashes: ok');
