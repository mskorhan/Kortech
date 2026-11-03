#!/usr/bin/env node
/**
 * Pre-deploy secret scan of the built artifact.
 *
 * Runs after the build and BEFORE the FTPS upload in deploy.yml, so a secret
 * that gets inlined into the bundle fails the deploy instead of shipping.
 *
 * The realistic regression this guards against: someone adds a VITE_* variable
 * holding a real key to .env. Vite inlines every VITE_* value into the client
 * bundle at build time, in plaintext, where anyone can read it. Nothing else in
 * CI would notice.
 *
 * Fails on: high-signal credential patterns, any source map (a source map
 * republishes original source, and can carry secrets stripped from the bundle),
 * and scanning zero files (a passing absence-check over no bytes is the
 * "test that passes for the wrong reason" failure mode).
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const DIST = process.argv[2] ?? 'dist';

// Each pattern must be specific enough that a match is almost certainly a real
// credential. Generic words like "password" are deliberately NOT here: this
// site's own copy legitimately contains "Show password" and Apple's
// firmware-password help URL, and a scanner that cries wolf gets disabled.
const PATTERNS = [
  [/re_[A-Za-z0-9_]{16,}/g,                      'Resend API key'],
  [/sk_live_[A-Za-z0-9]{10,}/g,                  'Stripe live secret key'],
  [/rk_live_[A-Za-z0-9]{10,}/g,                  'Stripe live restricted key'],
  [/AKIA[0-9A-Z]{16}/g,                          'AWS access key id'],
  [/AIza[0-9A-Za-z_-]{35}/g,                     'Google API key'],
  [/GOCSPX-[A-Za-z0-9_-]{10,}/g,                 'Google OAuth client secret'],
  [/ghp_[A-Za-z0-9]{36}/g,                       'GitHub personal access token'],
  [/github_pat_[A-Za-z0-9_]{20,}/g,              'GitHub fine-grained PAT'],
  [/xox[baprs]-[A-Za-z0-9-]{10,}/g,              'Slack token'],
  [/SG\.[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{16,}/g,'SendGrid API key'],
  [/-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/g, 'private key block'],
  [/eyJ[A-Za-z0-9_-]{15,}\.eyJ[A-Za-z0-9_-]{15,}\./g, 'JWT with payload'],
  [/(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|amqp|mssql):\/\/[^\s"')]{6,}/g, 'database connection string'],
  [/https?:\/\/[A-Za-z0-9._%-]+:[^@/\s"')]+@/g,  'URL with embedded credentials'],
  // VITE_-prefixed vars are inlined by Vite; one named like a secret is a bug.
  [/VITE_[A-Z0-9_]*(?:SECRET|PASSWORD|PRIVATE|TOKEN|API_KEY)[A-Z0-9_]*/g, 'VITE_ secret-named var inlined into bundle'],
];

const TEXT_EXT = new Set(['.js','.mjs','.cjs','.css','.html','.json','.txt','.xml','.map','.svg','.webmanifest','']);

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

let files;
try {
  files = walk(DIST);
} catch (err) {
  console.error(`FAIL: cannot read build directory "${DIST}": ${err.message}`);
  process.exit(1);
}

const findings = [];

// A source map is a finding in its own right, regardless of content.
for (const f of files) {
  if (extname(f) === '.map') {
    findings.push({ file: relative(DIST, f), what: 'source map present in build output', sample: '' });
  }
}

let scanned = 0;
for (const f of files) {
  if (!TEXT_EXT.has(extname(f).toLowerCase())) continue;
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { continue; }
  scanned++;
  if (/\/\/[#@]\s*sourceMappingURL=/.test(text)) {
    findings.push({ file: relative(DIST, f), what: 'sourceMappingURL reference', sample: '' });
  }
  for (const [re, label] of PATTERNS) {
    re.lastIndex = 0;
    const m = re.exec(text);
    if (m) findings.push({ file: relative(DIST, f), what: label, sample: `${m[0].slice(0, 12)}...` });
  }
}

// Zero files scanned means the scan proved nothing. Treat as failure.
if (scanned === 0) {
  console.error(`FAIL: scanned 0 text files under "${DIST}" - the build output is missing or empty, so this check proves nothing.`);
  process.exit(1);
}

if (findings.length > 0) {
  console.error(`FAIL: ${findings.length} potential secret/source-map finding(s) in "${DIST}":\n`);
  for (const f of findings) {
    console.error(`  ${f.file}: ${f.what}${f.sample ? ` (${f.sample})` : ''}`);
  }
  console.error('\nNothing is deployed. Client-side code is world-readable: move the');
  console.error('credential to a server-side secret (a Worker secret or a CI secret) and');
  console.error('have the browser call an endpoint that holds it, never the key itself.');
  process.exit(1);
}

console.log(`PASS: no credentials or source maps found (${scanned} text files scanned of ${files.length} total in "${DIST}").`);
