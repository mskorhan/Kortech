#!/usr/bin/env node
/**
 * Canary tests for the pre-deploy secret scanner.
 *
 * A guard that has never been shown to FAIL is not a guard - it is a step that
 * always prints PASS. Each positive case below plants a credential-shaped value
 * in a throwaway build directory and asserts the scanner exits non-zero AND
 * names the right finding; each negative case asserts ordinary site content
 * still passes, because a scanner that cries wolf gets switched off.
 *
 * TWO CONSTRAINTS SHAPE THIS FILE.
 *
 * 1. Every credential literal is ASSEMBLED AT RUNTIME from fragments, never
 *    written out whole. This repository is public, and a real-looking `AKIA...`
 *    or `ghp_...` sitting in committed source trips GitHub push protection and
 *    secret-scanning alerts. The scanner reads bytes at runtime and cannot tell
 *    the difference, so concatenation costs nothing and keeps the push clean.
 *    None of these are real credentials - they are shaped like credentials.
 *
 * 2. Fixtures are written to a fresh mkdtemp directory and never to `dist/`.
 *    Planting a fake secret in the real build output risks it surviving into an
 *    actual deploy if a run is interrupted.
 *
 * Run: npm run test:scan-secrets
 */
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { deflateRawSync } from 'node:zlib';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SCANNER = join(HERE, 'scan-dist-secrets.mjs');

// Assembled at runtime - see constraint 1 above. Not real credentials.
const FAKE = {
  resend:   're' + '_' + 'A'.repeat(20),
  stripe:   'sk' + '_live_' + 'B'.repeat(24),
  aws:      'AK' + 'IA' + 'C'.repeat(16),
  google:   'AI' + 'za' + 'D'.repeat(35),
  github:   'gh' + 'p_' + 'E'.repeat(36),
  slack:    'xo' + 'xb-' + '1234567890' + '-abcdefghij',
  privkey:  '-----BEGIN ' + 'PRIVATE KEY' + '-----',
  pgUrl:    'post' + 'gresql://user:pw@db.example.com:5432/app',
  credUrl:  'https://admin:hunter2@internal.example.com/x',
  // Header and payload must each clear the scanner's {15,} minimum.
  jwt:      'ey' + 'J' + 'a'.repeat(16) + '.' + 'ey' + 'J' + 'b'.repeat(16) + '.sig',
};

let pass = 0;
let fail = 0;

const FAIL_READ_PRELOAD = pathToFileURL(join(HERE, 'scan-dist-secrets.failread.mjs')).href;

/**
 * Run the scanner as a real child process.
 *
 * `failRead` makes one exact path unreadable via a --import preload rather
 * than via chmod. Permissions are the obvious way to do this and the wrong
 * one: they are not portable to Windows, and a CI job running as root can
 * read a 000-mode file anyway, so a permissions-based test would quietly stop
 * testing anything. Injecting the error keeps the case deterministic
 * everywhere.
 */
function run(dir, failRead) {
  const args = failRead
    ? ['--import', FAIL_READ_PRELOAD, SCANNER, dir]
    : [SCANNER, dir];
  const r = spawnSync(process.execPath, args, {
    encoding: 'utf8',
    env: { ...process.env, SCAN_FAIL_READ_PATH: failRead ?? '' },
  });
  return { code: r.status, out: `${r.stdout}${r.stderr}` };
}

/** Build a throwaway dist-like dir, run the scanner, assert, clean up. */
function check(name, { files, expectFail, expectText, expectAbsent, failReadFile }) {
  const dir = mkdtempSync(join(tmpdir(), 'scan-canary-'));
  try {
    for (const [rel, content] of Object.entries(files)) {
      const full = join(dir, rel);
      mkdirSync(dirname(full), { recursive: true });
      writeFileSync(full, content);
    }
    const { code, out } = run(dir, failReadFile ? join(dir, failReadFile) : undefined);
    const failed = code !== 0;
    let ok = failed === expectFail;
    if (ok && expectText) ok = out.includes(expectText);
    // Negative assertions. These exist because a positive-only check is not a
    // redaction test: asserting that "value redacted" APPEARS says nothing
    // about whether the secret ALSO appears somewhere else in the output.
    // Verified - adding `console.error(m[0])` to the scanner left all 29
    // positive-only cases passing while the full credential was printed.
    let leaked = null;
    if (ok && expectAbsent) {
      leaked = expectAbsent.find((bad) => out.includes(bad)) ?? null;
      if (leaked) ok = false;
    }
    if (ok) {
      pass++;
      console.log(`  ok    ${name}`);
    } else {
      fail++;
      console.log(`  FAIL  ${name}`);
      if (leaked) {
        // Describe the leak without reprinting it - this harness's own output
        // goes to the same public CI log the scanner's does.
        console.log(`        LEAK: scanner output contained a value it must redact (${leaked.length} chars)`);
      }
      console.log(`        expected ${expectFail ? 'non-zero' : 'zero'} exit${expectText ? ` containing "${expectText}"` : ''}, got exit ${code}`);
      // Mask any value we asserted must be absent before echoing the output.
      // Otherwise the harness would republish, in the same public CI log, the
      // exact secret whose leak it is reporting.
      let shown = out;
      for (const bad of expectAbsent ?? []) {
        shown = shown.split(bad).join(`<redacted ${bad.length} chars>`);
      }
      console.log(`        output: ${shown.trim().split('\n').join('\n        ')}`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Build a minimal .docx-shaped zip with one DEFLATED entry.
 *
 * This matters more than it looks. The first version of the Office coverage
 * planted the key in a STORED entry and "passed" - but Word deflates every
 * entry, and deflate Huffman-codes literal bytes, so a key inside a real
 * document is absent from the raw file. A scanner reading raw bytes finds
 * nothing and reports PASS, which is a test passing for the wrong reason.
 * Deflating here is the whole point of the case.
 */
function makeDocx(innerText) {
  const name = Buffer.from('word/document.xml');
  const raw = Buffer.from(`<w:document>${innerText}</w:document>`);
  const comp = deflateRawSync(raw);
  const crc = (() => {
    let c = ~0;
    for (const b of raw) {
      c ^= b;
      for (let i = 0; i < 8; i++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
    }
    return ~c >>> 0;
  })();

  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(8, 8);            // method: deflate
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(comp.length, 18);
  local.writeUInt32LE(raw.length, 22);
  local.writeUInt16LE(name.length, 26);
  const localPart = Buffer.concat([local, name, comp]);

  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(20, 4);
  central.writeUInt16LE(20, 6);
  central.writeUInt16LE(8, 10);         // method: deflate
  central.writeUInt32LE(crc, 16);
  central.writeUInt32LE(comp.length, 20);
  central.writeUInt32LE(raw.length, 24);
  central.writeUInt16LE(name.length, 28);
  central.writeUInt32LE(0, 42);         // local header offset
  const centralPart = Buffer.concat([central, name]);

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(1, 8);
  eocd.writeUInt16LE(1, 10);
  eocd.writeUInt32LE(centralPart.length, 12);
  eocd.writeUInt32LE(localPart.length, 16);

  return Buffer.concat([localPart, centralPart, eocd]);
}

const CLEAN_JS = 'export const n=1;console.log("hello");';

console.log('\nPositive cases - the scanner MUST fail these:\n');

check('Resend API key in a bundle', {
  files: { 'assets/app.js': `const k="${FAKE.resend}";` },
  expectFail: true, expectText: 'Resend API key',
});
check('Stripe live secret key', {
  files: { 'assets/app.js': `const k="${FAKE.stripe}";` },
  expectFail: true, expectText: 'Stripe live secret key',
});
check('AWS access key id', {
  files: { 'assets/app.js': `const k="${FAKE.aws}";` },
  expectFail: true, expectText: 'AWS access key id',
});
check('Google API key', {
  files: { 'assets/app.js': `const k="${FAKE.google}";` },
  expectFail: true, expectText: 'Google API key',
});
check('GitHub personal access token', {
  files: { 'assets/app.js': `const k="${FAKE.github}";` },
  expectFail: true, expectText: 'GitHub personal access token',
});
check('Slack token', {
  files: { 'assets/app.js': `const k="${FAKE.slack}";` },
  expectFail: true, expectText: 'Slack token',
});
check('private key block', {
  files: { 'assets/app.js': `/* ${FAKE.privkey} */` },
  expectFail: true, expectText: 'private key block',
});
check('JWT with payload', {
  files: { 'assets/app.js': `const t="${FAKE.jwt}";` },
  expectFail: true, expectText: 'JWT with payload',
});
check('database connection string', {
  files: { 'assets/app.js': `const u="${FAKE.pgUrl}";` },
  expectFail: true, expectText: 'database connection string',
});
check('URL with embedded credentials', {
  files: { 'assets/app.js': `const u="${FAKE.credUrl}";` },
  expectFail: true, expectText: 'URL with embedded credentials',
});
check('source map file present', {
  files: { 'assets/app.js': CLEAN_JS, 'assets/app.js.map': '{"version":3}' },
  expectFail: true, expectText: 'source map',
});
check('sourceMappingURL reference', {
  files: { 'assets/app.js': `${CLEAN_JS}\n//# sourceMappingURL=app.js.map` },
  expectFail: true, expectText: 'sourceMappingURL',
});
check('VITE_ secret-named var inlined', {
  files: { 'assets/app.js': 'const e={VITE_API_SECRET:"x"};' },
  expectFail: true, expectText: 'VITE_',
});
check('key inside a DEFLATED .docx (not visible in raw bytes)', {
  files: { 'docs/handbook.docx': makeDocx(`token ${FAKE.resend} end`) },
  expectFail: true, expectText: 'Resend API key',
});
// The clean .js here is REQUIRED, and its absence is a trap worth naming.
// An unreadable office document is `continue`d before the scanned counter is
// incremented, so a directory holding ONLY a broken .docx exits non-zero via
// the "scanned 0 text files" guard instead - the right exit code for the wrong
// reason, which would let a regression in the fail-closed path go unnoticed.
// The extra text file keeps the counter non-zero so this case can only pass by
// actually reporting the parse failure.
check('unparseable .docx fails closed', {
  files: { 'docs/broken.docx': Buffer.from('not a zip at all'), 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'could not be parsed',
});
check('empty build directory proves nothing', {
  files: {},
  expectFail: true, expectText: 'scanned 0 text files',
});
// `.htaccess` is server configuration - the file in a build most likely to
// carry a credential - and it is covered only incidentally, by the ''
// (extensionless) entry, because `extname()` treats a leading dot as part of
// the basename. Nothing names it explicitly, so these two cases pin that
// coverage against a future tightening of TEXT_EXT.
check('key in .htaccess is caught', {
  files: { '.htaccess': `# SetEnv API_KEY ${FAKE.resend}`, 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'Resend API key',
});
check('key in an extensionless file is caught', {
  files: { '_redirects': `/x https://admin:hunter2@internal.example.com/y 302`, 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'URL with embedded credentials',
});
// A text format nobody thought about must not pass by being unrecognised.
check('unrecognised file type is reported, not skipped', {
  files: { 'data/config.yaml': 'key: value', 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'unrecognised file type',
});
// Containers must NOT be pre-whitelisted as "binary". A shipped .zip or .pdf
// can hold credential-shaped text that the scanner cannot see, so the right
// outcome is a signal to decide, not a silent pass.
check('a shipped .zip is reported rather than waved through', {
  files: { 'downloads/bundle.zip': Buffer.from('PK\x03\x04binary'), 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'unrecognised file type',
});
check('a shipped .pdf is reported rather than waved through', {
  files: { 'docs/flyer.pdf': Buffer.from('%PDF-1.7'), 'assets/app.js': CLEAN_JS },
  expectFail: true, expectText: 'unrecognised file type',
});

// REGRESSION. An unreadable text file used to hit a bare `continue` and vanish
// from the scan in total silence.
//
// The second file here is the whole point of the case. With only the
// unreadable file present the run exits non-zero anyway through the
// "scanned 0 text files" guard - the right exit code for the wrong reason,
// which would let this defect return unnoticed. The readable control keeps
// that guard quiet, so this case can only pass if the unreadable file is
// genuinely reported.
//
// Measured on the unfixed scanner, this exact shape printed
// "1 text files scanned of 2 total" and exited 0.
check('an unreadable text file is a finding, not a silent skip', {
  files: { 'assets/unreadable.js': CLEAN_JS, 'assets/readable.js': CLEAN_JS },
  failReadFile: 'assets/unreadable.js',
  expectFail: true, expectText: 'could not be read',
});
// The injected failure must be the only reason the case above fails.
check('the same two files pass when nothing is made unreadable', {
  files: { 'assets/unreadable.js': CLEAN_JS, 'assets/readable.js': CLEAN_JS },
  expectFail: false,
});
// Findings must never echo the matched bytes - this output lands in public
// Actions logs.
//
// The assertions below are deliberately NEGATIVE, and that is the whole point
// of the case. An earlier version checked only that "value redacted" appeared,
// which is not a redaction test: it says nothing about whether the secret also
// appears elsewhere in the output. Independent review proved it hollow by
// adding `console.error(m[0])` to the scanner - the full credential was
// printed and all 29 cases still passed.
//
// `expectAbsent` is checked against combined stdout+stderr, so a leak through
// either stream fails. It covers both the whole synthetic credential and the
// 12-character prefix the scanner used to print, so neither the original
// behaviour nor a raw dump can return unnoticed.
check('a finding reports length only, never the credential value', {
  files: { 'assets/app.js': `const k="${FAKE.aws}";` },
  expectFail: true,
  expectText: 'value redacted',
  expectAbsent: [FAKE.aws, FAKE.aws.slice(0, 12)],
});
// Same guarantee for a different pattern, so the redaction is not accidentally
// specific to one branch.
check('a Resend-key finding also never echoes the value', {
  files: { 'assets/app.js': `const k="${FAKE.resend}";` },
  expectFail: true,
  expectText: 'value redacted',
  expectAbsent: [FAKE.resend, FAKE.resend.slice(0, 12)],
});

console.log('\nNegative cases - the scanner MUST pass these:\n');

check('ordinary clean bundle', {
  files: { 'assets/app.js': CLEAN_JS, 'index.html': '<!doctype html><p>Hi</p>' },
  expectFail: false,
});
check('the prose that caused a real false positive', {
  // "require_extra_approval_for_unattributed_changes" contains the substring
  // "re_extra_approval_for_unattributed_changes", which is Resend-key-shaped.
  // The scanner's leading \b is what stops this matching mid-word. Without
  // that anchor this case fails, which is exactly why it is pinned here.
  files: { 'assets/doc.js': 'const s="require_extra_approval_for_unattributed_changes";' },
  expectFail: false,
});
check('site copy mentioning passwords', {
  files: { 'index.html': '<p>Show password. Reset your firmware password.</p>' },
  expectFail: false,
});
check('clean deflated .docx', {
  files: { 'docs/ok.docx': makeDocx('ordinary document text'), 'index.html': '<p>x</p>' },
  expectFail: false,
});
// Images are the normal contents of a build and must not be reported as gaps,
// otherwise the unrecognised-type check above would fail every real deploy.
check('binary image assets are not flagged as gaps', {
  files: {
    'img/logo.png': Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    'img/photo.jpg': Buffer.from([0xff, 0xd8, 0xff, 0xe0]),
    'favicon.ico': Buffer.from([0x00, 0x00, 0x01, 0x00]),
    'assets/app.js': CLEAN_JS,
  },
  expectFail: false,
});

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail > 0 ? 1 : 0);
