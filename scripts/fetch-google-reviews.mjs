// Fetches real Google Business reviews via the Places API (Place Details),
// keeps only 5-star reviews, and writes src/data/reviews.json for the site
// to render at build time. Intended to run monthly via GitHub Actions
// (.github/workflows/update-reviews.yml) — never runs in the browser and
// never ships the API key to client code.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
  console.error(
    'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variable. ' +
    'See deployment-guide.md for setup instructions.'
  );
  process.exit(1);
}

const fields = ['rating', 'user_ratings_total', 'reviews'].join(',');
const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&reviews_no_translations=true&key=${apiKey}`;

const response = await fetch(url);
if (!response.ok) {
  console.error(`Google Places API request failed: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const payload = await response.json();
if (payload.status !== 'OK') {
  console.error(`Google Places API returned status "${payload.status}": ${payload.error_message ?? 'no details'}`);
  process.exit(1);
}

const result = payload.result ?? {};
const allReviews = Array.isArray(result.reviews) ? result.reviews : [];

const fiveStarReviews = allReviews
  .filter((review) => review.rating === 5)
  .map((review) => ({
    author: review.author_name,
    text: review.text,
    time: review.time,
    relativeTime: review.relative_time_description
  }));

const data = {
  updatedAt: new Date().toISOString(),
  rating: result.rating ?? null,
  totalReviews: result.user_ratings_total ?? null,
  googleMapsUrl: 'https://g.page/kortechservice',
  fiveStarReviews
};

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'data',
  'reviews.json'
);

await writeFile(outPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(`Wrote ${fiveStarReviews.length} five-star review(s) to ${outPath}`);
