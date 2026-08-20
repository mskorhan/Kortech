#!/usr/bin/env node
// Post-build step: serves the built dist/ locally, visits every route
// (including "/") with a headless browser, waits for react-helmet-async +
// app content to render, then writes the fully-rendered HTML to
// dist/<route>/index.html - for "/" this overwrites Vite's built
// dist/index.html in place, since index.html has no static canonical tag
// of its own (that would duplicate the one Helmet renders on every other
// prerendered route).
//
// This gives crawlers that don't execute JS (Bing, link-preview bots, some
// AI answer engines) real per-page titles/meta/schema instead of only the
// generic root index.html. The existing .htaccess SPA fallback still works
// for any route this script doesn't cover, and hydration takes over instantly
// for real users since the prerendered markup matches the client render.
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

async function main() {
  const server = await preview({
    root: ROOT,
    preview: { port: 4173, strictPort: true, host: '127.0.0.1' },
  });
  const base = `http://127.0.0.1:4173`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const { path: route } of routes) {
      const page = await browser.newPage();
      const url = `${base}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Give react-helmet-async's effect a tick to commit title/meta tags.
      await new Promise((r) => setTimeout(r, 150));

      const html = await page.content();
      await page.close();

      const outDir = path.join(ROOT, 'dist', route.replace(/^\//, ''));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
      console.log(`Prerendered ${route}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
