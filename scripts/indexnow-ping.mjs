#!/usr/bin/env node
// Notifies IndexNow (Bing, and any other participating search engine) that
// the site's URLs have changed, so they can be recrawled faster than a
// normal sitemap-polling cycle. The key file at public/<key>.txt is meant
// to be public - that's how IndexNow verifies site ownership, it is not a
// secret. This script performs no auth and reads no credentials; it just
// POSTs the sitemap's URL list plus the key to the IndexNow API.
//
// Wired into CI: .github/workflows/deploy.yml runs this automatically
// after every successful production deploy (push to main). It is
// intentionally NOT run on PR builds - only after a real production
// deployment, since IndexNow submissions should reflect what's actually
// live. The deploy workflow treats failures here as a non-fatal warning,
// not a failed deployment (see the retry/backoff below).
//
// Manual usage (e.g. to retry, or to notify about specific URLs only):
//
//   node scripts/indexnow-ping.mjs
//   node scripts/indexnow-ping.mjs /blog/some-new-post/ /pricing/
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://www.kortechservice.com';
const KEY = '7ba2ed8bc5364146aa46932994c8aeee';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

const RETRY_DELAYS_MS = [3000, 8000, 15000]; // handles brief Bluehost/CDN cache propagation lag

function urlsFromSitemap() {
  const xml = readFileSync(SITEMAP_PATH, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function verifyKeyFileLive() {
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const res = await fetch(KEY_LOCATION, { cache: 'no-store' });
      if (res.ok) {
        const body = (await res.text()).trim();
        if (body === KEY) return true;
        console.error(`IndexNow key file live but content mismatch: expected "${KEY}", got "${body}"`);
        return false;
      }
      console.warn(`IndexNow key file check: ${res.status} ${res.statusText} (attempt ${attempt + 1})`);
    } catch (err) {
      console.warn(`IndexNow key file check failed: ${err.message} (attempt ${attempt + 1})`);
    }
    if (attempt < RETRY_DELAYS_MS.length) await sleep(RETRY_DELAYS_MS[attempt]);
  }
  return false;
}

async function submitToIndexNow(urlList) {
  const body = {
    host: 'www.kortechservice.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      });

      // 200 = accepted, 202 = accepted, key not yet fully verified (normal
      // on first-ever submission) - both are success.
      if (res.ok || res.status === 202) {
        console.log(`IndexNow response: ${res.status} ${res.statusText}`);
        return true;
      }
      const text = await res.text().catch(() => '');
      console.warn(`IndexNow submission failed: ${res.status} ${res.statusText} ${text} (attempt ${attempt + 1})`);
    } catch (err) {
      console.warn(`IndexNow submission error: ${err.message} (attempt ${attempt + 1})`);
    }
    if (attempt < RETRY_DELAYS_MS.length) await sleep(RETRY_DELAYS_MS[attempt]);
  }
  return false;
}

async function main() {
  const argUrls = process.argv.slice(2);
  const urlList = argUrls.length > 0
    ? argUrls.map((u) => (u.startsWith('http') ? u : `${SITE}${u}`))
    : urlsFromSitemap();

  console.log(`Verifying IndexNow key file is live at ${KEY_LOCATION}...`);
  const keyLive = await verifyKeyFileLive();
  if (!keyLive) {
    console.error('IndexNow key file could not be verified live after retries. Skipping submission.');
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow...`);
  const submitted = await submitToIndexNow(urlList);
  if (!submitted) {
    console.error('IndexNow submission failed after retries.');
    process.exit(1);
  }
}

main();
