// Crawls the prerendered dist/ output and confirms every internal
// (same-origin, non-anchor, non-asset) <a href> found in the actual
// rendered HTML points at a trailing-slash path that has a matching
// prerendered index.html - i.e. resolves directly, no redirect needed.
import { readFileSync, existsSync } from 'fs';
import { globSync } from 'glob';

const projectRoot = process.cwd();
const files = globSync('dist/**/index.html', { cwd: projectRoot });

const hrefPattern = /href="(\/[^"]*)"/g;
const offenders = [];
const checked = new Set();

for (const relPath of files) {
  const filePath = `${projectRoot}/${relPath}`;
  const html = readFileSync(filePath, 'utf8');
  let match;
  while ((match = hrefPattern.exec(html))) {
    const href = match[1];
    if (href === '/') continue;
    // Skip real static files (extension present) and API/robots/sitemap.
    if (/\.[a-zA-Z0-9]{2,12}$/.test(href.split('?')[0])) continue;
    const pathOnly = href.split('?')[0].split('#')[0];
    checked.add(pathOnly);
    if (!pathOnly.endsWith('/')) {
      offenders.push({ file: relPath, href });
      continue;
    }
    const targetIndex = `dist${pathOnly}index.html`;
    if (!existsSync(`${projectRoot}/${targetIndex}`)) {
      offenders.push({ file: relPath, href, reason: 'no matching prerendered page' });
    }
  }
}

console.log(`Checked ${checked.size} distinct internal path(s) across ${files.length} prerendered file(s).`);

if (offenders.length > 0) {
  console.error(`Found ${offenders.length} problem link(s):`);
  for (const o of offenders) {
    console.error(`  ${o.file} -> ${o.href}${o.reason ? ` (${o.reason})` : ' (missing trailing slash)'}`);
  }
  process.exit(1);
} else {
  console.log('check-dist-internal-links: every internal link in the prerendered output is a trailing-slash path with a matching page.');
}
