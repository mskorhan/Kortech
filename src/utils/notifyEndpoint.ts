export const NOTIFY_ENDPOINT = 'https://kortech-mailin-form.mskorhan.workers.dev';

/**
 * Thrown when the notify endpoint refuses a submission with 429.
 *
 * This is the only refusal a customer can resolve themselves - the per-IP
 * submission limit was reached and retrying shortly succeeds - so it earns a
 * different message from a generic failure. `wait` is a human phrase built
 * from the response's Retry-After header, e.g. "about 60 seconds".
 */
export class RateLimitedError extends Error {
  readonly wait: string;

  constructor(wait: string) {
    super('Notification request rate limited');
    this.name = 'RateLimitedError';
    this.wait = wait;
  }
}

/**
 * Read Retry-After and phrase it for a customer. Falls back to "a minute" when
 * the header is absent or unparseable, which is close enough to the configured
 * 60s period and never shows a customer "NaN".
 */
export function retryAfterPhrase(response: Response): string {
  const seconds = Number(response.headers.get('Retry-After'));
  if (!Number.isFinite(seconds) || seconds <= 0) return 'a minute';
  return `about ${seconds} second${seconds === 1 ? '' : 's'}`;
}

// Mirrors EMAIL_RE in worker/src/index.ts EXACTLY. The worker already rejects
// a malformed address with 400, so without this check the customer only finds
// out after a round-trip, via the generic "we couldn't send" message - and on
// /mail-in-form/ that means the lead notification is lost AND the printed form
// they're told to enclose carries the unusable address. Keep the two patterns
// identical: a client check stricter than the server would block valid mail,
// and one looser than the server would hand back a confusing generic error.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (value: string): boolean =>
  EMAIL_RE.test(value.trim());
