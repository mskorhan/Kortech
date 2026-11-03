// Regression test for the sitemap <lastmod> collapse.
//
// THE DEFECT: generate-sitemap.mjs derives each route's <lastmod> from
//   `git log -1 --format=%cs -- <source file>`
// In a SHALLOW clone (actions/checkout@v4 default fetch-depth: 1) that query
// does NOT fail and does NOT return empty - it resolves to the single
// boundary commit, so every route reports that commit's date and all 58 URLs
// collapse to one value. `repoFallbackDate()` is never reached.
//
// WHY THIS TEST IS SHAPED THIS WAY: the obvious test - compare each route's
// <lastmod> to `git log -1 -- <file>` in the same checkout - PASSES in a
// shallow clone, because both sides return the same boundary date. That is a
// test that passes for the wrong reason. Verified against a real depth-1
// clone: tests 2-4 below all pass there while every date is wrong, and only
// test 1 fails. Test 1 is the guard that actually catches the defect.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const git = (...a) => execFileSync('git', a, { cwd: repo, encoding: 'utf8' }).trim();

// Running the generator rewrites public/sitemap.xml and public/.htaccess.
// Those are committed build artifacts, so the test restores both afterwards
// and leaves the working tree exactly as it found it.
const ARTIFACTS = ['public/sitemap.xml', 'public/.htaccess'];

function sitemap() {
  const saved = ARTIFACTS.map((rel) => {
    const abs = path.join(repo, rel);
    return { abs, before: existsSync(abs) ? readFileSync(abs) : null };
  });
  try {
    execFileSync('node', ['scripts/generate-sitemap.mjs'], { cwd: repo, stdio: 'pipe' });
    const xml = readFileSync(path.join(repo, 'public/sitemap.xml'), 'utf8');
    const rows = [...xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
      .map(([, loc, lastmod]) => ({ loc, lastmod }));
    return { xml, rows };
  } finally {
    for (const { abs, before } of saved) {
      if (before !== null) writeFileSync(abs, before);
      else rmSync(abs, { force: true });
    }
  }
}

// Mirrors generate-sitemap.mjs's route -> source file mapping by reading the
// generator itself, so the two cannot drift apart silently. Returns null for
// anything it cannot resolve, so test 2 skips what it cannot verify rather
// than asserting something false.
function sourceFileForRoute(route) {
  const gen = readFileSync(path.join(repo, 'scripts/generate-sitemap.mjs'), 'utf8');
  if (route === '/') return 'src/pages/Home.tsx';
  if (route === '/blog') return 'src/pages/Blog.tsx';
  if (route.startsWith('/blog/')) {
    const slug = route.slice('/blog/'.length);
    const m = gen.match(new RegExp(`['"]${slug}['"]\\s*:\\s*['"]([^'"]+)['"]`));
    return m ? `src/pages/blog/${m[1]}` : null;
  }
  const m = gen.match(new RegExp(`['"]${route}['"]\\s*:\\s*['"](src/pages/[^'"]+)['"]`));
  if (m) return m[1];
  const seg = route.replace(/^\//, '');
  const g = gen.match(new RegExp(`['"]${seg}['"]\\s*:\\s*['"]([A-Za-z][^'"]*\\.tsx)['"]`));
  return g ? `src/pages/services/${g[1]}` : null;
}

// 1. THE GUARD. Without full history every per-route date below is the same
//    boundary date, and every comparison in this file would pass vacuously.
test('checkout has full history (shallow clone collapses all lastmod values)', () => {
  assert.equal(
    git('rev-parse', '--is-shallow-repository'), 'false',
    'Shallow clone: per-route <lastmod> cannot be derived. '
    + 'Set `fetch-depth: 0` on actions/checkout in every job that runs the build.',
  );
});

// 2. Per-route equivalence against git, joined on <loc>. Deliberately not a
//    comparison of date counts or distributions: those can match while
//    individual routes carry the wrong date.
test('every route lastmod equals its mapped source file last-commit date', () => {
  const { rows } = sitemap();
  assert.equal(rows.length, 58, 'expected 58 URLs');
  const mismatched = [];
  for (const { loc, lastmod } of rows) {
    const route = new URL(loc).pathname.replace(/\/$/, '') || '/';
    const file = sourceFileForRoute(route);
    if (!file) continue;
    const expected = git('log', '-1', '--format=%cs', '--', file);
    if (expected && expected !== lastmod) mismatched.push({ route, file, expected, lastmod });
  }
  assert.deepEqual(mismatched, [], 'routes whose lastmod disagrees with git history');
});

// 3. Unmapped / missing history is asserted, not hidden. Today 0 of the 58
//    routes fall through to the HEAD fallback, so a date-spread assertion
//    could never detect a regression here. A renamed or deleted mapped file
//    would silently take the HEAD date: lastCommitDate() has no --follow and
//    no existence check.
test('every mapped source file exists (a renamed file silently takes the HEAD date)', () => {
  const { rows } = sitemap();
  const missing = [];
  for (const { loc } of rows) {
    const route = new URL(loc).pathname.replace(/\/$/, '') || '/';
    const file = sourceFileForRoute(route);
    if (file && !existsSync(path.join(repo, file))) missing.push({ route, file });
  }
  assert.deepEqual(missing, [], 'mapped page files that no longer exist');
});

// 4. A tooling-only commit must not advance any mapped page's date. This is
//    the symptom that first exposed the defect: #52 changed only CI tooling,
//    yet every live <lastmod> moved to the deploy's commit date.
//
//    This runs in a throwaway clone, never in the working repo. An earlier
//    draft committed and then `git reset --hard`-ed in place, which silently
//    destroyed uncommitted work in the checkout running the test. A test must
//    not mutate the tree it is testing.
test('a commit touching only tooling does not advance any page lastmod', () => {
  const tmp = mkdtempSync(path.join(tmpdir(), 'sitemap-lastmod-'));
  try {
    execFileSync('git', ['clone', '--quiet', '--no-hardlinks', repo, tmp], { stdio: 'pipe' });
    const inTmp = (...a) => execFileSync('git', a, { cwd: tmp, encoding: 'utf8' }).trim();
    if (inTmp('rev-parse', '--is-shallow-repository') !== 'false') {
      execFileSync('git', ['fetch', '--unshallow'], { cwd: tmp, stdio: 'pipe' });
    }
    const read = () => {
      execFileSync('node', ['scripts/generate-sitemap.mjs'], { cwd: tmp, stdio: 'pipe' });
      const xml = readFileSync(path.join(tmp, 'public/sitemap.xml'), 'utf8');
      return [...xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
        .map(([, loc, lastmod]) => ({ loc, lastmod }));
    };
    const before = read();
    assert.equal(before.length, 58, 'expected 58 URLs in the reference clone');
    execFileSync('git', ['-c', 'user.email=t@t', '-c', 'user.name=t',
      'commit', '--allow-empty', '-m', 'test: tooling-only, touches no page'],
    { cwd: tmp, stdio: 'pipe' });
    assert.deepEqual(read(), before, 'a tooling-only commit changed page lastmod values');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
