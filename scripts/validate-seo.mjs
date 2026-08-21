#!/usr/bin/env node
// Post-prerender check: walks every dist/**/index.html and fails the build
// if any page has more or fewer than one of the critical singleton SEO tags
// (title, canonical, description, OG/Twitter title+description+image, robots).
// Catches the class of bug where a static tag in index.html and a
// react-helmet-async-rendered tag both end up in the prerendered output.
import { readFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');

// Node 20 (CI) predates fs.globSync (added in Node 22) - walk manually.
function findIndexHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...findIndexHtmlFiles(full));
    } else if (entry === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

const CHECKS = [
  { label: 'title', re: /<title[\s>]/g },
  { label: 'canonical', re: /<link[^>]*rel="canonical"/g },
  { label: 'meta description', re: /<meta[^>]*name="description"/g },
  { label: 'og:title', re: /<meta[^>]*property="og:title"/g },
  { label: 'og:description', re: /<meta[^>]*property="og:description"/g },
  { label: 'og:url', re: /<meta[^>]*property="og:url"/g },
  { label: 'og:image', re: /<meta[^>]*property="og:image"(?!:)/g },
  { label: 'twitter:title', re: /<meta[^>]*name="twitter:title"/g },
  { label: 'twitter:description', re: /<meta[^>]*name="twitter:description"/g },
  { label: 'twitter:image', re: /<meta[^>]*name="twitter:image"/g },
  { label: 'robots', re: /<meta[^>]*name="robots"/g },
];

function countMatches(html, re) {
  return (html.match(re) || []).length;
}

function main() {
  const files = findIndexHtmlFiles(DIST);
  if (files.length === 0) {
    console.error('validate-seo: no dist/**/index.html files found - did the build run?');
    process.exit(1);
  }

  let failures = 0;

  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const relPath = path.relative(DIST, file);
    const problems = [];

    for (const { label, re } of CHECKS) {
      const count = countMatches(html, re);
      if (count !== 1) {
        problems.push(`${label}=${count}`);
      }
    }

    if (problems.length > 0) {
      failures++;
      console.error(`FAIL dist/${relPath}: ${problems.join(', ')}`);
    }
  }

  if (failures > 0) {
    console.error(`\nvalidate-seo: ${failures}/${files.length} page(s) have duplicate or missing SEO tags.`);
    process.exit(1);
  }

  console.log(`validate-seo: ${files.length} page(s) checked, all have exactly one of each critical SEO tag.`);
}

main();
