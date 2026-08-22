#!/usr/bin/env node
import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { routes } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://www.kortechservice.com';
const OUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const HTACCESS_PATH = path.join(__dirname, '../public/.htaccess');

// Maps a route path to the source file(s) whose last-commit date should
// drive its <lastmod>. Falls back to the repo's last commit if no mapping.
const pageFileForRoute = (route) => {
  if (route === '/') return 'src/pages/Home.tsx';
  if (route === '/blog') return 'src/pages/Blog.tsx';
  if (route.startsWith('/blog/')) {
    return null; // resolved by scanning src/pages/blog below
  }
  const staticPages = {
    '/about': 'src/pages/About.tsx',
    '/services': 'src/pages/Services.tsx',
    '/pricing': 'src/pages/Pricing.tsx',
    '/contact': 'src/pages/Contact.tsx',
    '/recycling': 'src/pages/Recycling.tsx',
    '/terms': 'src/pages/TermsConditions.tsx',
    '/privacy-policy': 'src/pages/PrivacyPolicy.tsx',
    '/mail-in-form': 'src/pages/MailInForm.tsx',
    '/locations': 'src/pages/locations/Locations.tsx',
    '/charlotte-computer-repair': 'src/pages/locations/Charlotte.tsx',
    '/matthews-computer-repair': 'src/pages/locations/Matthews.tsx',
    '/indian-trail-computer-repair': 'src/pages/locations/IndianTrail.tsx',
    '/mint-hill-computer-repair': 'src/pages/locations/MintHill.tsx',
    '/monroe-computer-repair': 'src/pages/locations/Monroe.tsx',
    '/ballantyne-computer-repair': 'src/pages/locations/Ballantyne.tsx',
    '/pineville-computer-repair': 'src/pages/locations/Pineville.tsx',
    '/waxhaw-computer-repair': 'src/pages/locations/Waxhaw.tsx',
    '/weddington-computer-repair': 'src/pages/locations/Weddington.tsx',
    '/stallings-computer-repair': 'src/pages/locations/Stallings.tsx',
    '/graphic-design': 'src/pages/services/GraphicDesign.tsx',
    '/remote-assistance': 'src/pages/services/RemoteAssistance.tsx',
    '/ps5-hdmi-repair': 'src/pages/services/PS5HDMIRepair.tsx',
    '/xbox-hdmi-repair': 'src/pages/services/XboxHDMIRepair.tsx',
    '/laptop-screen-repair': 'src/pages/services/LaptopScreenRepair.tsx',
    '/ssd-upgrades': 'src/pages/services/SSDUpgrades.tsx',
    '/virus-malware-removal': 'src/pages/services/VirusMalwareRemoval.tsx',
    '/business-it-support': 'src/pages/services/ITSupport.tsx',
    '/data-recovery': 'src/pages/services/DataRecovery.tsx',
    '/custom-gaming-pc': 'src/pages/services/CustomGamingPC.tsx',
    '/water-damage-repair': 'src/pages/services/WaterDamageRepair.tsx',
    '/smartphone-screen-repair-charlotte': 'src/pages/services/SmartphoneRepair.tsx',
    '/tablet-ipad-repair': 'src/pages/services/TabletIPadRepair.tsx',
    '/smart-tv-repair': 'src/pages/services/SmartTVRepair.tsx',
    '/printer-router-repair': 'src/pages/services/PrinterRouterRepair.tsx',
    '/pcb-micro-soldering': 'src/pages/services/PCBMicroSoldering.tsx',
    '/appliance-electronics-repair': 'src/pages/services/ApplianceElectronicsRepair.tsx',
    '/nintendo-switch-repair': 'src/pages/services/NintendoSwitchRepair.tsx',
  };
  return staticPages[route] ?? null;
};

const blogSlugToFile = {
  'how-to-fix-broken-ps5-hdmi-port': 'HowToFixBrokenPS5HDMIPort.tsx',
  'best-ssd-upgrade-old-laptop-2025': 'SSDUpgradesForLaptops2025.tsx',
  'steps-to-remove-virus-from-windows-pc': 'StepsToRemoveVirusFromWindowsPC.tsx',
  'custom-gaming-pc-build-guide-2025': 'CustomGamingPCBuildGuide2025.tsx',
  'signs-hard-drive-failing-data-recovery-tips': 'SignsHardDriveFailingDataRecoveryTips.tsx',
  'how-to-know-when-to-replace-phone-battery': 'HowToKnowWhenToReplacePhoneBattery.tsx',
  'what-is-pcb-micro-soldering': 'WhatIsPCBMicroSoldering.tsx',
  'top-5-signs-smart-tv-needs-repair': 'Top5SignsSmartTVNeedsRepair.tsx',
  'data-recovery-charlotte-2025': 'DataRecoveryCharlotte2025.tsx',
  'laptop-screen-repair-guide-charlotte': 'LaptopScreenRepairGuideCharlotte.tsx',
  'nintendo-switch-repair-guide': 'NintendoSwitchRepairGuide.tsx',
  'xbox-hdmi-repair-guide': 'XboxHDMIRepairGuide.tsx',
  'virus-removal-guide-charlotte': 'VirusRemovalGuideCharlotte.tsx',
  'what-to-do-when-device-gets-wet-charlotte': 'WhatToDoWhenDeviceGetsWetCharlotte.tsx',
  'signs-your-business-needs-it-support': 'SignsYourBusinessNeedsITSupport.tsx',
  'printer-wont-connect-to-wifi-fix': 'PrinterWontConnectToWifiFix.tsx',
  'ipad-screen-repair-cost-guide': 'iPadScreenRepairCostGuide.tsx',
  'small-business-logo-design-checklist': 'SmallBusinessLogoDesignChecklist.tsx',
};

function lastCommitDate(relativeFile) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${relativeFile}"`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

function repoFallbackDate() {
  try {
    return execSync('git log -1 --format=%cs', {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
    }).trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function lastmodFor(route) {
  let file = pageFileForRoute(route);
  if (!file && route.startsWith('/blog/')) {
    const slug = route.replace('/blog/', '');
    const fname = blogSlugToFile[slug];
    if (fname) file = `src/pages/blog/${fname}`;
  }
  if (!file) return repoFallbackDate();
  return lastCommitDate(file) || repoFallbackDate();
}

function buildSitemap() {
  const urls = routes.map(({ path: route, changefreq, priority }) => {
    // The server only serves 200 at the trailing-slash form of every route
    // (Apache's mod_dir appends it for the prerendered directory/index.html
    // layout) - the sitemap must declare the same URL the page's own
    // canonical tag uses, or Google treats them as two different pages.
    const loc = route === '/' ? `${SITE}/` : `${SITE}${route}/`;
    const lastmod = lastmodFor(route);
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>
`;
}

function updateHtaccessKnownRoutes() {
  const segments = new Set();
  for (const { path: route } of routes) {
    if (route === '/') continue;
    const first = route.split('/').filter(Boolean)[0];
    segments.add(first === 'blog' ? 'blog(/[^/]+)?' : first);
  }
  const pattern = `RewriteCond %{REQUEST_URI} !^/(${[...segments].join('|')})/?$`;

  const htaccess = readFileSync(HTACCESS_PATH, 'utf8');
  const beginMarker = '# BEGIN generated known-routes (kept in sync with scripts/routes.mjs by generate-sitemap.mjs)';
  const endMarker = '# END generated known-routes';
  const start = htaccess.indexOf(beginMarker);
  const end = htaccess.indexOf(endMarker);
  if (start === -1 || end === -1) {
    console.warn('generate-sitemap: known-routes markers not found in .htaccess, skipping sync');
    return;
  }
  const before = htaccess.slice(0, start + beginMarker.length);
  const after = htaccess.slice(end);
  const updated = `${before}\n${pattern}\n${after}`;
  writeFileSync(HTACCESS_PATH, updated, 'utf8');
  console.log(`.htaccess known-routes synced (${segments.size} route segments)`);
}

const xml = buildSitemap();
writeFileSync(OUT_PATH, xml, 'utf8');
console.log(`Sitemap written: ${OUT_PATH} (${routes.length} URLs)`);

updateHtaccessKnownRoutes();
