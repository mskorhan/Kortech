#!/usr/bin/env node
/**
 * Pre-deploy secret scan of the built artifact.
 *
 * Runs after the build and BEFORE the FTPS upload in deploy.yml, so a secret
 * that gets inlined into the bundle fails the deploy instead of shipping.
 *
 * The realistic regression this guards against: someone adds a VITE_* variable
 * holding a real key to .env and references it from client code. Vite inlines
 * the value of each referenced VITE_* variable into the bundle at build time,
 * in plaintext, where anyone can read it. Nothing else in CI would notice.
 *
 * Stated precisely, because it bounds what this gate is worth: Vite inlines
 * only the variables the code actually references, and under static access the
 * VALUE lands in the bundle, not the name. So this catches an inlined secret
 * whose value matches a known key format (Resend, AWS, Stripe, Google, ...). A
 * generic high-entropy token in a VITE_ variable would NOT be caught - no
 * pattern can recognise it. The VITE_-name pattern below only fires on
 * whole-object `import.meta.env` access, where names do reach the output.
 *
 * Fails on: high-signal credential patterns, any source map (a source map
 * republishes original source, and can carry secrets stripped from the bundle),
 * and scanning zero files (a passing absence-check over no bytes is the
 * "test that passes for the wrong reason" failure mode).
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { inflateRawSync } from 'node:zlib';

const DIST = process.argv[2] ?? 'dist';

// Each pattern must be specific enough that a match is almost certainly a real
// credential. Generic words like "password" are deliberately NOT here: this
// site's own copy legitimately contains "Show password" and Apple's
// firmware-password help URL, and a scanner that cries wolf gets disabled.
const PATTERNS = [
  // The leading \b matters. Without it this matched ordinary English mid-word:
  // git history contains "require_extra_approval_for_unattributed_changes",
  // whose "re_extra_approval_..." substring is key-shaped. A left word boundary
  // discriminates exactly - the prose stops matching, a quoted key still does,
  // and both cases are covered by canaries.
  //
  // If this ever needs tightening further, do NOT drop `_` from the character
  // class. The exact Resend key format is not verified here, but `_` is
  // plausible inside one, so removing it risks silently missing real keys while
  // looking stricter. Never delete the pattern.
  [/\bre_[A-Za-z0-9_]{16,}/g,                    'Resend API key'],
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
  // Only reaches the bundle under whole-object `import.meta.env` access, which
  // emits names as well as values. Narrow, but free to check.
  [/VITE_[A-Z0-9_]*(?:SECRET|PASSWORD|PRIVATE|TOKEN|API_KEY)[A-Z0-9_]*/g, 'VITE_ secret-named var inlined into bundle'],
];

// `.md` was the one text extension an inventory of the real build found
// unscanned, so it is added here.
//
// `.htaccess` and `_redirects` were ALREADY covered and are called out because
// it is easy to assume otherwise: `extname()` treats a leading dot as part of
// the basename, so `extname('.htaccess')` is '' - the same as a file with no
// extension at all - and the '' entry matches both. That matters, since
// `.htaccess` is server configuration and the file here most likely to carry a
// credential.
const TEXT_EXT = new Set(['.js','.mjs','.cjs','.css','.html','.json','.txt','.xml','.map','.svg','.webmanifest','.md','']);

// Binary assets that are intentionally not scanned. Credential-shaped ASCII
// does not survive image or font compression, and scanning them would only add
// noise. Listed explicitly so the "scanned N of M" line can be reconciled:
// anything unscanned that is NOT one of these is a gap, not a decision.
//
// Deliberately NOT listed: .pdf, .zip, .gz, .br. Those are containers or
// compressed text, and whitelisting them in advance would let a shipped
// archive pass with no signal - the same mistake the .docx handling exists to
// avoid. None are produced by this build today, so leaving them off costs
// nothing now and forces a decision if one ever appears.
const BINARY_EXT = new Set(['.png','.jpg','.jpeg','.webp','.gif','.ico','.avif','.woff','.woff2','.ttf','.eot','.mp4','.webm']);

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

// Office documents (.docx/.xlsx/.pptx) are zip containers of XML, and published
// ones are shipped to visitors like any other asset, so they get scanned too.
//
// They must be DECOMPRESSED first. Word saves every entry deflated, and deflate
// Huffman-codes literal bytes, so credential-shaped ASCII does NOT survive in
// the raw file - including in document metadata. Reading the raw bytes finds
// nothing and yields a pass that proves nothing. Verified: a key appended to a
// deflated word/document.xml is invisible in the raw bytes and is only found
// after inflating.
const OFFICE_EXT = new Set(['.docx', '.xlsx', '.pptx']);

// Minimal zip reader - no dependency, since this gate must not add one.
// Walks the central directory and inflates each entry, returning the
// concatenated text. Throws if the archive cannot be parsed, so the caller
// can fail closed rather than silently skip a document.
function readZipEntriesAsText(buf) {
  // End of Central Directory: scan back for the 0x06054b50 signature.
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0 && i > buf.length - 66000; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('no End of Central Directory record');

  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16); // offset of first central-directory entry
  const parts = [];

  for (let n = 0; n < count; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('bad central directory entry');
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);

    // Local file header: name/extra lengths here can differ from the central
    // directory's, so read them again to locate the data correctly.
    if (buf.readUInt32LE(localOff) !== 0x04034b50) throw new Error('bad local file header');
    const lNameLen = buf.readUInt16LE(localOff + 26);
    const lExtraLen = buf.readUInt16LE(localOff + 28);
    const dataStart = localOff + 30 + lNameLen + lExtraLen;
    const data = buf.subarray(dataStart, dataStart + compSize);

    if (method === 0) {
      parts.push(data.toString('utf8'));
    } else if (method === 8) {
      parts.push(inflateRawSync(data).toString('utf8'));
    } else {
      throw new Error(`unsupported compression method ${method} for ${name}`);
    }
    p += 46 + nameLen + extraLen + commentLen;
  }
  return parts.join('\n');
}

let scanned = 0;
for (const f of files) {
  const ext = extname(f).toLowerCase();
  if (!TEXT_EXT.has(ext) && !OFFICE_EXT.has(ext)) {
    // Unknown extension: not scanned, and not on the known-binary list either.
    // Report it rather than skipping in silence, so a newly shipped text
    // format cannot slip past this gate unnoticed the way `.htaccess` did.
    if (!BINARY_EXT.has(ext)) {
      findings.push({
        file: relative(DIST, f),
        what: `unrecognised file type "${ext || '(none)'}" was not scanned - add it to TEXT_EXT if it is text, or to BINARY_EXT if it is not`,
        sample: '',
      });
    }
    continue;
  }
  let text;
  if (OFFICE_EXT.has(ext)) {
    // Fail closed: an office document we cannot read is a document we cannot
    // clear, so it becomes a finding rather than a silent skip.
    try {
      text = readZipEntriesAsText(readFileSync(f));
    } catch (err) {
      findings.push({
        file: relative(DIST, f),
        what: `office document could not be parsed, so its contents were not scanned (${err.message})`,
        sample: '',
      });
      continue;
    }
  } else {
    // Fail closed, exactly as the office-document branch above does. A text
    // file we cannot read is a file we cannot clear, so it becomes a finding
    // rather than a silent skip.
    //
    // The bare `continue` this replaces was a real hole: an unreadable asset
    // vanished from the scan while a single readable file elsewhere kept the
    // "scanned 0 files" guard quiet, so the whole run still reported PASS and
    // exit 0. Verified before the fix - one unreadable file alongside one
    // readable one printed "1 text files scanned of 2 total" and passed.
    //
    // Only the error CODE is reported. The message can contain a path, and
    // nothing from the file's contents is ever surfaced.
    try {
      text = readFileSync(f, 'utf8');
    } catch (err) {
      findings.push({
        file: relative(DIST, f),
        what: `file could not be read, so its contents were not scanned (${err.code ?? 'read error'})`,
        sample: '',
      });
      continue;
    }
  }
  scanned++;
  // Only meaningful for real text assets; skip for zip-container documents.
  if (!OFFICE_EXT.has(ext) && /\/\/[#@]\s*sourceMappingURL=/.test(text)) {
    findings.push({ file: relative(DIST, f), what: 'sourceMappingURL reference', sample: '' });
  }
  for (const [re, label] of PATTERNS) {
    re.lastIndex = 0;
    const m = re.exec(text);
    // NEVER print the matched value. This output goes to GitHub Actions logs,
    // which are public for this repository, so echoing even a prefix of a real
    // credential would publish part of the secret the gate exists to catch -
    // and would do it at the exact moment the secret is known to be live.
    // The length alone is enough to tell two findings apart and to confirm the
    // match was credential-shaped rather than a stray short string.
    if (m) findings.push({ file: relative(DIST, f), what: label, sample: `${m[0].length} chars, value redacted` });
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
