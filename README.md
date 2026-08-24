# KorTech Service Website - Static Version

A modern, professional static website for KorTech Service - Computer Repair Charlotte NC.

## Features

- **Static Website**: No backend dependencies, ready for upload to any web server
- **Responsive Design**: Works perfectly on all devices
- **Professional Pages**: Home, About, Services, Pricing, Contact, Recycling, Terms, and Mail-In Form
- **Contact Integration**: Direct phone, text, and email links for immediate customer contact
- **SEO Optimized**: Fully optimized for Charlotte computer repair searches
- **Print-Ready Forms**: Professional mail-in repair forms that print beautifully

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with all static files ready for upload.

## Deployment to Bluehost

### Upload to Your Domain
1. Run `npm run build`
2. Upload all contents of the `dist` folder to your domain's root directory (public_html)
3. Ensure your logo file `transparent-logo-1.png` is accessible
4. The `.htaccess` file is included for proper routing

### File Structure After Build
```
dist/                    # Upload this entire folder's contents to public_html
├── index.html          # Main HTML file
├── assets/             # CSS, JS, and other assets
├── transparent-logo-1.png  # Company logo
├── .htaccess          # Apache server configuration
└── _redirects         # Netlify redirects (not needed for Bluehost)
```

## Pages Included

### Main Pages:
- **Home**: Main landing page with services overview and CTAs
- **About**: Company history, values, and team information
- **Services**: Detailed service offerings and process
- **Pricing**: Service packages and transparent pricing
- **Contact**: Contact information, map, and business details
- **Recycling**: Free electronics recycling program
- **Terms & Conditions**: Shipping and service terms
- **Mail-In Form**: Professional shipping form for mail-in repairs

### Key Features:
- **Static Google Reviews**: Shows 4.8★ rating and review count
- **Contact Forms**: Email integration via mailto links
- **Print-Ready Forms**: Professional mail-in repair forms
- **Mobile Responsive**: Perfect on all screen sizes
- **Fast Loading**: Optimized for speed and performance

## Contact Integration

All contact methods work without backend:
- **Phone**: `tel:704-246-7642` (direct dial)
- **Text**: `sms:980-888-5300` (direct SMS)
- **Email**: `mailto:info@kortechservice.com` (opens email client)
- **Forms**: Use mailto with pre-filled subject and body

## Business Information

- **Phone**: 704-246-7642
- **Text/Mobile**: 980-888-5300
- **Email**: info@kortechservice.com
- **Address**: 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270
- **Hours**: Mon-Fri 9AM-6PM, Sat 11AM-4PM, Sun Closed

## Google Reviews Integration

### Current Implementation
The `FiveStarReviews` component (`src/components/FiveStarReviews.tsx`) renders real,
5-star-only Google reviews from `src/data/reviews.json`. That file is generated
automatically once a month by a GitHub Actions workflow — see
"Automated Monthly Google Reviews Refresh" in `deployment-guide.md` for full setup
instructions (Google Cloud project, Places API key, Place ID, and required GitHub
secrets).

### Security Note
The Google Places API key is only ever used server-side inside the GitHub Actions
workflow (`scripts/fetch-google-reviews.mjs`) — it is never bundled into the frontend
or exposed to visitor browsers.

## Server Configuration

The included `.htaccess` file provides:
- HTTPS redirect
- React Router support (for client-side routing)
- Compression enabled
- Cache headers for performance
- Security headers

## SEO Features

- **Meta tags** optimized for Charlotte computer repair
- **Schema markup** for local business
- **Optimized page titles** and descriptions
- **Fast loading times**
- **Mobile-responsive design**
- **Clean URLs** with proper routing

### SEO Architecture & Status (as of PR #9, 2026-08-24)

Verified live in production:

- All 57 sitemap URLs use the canonical trailing-slash format (`/services/`, not `/services`).
- `canonical` = `og:url` = sitemap `<loc>` = breadcrumb JSON-LD = relevant per-page JSON-LD URLs — all consistent, all trailing-slash, on all 57 prerendered pages.
- Internal navigation (header/footer/CTAs/location links/blog links) points directly at canonical trailing-slash URLs — no unnecessary `301` hop on click.
- Non-slash paths still `301` to their trailing-slash canonical form, which returns a direct `200`.
- Nonexistent URLs return a real `404` (Apache `ErrorDocument 404` serves the SPA shell so React Router renders the NotFound page, but with a true `404` HTTP status for crawlers).
- Known legacy/garbage URLs (numeric `.shtml` bot-probe paths, `/faqs/`) are intentionally left as real `404`s — no fake pages or blanket redirects were created to silence Search Console.
- Legacy aliases redirect correctly: `/it-support` → `301` → `/business-it-support/`, `/laptop-repair` → `301` → `/laptop-screen-repair/` (single hop, no loops).
- No fabricated service-area `LocalBusiness` entities — the `Locations` page's `ItemList` JSON-LD reflects the real 10 service-area pages only.
- Correct, consistent metadata/schema output is enforced across every prerendered page (see validators below).

### Build-Pipeline Validators

`npm run build` runs, in order: `generate-sitemap.mjs` → `vite build` → `prerender.mjs` → `validate-seo.mjs` → `check-dist-internal-links.mjs`. The last two fail the build (and CI) on regression:

- **`scripts/validate-seo.mjs`** — checks every prerendered page has exactly one of each critical SEO tag and that canonical/sitemap/`og:url` values are consistent.
- **`scripts/check-dist-internal-links.mjs`** — crawls the prerendered `dist/` output and fails the build if any internal link isn't a trailing-slash path with a matching prerendered page.
- **`public/.htaccess`'s known-routes whitelist** (between the `BEGIN/END generated known-routes` markers) is kept in sync with the app's routes by `generate-sitemap.mjs` on every build — do not hand-edit that block.

### Workflow

Routing/canonical/redirect/`.htaccess` changes go through: new branch → focused fix → local validation (`type-check`, `lint`, `build`) → PR → required CI build check → merge only after explicit go-ahead. Never push routing or `.htaccess` changes directly to `main`.

### Handling Google Search Console reports

GSC crawl data lags production by hours to days and can reflect state from before a fix shipped. Before treating a GSC "not indexed" or "duplicate canonical" report as a live defect:

1. Compare the report's *last crawl date* against recent deploy dates/commits.
2. Test the current live URL directly (curl for status/redirect chain, and/or Search Console's "Test Live URL").
3. Only change code if the problem is **currently reproducible in production** — historical GSC data alone is not sufficient reason for a change.
4. Never create fake redirects, fake pages, or blanket redirects-to-homepage just to make a Search Console warning disappear. Intentional 404s (deleted/garbage/bot-probed URLs with no real replacement) should stay 404.

As of 2026-08-24, known GSC state and disposition:
- **Duplicate, Google chose different canonical than user** — sole example `/about/`; confirmed clean via Live Test; Validate Fix started; awaiting Google's recrawl.
- **Not found (404)** — 8 examples: 6 numeric `.shtml` + `/faqs/` are intentional (no replacement, bot/legacy noise only); `/it-support` is fixed live but not yet recrawled by Google. Validate Fix intentionally **not** started for this category while intentional 404s remain in the sample.

## Performance

- **Optimized for fast loading**
- **Minimal dependencies** (React, React Router, Lucide icons)
- **Compressed assets**
- **Efficient image loading**
- **Mobile-first responsive design**

## Support

This is a static website with no backend dependencies. The website includes:
- Professional design and branding
- All necessary business pages
- Contact forms that work via email
- Print-ready mail-in forms
- Google Maps integration
- Social media links
- SEO optimization

The website is production-ready and optimized for search engines and user experience.