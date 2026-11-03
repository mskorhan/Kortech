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

// Reads generate-sitemap.mjs's own route -> source file maps so the two cannot
// drift apart. Built by scanning `'key': 'value'` pairs line by line rather
// than with a per-route regex: an earlier draft interpolated each route into a
// `new RegExp`, which resolved only 2 of 58 routes while the tests below
// silently skipped the other 56 and still reported green.
//
// This is still a mirror of the generator's logic, not the generator itself
// (the generator self-executes on import, so it cannot be imported). The
// ROUTE_COUNT assertion below is what keeps the mirror honest: if it stops
// resolving every route, the suite fails instead of quietly checking less.
const ROUTE_COUNT = 58;

function buildRouteMap() {
  const gen = readFileSync(path.join(repo, 'scripts/generate-sitemap.mjs'), 'utf8');
  const pairs = new Map();
  for (const raw of gen.split(/\r?\n/)) {
    const m = /^\s*'([^']+)'\s*:\s*'([^']+)'\s*,?\s*$/.exec(raw);
    if (m) pairs.set(m[1], m[2]);
  }
  return pairs;
}

function sourceFileForRoute(route, pairs) {
  if (route === '/') return 'src/pages/Home.tsx';
  if (route === '/blog') return 'src/pages/Blog.tsx';
  if (route.startsWith('/blog/')) {
    const file = pairs.get(route.slice('/blog/'.length));
    return file ? `src/pages/blog/${file}` : null;
  }
  const direct = pairs.get(route);
  if (direct && direct.startsWith('src/pages/')) return direct;
  const bySegment = pairs.get(route.replace(/^\//, ''));
  if (bySegment && bySegment.endsWith('.tsx') && !bySegment.includes('/')) {
    return `src/pages/services/${bySegment}`;
  }
  return null;
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
  assert.equal(rows.length, ROUTE_COUNT, `expected ${ROUTE_COUNT} URLs`);
  const pairs = buildRouteMap();
  const mismatched = [];
  const unresolved = [];
  const undated = [];
  for (const { loc, lastmod } of rows) {
    const route = new URL(loc).pathname.replace(/\/$/, '') || '/';
    const file = sourceFileForRoute(route, pairs);
    if (!file) { unresolved.push(route); continue; }
    const expected = git('log', '-1', '--format=%cs', '--', file);
    if (!expected) { undated.push({ route, file }); continue; }
    if (expected !== lastmod) mismatched.push({ route, file, expected, lastmod });
  }
  // Coverage first: without these, the comparison below can pass while
  // checking almost nothing.
  assert.deepEqual(unresolved, [], 'routes this test could not map to a source file');
  assert.deepEqual(undated, [], 'mapped files with no commit date (would use the HEAD fallback)');
  assert.deepEqual(mismatched, [], 'routes whose lastmod disagrees with git history');
});

// 3. Missing mapped files are asserted, not hidden. Today 0 of the 58 routes
//    reach repoFallbackDate(), so a date-spread assertion could never detect
//    a regression here.
//
//    Two distinct failure modes, both verified in a scratch clone:
//      - a RENAMED or DELETED path: `git log -1 -- <old path>` returns the
//        rename/delete COMMIT's date, so the route silently freezes at the
//        date it was renamed and never moves again. lastCommitDate() has no
//        --follow, so the new path's history is not followed.
//      - a path that NEVER existed (a typo in the map): returns empty, so
//        lastmodFor() falls through to repoFallbackDate() = the HEAD date.
//    Neither is caught by comparing dates, which is why this checks existence.
test('every mapped source file exists (a stale path freezes or falls back)', () => {
  const { rows } = sitemap();
  const pairs = buildRouteMap();
  const missing = [];
  for (const { loc } of rows) {
    const route = new URL(loc).pathname.replace(/\/$/, '') || '/';
    const file = sourceFileForRoute(route, pairs);
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
    const read = () => {
      execFileSync('node', ['scripts/generate-sitemap.mjs'], { cwd: tmp, stdio: 'pipe' });
      const xml = readFileSync(path.join(tmp, 'public/sitemap.xml'), 'utf8');
      return [...xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
        .map(([, loc, lastmod]) => ({ loc, lastmod }));
    };
    const before = read();
    assert.equal(before.length, ROUTE_COUNT, `expected ${ROUTE_COUNT} URLs in the reference clone`);
    // A real tooling-only change, not --allow-empty: an empty commit touches
    // no path at all, so it would not exercise the per-file lookup. This
    // mirrors #52, which changed only CI tooling yet moved every live date.
    const touched = path.join(tmp, 'scripts/generate-sitemap.lastmod.test.mjs');
    writeFileSync(touched, `${readFileSync(touched, 'utf8')}\n// tooling-only touch\n`);
    execFileSync('git', ['add', 'scripts/generate-sitemap.lastmod.test.mjs'], { cwd: tmp, stdio: 'pipe' });
    execFileSync('git', ['-c', 'user.email=t@t', '-c', 'user.name=t',
      'commit', '-m', 'test: tooling-only, touches no page file'],
    { cwd: tmp, stdio: 'pipe' });
    assert.deepEqual(read(), before, 'a tooling-only commit changed page lastmod values');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
