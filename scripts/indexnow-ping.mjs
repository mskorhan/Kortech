#!/usr/bin/env node
// Notifies IndexNow (Bing, and any other participating search engine) that
// the site's URLs have changed, so they can be recrawled faster than a
// normal sitemap-polling cycle. The key file at public/<key>.txt is meant
// to be public - that's how IndexNow verifies site ownership, it is not a
// secret. This script performs no auth and reads no credentials; it just
// POSTs the sitemap's URL list plus the key to the IndexNow API.
//
// This is NOT wired into CI. The site deploys via FTP (see
// .github/workflows/deploy.yml) with no server-side hook to run this
// automatically post-deploy, so run it manually after a production deploy:
//
//   node scripts/indexnow-ping.mjs
//
// Or point it at specific changed URLs only:
//
//   node scripts/indexnow-ping.mjs /blog/some-new-post/ /pricing/
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://www.kortechservice.com';
const KEY = '7ba2ed8bc5364146aa46932994c8aeee';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function urlsFromSitemap() {
  const xml = readFileSync(SITEMAP_PATH, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const argUrls = process.argv.slice(2);
  const urlList = argUrls.length > 0
    ? argUrls.map((u) => (u.startsWith('http') ? u : `${SITE}${u}`))
    : urlsFromSitemap();

  const body = {
    host: 'www.kortechservice.com',
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (!res.ok && res.status !== 202) {
    const text = await res.text().catch(() => '');
    console.error(text);
    process.exit(1);
  }
}

main();
