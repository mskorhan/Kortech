// Deploy-order safety: can the CURRENTLY DEPLOYED worker accept the honeypot
// field?
//
// This matters because the two halves ship by different routes: the site
// deploys automatically when a PR merges, the worker only when someone runs
// `wrangler deploy`. So the honeypot field CAN reach production before the
// hardened worker does. If the current worker rejected an unknown key, or
// printed it into the notification email, merging would break every real
// submission until the worker was deployed.
//
// The fixture is the worker as it stands on main, captured so this is an
// executed check rather than an assertion in a PR description.
//
// CAVEAT: this tests main's source. The deployed worker could differ if it was
// ever deployed from another branch - wrangler is unauthenticated here, so that
// cannot be confirmed from this environment.

import assert from 'node:assert/strict';
import test from 'node:test';
import currentWorker from './fixtures-current-worker.ts';

const env = {
  RESEND_API_KEY: 'test-key-not-real',
  NOTIFY_TO_EMAIL: 'owner@example.com',
  NOTIFY_FROM_EMAIL: 'KorTech <notify@example.com>',
  ALLOWED_ORIGIN: 'https://www.kortechservice.com',
};

let sent = [];
function mockResend() {
  sent = [];
  globalThis.fetch = async (_u, init) => {
    sent.push(JSON.parse(init.body));
    return { ok: true, status: 200, text: async () => 'queued' };
  };
}

const mailIn = {
  fullName: 'Test Person',
  email: 'test@example.com',
  phone: '704-555-0100',
  deviceType: 'Laptop',
  problemDescription: 'Will not power on.',
  agreeToTerms: true,
};

function post(body) {
  return new Request('https://worker.example.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

test('current worker: mail-in with the honeypot field still succeeds', async () => {
  mockResend();
  const res = await currentWorker.fetch(post({ ...mailIn, contactPreference: '' }), env);
  assert.equal(res.status, 200, 'submission still accepted');
  assert.equal(sent.length, 1, 'notification still sent');
  assert.ok(!sent[0].html.includes('contactPreference'), 'field not printed in the email');
  assert.ok(!sent[0].html.includes('Preferred contact'), 'label not printed in the email');
});

test('current worker: contact form with the honeypot field still succeeds', async () => {
  mockResend();
  const res = await currentWorker.fetch(
    post({
      formType: 'contact',
      fullName: 'Test Person',
      email: 'test@example.com',
      message: 'Hello',
      contactPreference: '',
    }),
    env
  );
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
  assert.ok(!sent[0].html.includes('contactPreference'));
});
