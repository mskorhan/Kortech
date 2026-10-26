// Request-validation tests for the notify worker.
//
// NOTHING IS EVER SENT. global.fetch is replaced with a mock that records the
// call and returns a stub Resend response, so no email, no API key use, and no
// network traffic. Each test asserts both the HTTP status and whether a send
// was attempted - a 200 that quietly mails, or a 403 that mails anyway, both
// fail here.
//
// Run: npm test   (from worker/)

import assert from 'node:assert/strict';
import test from 'node:test';

// The worker is TypeScript, imported directly: Node strips the types itself
// (natively from v23.6; `npm test` passes --experimental-strip-types so older
// v22 also works). That keeps this suite free of a build step and of any dev
// dependency, so it stays runnable in CI with nothing installed - and, more
// importantly, it tests the real source rather than a transformed copy.
import worker from '../src/index.ts';

const ORIGIN = 'https://www.kortechservice.com';

const env = {
  RESEND_API_KEY: 'test-key-not-real',
  NOTIFY_TO_EMAIL: 'owner@example.com',
  NOTIFY_FROM_EMAIL: 'KorTech <notify@example.com>',
  ALLOWED_ORIGIN: ORIGIN,
};

/** Install a fetch mock. Returns the list of attempted sends. */
function mockResend({ ok = true } = {}) {
  const calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), init });
    return {
      ok,
      status: ok ? 200 : 422,
      text: async () => (ok ? 'queued' : 'resend rejected this'),
    };
  };
  return calls;
}

const validMailIn = {
  fullName: 'Test Person',
  email: 'test@example.com',
  phone: '704-555-0100',
  deviceType: 'Laptop',
  problemDescription: 'Will not power on.',
  agreeToTerms: true,
};

function post(body, { origin = ORIGIN, contentType = 'application/json', headers = {} } = {}) {
  const h = { ...headers };
  if (origin !== null) h.Origin = origin;
  if (contentType !== null) h['Content-Type'] = contentType;
  return new Request('https://worker.example.com/', {
    method: 'POST',
    headers: h,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

// ---------------------------------------------------------------- happy path

test('a legitimate submission from the site still sends', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1, 'exactly one send attempted');
  assert.match(calls[0].url, /api\.resend\.com/);
  assert.equal(await res.headers.get('Access-Control-Allow-Origin'), ORIGIN);
});

test('the apex origin is accepted (it redirects to www, but can still be the origin)', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { origin: 'https://kortechservice.com' }), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

test('a contact-form submission still sends', async () => {
  const calls = mockResend();
  const res = await worker.fetch(
    post({ formType: 'contact', fullName: 'Test Person', email: 'test@example.com', message: 'Hello' }),
    env
  );
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

test('localhost is accepted so wrangler dev keeps working', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { origin: 'http://localhost:5173' }), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

// ------------------------------------------------------------ origin control

test('a foreign origin is refused and sends nothing', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { origin: 'https://not-our-site.example' }), env);
  assert.equal(res.status, 403);
  assert.equal(calls.length, 0, 'no send attempted');
});

test('a request with no Origin is refused and sends nothing', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { origin: null }), env);
  assert.equal(res.status, 403);
  assert.equal(calls.length, 0);
});

test('a foreign origin is never reflected in the CORS header', async () => {
  mockResend();
  const foreign = 'https://not-our-site.example';
  const res = await worker.fetch(post(validMailIn, { origin: foreign }), env);
  assert.notEqual(res.headers.get('Access-Control-Allow-Origin'), foreign);
});

test('a preflight from a foreign origin gets no CORS headers', async () => {
  mockResend();
  const res = await worker.fetch(
    new Request('https://worker.example.com/', {
      method: 'OPTIONS',
      headers: { Origin: 'https://not-our-site.example' },
    }),
    env
  );
  assert.equal(res.status, 403);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), null);
});

test('a preflight from our own origin succeeds', async () => {
  mockResend();
  const res = await worker.fetch(
    new Request('https://worker.example.com/', { method: 'OPTIONS', headers: { Origin: ORIGIN } }),
    env
  );
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), ORIGIN);
});

// ------------------------------------------------------ content-type control

test('a non-JSON content type is refused and sends nothing', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { contentType: 'text/plain' }), env);
  assert.equal(res.status, 415);
  assert.equal(calls.length, 0);
});

test('a missing content type is refused', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(validMailIn, { contentType: null }), env);
  assert.equal(res.status, 415);
  assert.equal(calls.length, 0);
});

test('a charset parameter on the content type is still accepted', async () => {
  const calls = mockResend();
  const res = await worker.fetch(
    post(validMailIn, { contentType: 'application/json; charset=utf-8' }),
    env
  );
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

// ------------------------------------------------------------- body handling

test('an oversized body is refused and sends nothing', async () => {
  const calls = mockResend();
  const huge = { ...validMailIn, problemDescription: 'x'.repeat(100 * 1024) };
  const res = await worker.fetch(post(huge), env);
  assert.equal(res.status, 413);
  assert.equal(calls.length, 0);
});

test('malformed JSON is refused and sends nothing', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post('{not json', {}), env);
  assert.equal(res.status, 400);
  assert.equal(calls.length, 0);
});

test('a missing required field is still refused', async () => {
  const calls = mockResend();
  const { email, ...withoutEmail } = validMailIn;
  const res = await worker.fetch(post(withoutEmail), env);
  assert.equal(res.status, 400);
  assert.equal(calls.length, 0);
});

// ------------------------------------------------------------------ honeypot

test('a filled honeypot reports success but sends nothing', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post({ ...validMailIn, contactPreference: 'bot' }), env);
  assert.equal(res.status, 200, 'a bot must learn nothing from the status');
  assert.equal(calls.length, 0, 'no send attempted');
});

test('the honeypot skip is logged, with no customer data', async () => {
  const calls = mockResend();
  const logged = [];
  const realLog = console.log;
  console.log = (...a) => logged.push(a.map(String).join(' '));
  try {
    const res = await worker.fetch(
      post({ ...validMailIn, contactPreference: 'bot' }), env);
    assert.equal(res.status, 200);
  } finally {
    console.log = realLog;
  }
  assert.equal(calls.length, 0);
  assert.equal(logged.length, 1, 'the skip is visible in logs');
  // A false positive silently discards a real enquiry, so this path must be
  // observable - but it must not leak what was submitted.
  for (const secret of ['test@example.com', 'Test Person', '704-555-0100', 'Will not power on']) {
    assert.ok(!logged.join(' ').includes(secret), 'log must not contain ' + secret);
  }
});

test('an empty honeypot is ignored', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post({ ...validMailIn, contactPreference: '' }), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1, 'a real submission still sends');
});

// ---------------------------------------------------------------- rate limit

// The binding is stubbed, not reimplemented: Cloudflare's Rate Limiting
// binding is atomic, and the worker's only job is to honour its verdict. These
// tests assert that the verdict is honoured and that a failure is survivable -
// deliberately NOT that counting is correct, which is Cloudflare's side.

test('a limited verdict is honoured and sends nothing', async () => {
  let callCount = 0;
  const limited = {
    ...env,
    // Allow the first 5, then refuse - what the real binding does for a burst.
    RATE_LIMIT: {
      limit: async () => {
        callCount += 1;
        return { success: callCount <= 5 };
      },
    },
  };
  const calls = mockResend();
  const statuses = [];
  for (let i = 0; i < 7; i += 1) {
    const res = await worker.fetch(
      post(validMailIn, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
      limited
    );
    statuses.push(res.status);
  }
  assert.deepEqual(statuses.slice(0, 5), [200, 200, 200, 200, 200], 'allowed ones pass');
  assert.deepEqual(statuses.slice(5), [429, 429], 'refused ones are limited');
  assert.equal(calls.length, 5, 'only the allowed ones sent');
});

test('a 429 carries Retry-After', async () => {
  mockResend();
  const limited = { ...env, RATE_LIMIT: { limit: async () => ({ success: false }) } };
  const res = await worker.fetch(
    post(validMailIn, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
    limited
  );
  assert.equal(res.status, 429);
  assert.ok(Number(res.headers.get('Retry-After')) > 0);
});

test('a rate-limiter outage fails open so real customers are never blocked', async () => {
  const broken = {
    ...env,
    RATE_LIMIT: {
      limit: async () => {
        throw new Error('rate limiter unavailable');
      },
    },
  };
  const calls = mockResend();
  const res = await worker.fetch(
    post(validMailIn, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
    broken
  );
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

test('rate limiting is inert when no binding is configured', async () => {
  const calls = mockResend();
  for (let i = 0; i < 8; i += 1) {
    const res = await worker.fetch(
      post(validMailIn, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
      env
    );
    assert.equal(res.status, 200);
  }
  assert.equal(calls.length, 8);
});

// ------------------------------------------------------------ method + error

test('a GET is refused', async () => {
  const calls = mockResend();
  const res = await worker.fetch(
    new Request('https://worker.example.com/', { method: 'GET', headers: { Origin: ORIGIN } }),
    env
  );
  assert.equal(res.status, 405);
  assert.equal(calls.length, 0);
});

test('a Resend failure surfaces as 502 and logs no response body', async () => {
  mockResend({ ok: false });
  const logged = [];
  const realError = console.error;
  console.error = (...args) => logged.push(args.map(String).join(' '));
  try {
    const res = await worker.fetch(post(validMailIn), env);
    assert.equal(res.status, 502);
  } finally {
    console.error = realError;
  }
  assert.equal(logged.length, 1);
  assert.ok(
    !logged[0].includes('resend rejected this'),
    'the Resend response body must not be logged - it can echo submitted content'
  );
  assert.ok(
    !logged.join(' ').includes('test@example.com'),
    'no customer data in logs'
  );
});

// ------------------------------------------- the CURRENTLY DEPLOYED live site
//
// These cases exist because the earlier suite tested the wrong pairing. It
// proved the CURRENT worker accepts the NEW site's payload (honeypot present
// but empty). The release order is the other way round: the hardened worker is
// deployed BEFORE the site change ships, so for a window the hardened worker
// serves the site that is live right now - which sends NO honeypot key at all.
//
// The payload below was captured from https://www.kortechservice.com/mail-in-form/
// on 2026-10-25 with window.fetch intercepted, so nothing was ever sent. Keys,
// header and body type are exactly what production posts.
const LIVE_SITE_MAIL_IN = {
  fullName: 'Test Person',
  email: 'test@example.com',
  phone: '704-555-0100',
  address: '1 Test St',
  city: 'Testville',
  state: 'NC',
  zip: '28105',
  deviceType: 'Laptop',
  deviceBrand: 'TestBrand',
  deviceModel: 'TestModel',
  serialNumber: 'N/A',
  problemDescription: 'Will not power on.',
  hasBackedUp: true,
  hasRemovedAccessories: true,
  agreeToTerms: true,
};

test('live site: the deployed form payload has NO honeypot key and still sends', async () => {
  assert.ok(
    !('contactPreference' in LIVE_SITE_MAIL_IN),
    'guard the premise: the live payload must not contain the honeypot key'
  );
  const calls = mockResend();
  const res = await worker.fetch(post(LIVE_SITE_MAIL_IN), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1, 'an absent honeypot key must be read as human, not automated');
});

test('an absent honeypot key is not treated as automated', async () => {
  const calls = mockResend();
  const { contactPreference, ...withoutKey } = { ...validMailIn, contactPreference: '' };
  assert.ok(!('contactPreference' in withoutKey));
  const res = await worker.fetch(post(withoutKey), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

test('live site: the deployed payload is not rejected by the body cap', async () => {
  const calls = mockResend();
  const res = await worker.fetch(post(LIVE_SITE_MAIL_IN), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
});

// --------------------------------------------- CORS on refusals (readable errors)
//
// A refusal without Access-Control-Allow-Origin is hidden from the page by the
// browser: the fetch rejects as a generic network error and the customer is
// shown "something went wrong" instead of a reason they can act on. Every
// refusal served to an ALLOWED origin must therefore carry the CORS header.

test('refusals to an allowed origin carry CORS so the page can read the status', async () => {
  mockResend();
  // 415: wrong content type
  const unsupported = await worker.fetch(
    post(validMailIn, { contentType: 'text/plain' }),
    env
  );
  assert.equal(unsupported.status, 415);
  assert.equal(unsupported.headers.get('Access-Control-Allow-Origin'), ORIGIN);

  // 400: malformed JSON
  const malformed = await worker.fetch(post('{nope', {}), env);
  assert.equal(malformed.status, 400);
  assert.equal(malformed.headers.get('Access-Control-Allow-Origin'), ORIGIN);

  // 400: missing required field
  const incomplete = await worker.fetch(post({ fullName: 'Only' }), env);
  assert.equal(incomplete.status, 400);
  assert.equal(incomplete.headers.get('Access-Control-Allow-Origin'), ORIGIN);
});

test('a 429 to an allowed origin carries CORS and a readable Retry-After', async () => {
  const calls = mockResend();
  const limited = { ...env, RATE_LIMIT: { limit: async () => ({ success: false }) } };
  const res = await worker.fetch(
    post(validMailIn, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
    limited
  );
  assert.equal(res.status, 429);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), ORIGIN);
  assert.ok(Number(res.headers.get('Retry-After')) > 0, 'Retry-After must be a positive number');
  assert.equal(calls.length, 0);
});

test('the rate limit is checked before field validation, so 429 can be probed without sending', async () => {
  // This is what makes a production rate-limit test safe: an incomplete payload
  // reaches the limiter but could never reach the email path.
  const calls = mockResend();
  const limited = { ...env, RATE_LIMIT: { limit: async () => ({ success: false }) } };
  const res = await worker.fetch(
    post({ fullName: 'Incomplete' }, { headers: { 'CF-Connecting-IP': '203.0.113.9' } }),
    limited
  );
  assert.equal(res.status, 429, 'the limiter must run before validation rejects the payload');
  assert.equal(calls.length, 0);
});

test('recovery: once the limiter allows again, a real submission succeeds', async () => {
  const calls = mockResend();
  let allow = false;
  const recovering = { ...env, RATE_LIMIT: { limit: async () => ({ success: allow }) } };
  const ip = { headers: { 'CF-Connecting-IP': '203.0.113.9' } };
  const blocked = await worker.fetch(post(validMailIn, ip), recovering);
  assert.equal(blocked.status, 429);
  assert.equal(calls.length, 0);
  allow = true;
  const after = await worker.fetch(post(validMailIn, ip), recovering);
  assert.equal(after.status, 200);
  assert.equal(calls.length, 1, 'recovery must not require a redeploy or a cache clear');
});

// The live CONTACT form, captured the same way on 2026-10-25 from
// https://www.kortechservice.com/contact/ with window.fetch intercepted. It
// sends formType plus four fields and, like the mail-in form, NO honeypot key.
const LIVE_SITE_CONTACT = {
  formType: 'contact',
  fullName: 'Test Person',
  email: 'test@example.com',
  phone: '704-555-0100',
  message: 'Checking availability for a laptop repair.',
};

test('live site: the deployed contact payload has NO honeypot key and still sends', async () => {
  assert.ok(
    !('contactPreference' in LIVE_SITE_CONTACT),
    'guard the premise: the live contact payload must not contain the honeypot key'
  );
  const calls = mockResend();
  const res = await worker.fetch(post(LIVE_SITE_CONTACT), env);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1, 'an absent honeypot key must be read as human');
});
