export interface Env {
  RESEND_API_KEY: string;
  NOTIFY_TO_EMAIL: string;
  NOTIFY_FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
  /** Optional comma-separated extra origins. Unset in production. */
  EXTRA_ALLOWED_ORIGINS?: string;
  /**
   * Optional Cloudflare Rate Limiting binding, per-IP. Absent = no limiting.
   * Deliberately NOT a KV counter: a KV get/put is non-atomic and eventually
   * consistent, so concurrent requests read the same value before either
   * writes and a burst slips through - which is the exact case a rate limit
   * exists to stop. This binding is atomic, and free.
   */
  RATE_LIMIT?: RateLimit;
}

interface MailInFormPayload {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  deviceType: string;
  deviceBrand?: string;
  deviceModel?: string;
  serialNumber?: string;
  problemDescription: string;
  hasBackedUp?: boolean;
  hasRemovedAccessories?: boolean;
  agreeToTerms: boolean;
}

interface ContactFormPayload {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

const REQUIRED_STRING_FIELDS: (keyof MailInFormPayload)[] = [
  'fullName',
  'email',
  'phone',
  'deviceType',
  'problemDescription',
];

const CONTACT_REQUIRED_STRING_FIELDS: (keyof ContactFormPayload)[] = [
  'fullName',
  'email',
  'message',
];

const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

/**
 * The origins allowed to submit. The apex redirects to www, but a page loaded
 * before that redirect can still present the apex as its origin, so both are
 * allowed. Localhost is allowed so `wrangler dev` keeps working.
 */
export function allowedOrigins(env: Env): string[] {
  const list = [env.ALLOWED_ORIGIN, 'https://kortechservice.com'];
  if (env.EXTRA_ALLOWED_ORIGINS) {
    for (const extra of env.EXTRA_ALLOWED_ORIGINS.split(',')) {
      const trimmed = extra.trim();
      if (trimmed) list.push(trimmed);
    }
  }
  return list.filter((value, i, all) => value && all.indexOf(value) === i);
}

export function isAllowedOrigin(origin: string | null, env: Env): boolean {
  if (!origin) {
    // Non-browser clients send no Origin. We cannot attribute those to the
    // site, so they are refused - every legitimate submission is a browser
    // fetch() from our own pages, which always sets Origin.
    return false;
  }
  if (allowedOrigins(env).includes(origin)) return true;
  try {
    const { hostname, protocol } = new URL(origin);
    return (
      (protocol === 'http:' || protocol === 'https:') &&
      (hostname === 'localhost' || hostname === '127.0.0.1')
    );
  } catch {
    return false;
  }
}

/**
 * Only a JSON body is accepted. Both callers already send
 * `Content-Type: application/json`, so this changes nothing for them, while
 * requiring that a cross-site POST be subject to a CORS preflight.
 */
export function hasJsonContentType(request: Request): boolean {
  const header = request.headers.get('Content-Type');
  if (!header) return false;
  return header.split(';')[0].trim().toLowerCase() === 'application/json';
}

/** Reject an oversized body. A real submission is a few KB at most. */
const MAX_BODY_BYTES = 64 * 1024;

export async function readCappedJson(
  request: Request
): Promise<{ ok: true; value: unknown } | { ok: false; error: string; status: number }> {
  const declared = request.headers.get('Content-Length');
  if (declared && Number(declared) > MAX_BODY_BYTES) {
    return { ok: false, error: 'Request body too large', status: 413 };
  }
  // Content-Length can be absent or wrong, so the actual bytes are counted too.
  const raw = await request.arrayBuffer();
  if (raw.byteLength > MAX_BODY_BYTES) {
    return { ok: false, error: 'Request body too large', status: 413 };
  }
  let text: string;
  try {
    text = new TextDecoder('utf-8', { fatal: true, ignoreBOM: false }).decode(raw);
  } catch {
    return { ok: false, error: 'Invalid request encoding', status: 400 };
  }
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch {
    return { ok: false, error: 'Invalid JSON', status: 400 };
  }
}

/**
 * A hidden field no human fills in. The form renders it off-screen; a bot that
 * fills every input gives itself away. Silently accepted so a crawler learns
 * nothing from the response.
 */
export function looksAutomated(payload: unknown): boolean {
  if (typeof payload !== 'object' || payload === null) return false;
  const honeypot = (payload as Record<string, unknown>).contactPreference;
  return typeof honeypot === 'string' && honeypot.trim() !== '';
}

/**
 * Per-IP rate limit, only when the binding is configured. The rate and period
 * live in wrangler.toml, not here.
 *
 * Fails OPEN: if the binding errors, a submission is allowed through. Losing a
 * real customer's repair enquiry is a worse outcome than admitting some
 * unsolicited volume, and the other checks still apply.
 */
const RATE_LIMIT_RETRY_AFTER_SECONDS = 60;

export async function isRateLimited(request: Request, env: Env): Promise<boolean> {
  if (!env.RATE_LIMIT) return false;
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return false;
  try {
    const { success } = await env.RATE_LIMIT.limit({ key: `submissions:${ip}` });
    return !success;
  } catch {
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validate(payload: unknown): { ok: true; data: MailInFormPayload } | { ok: false; error: string } {
  if (typeof payload !== 'object' || payload === null) {
    return { ok: false, error: 'Invalid request body' };
  }
  const data = payload as Record<string, unknown>;

  for (const field of REQUIRED_STRING_FIELDS) {
    const value = data[field];
    if (typeof value !== 'string' || !value.trim()) {
      return { ok: false, error: `Missing required field: ${field}` };
    }
    if (value.length > MAX_FIELD_LENGTH) {
      return { ok: false, error: `Field too long: ${field}` };
    }
  }

  if (!EMAIL_RE.test(data.email as string)) {
    return { ok: false, error: 'Invalid email address' };
  }

  if (data.agreeToTerms !== true) {
    return { ok: false, error: 'Terms and conditions must be accepted' };
  }

  const optionalStringFields: (keyof MailInFormPayload)[] = [
    'address',
    'city',
    'state',
    'zip',
    'deviceBrand',
    'deviceModel',
    'serialNumber',
  ];
  for (const field of optionalStringFields) {
    const value = data[field];
    if (value !== undefined && (typeof value !== 'string' || value.length > MAX_FIELD_LENGTH)) {
      return { ok: false, error: `Invalid field: ${field}` };
    }
  }

  return {
    ok: true,
    data: {
      fullName: (data.fullName as string).trim(),
      email: (data.email as string).trim(),
      phone: (data.phone as string).trim(),
      address: (data.address as string | undefined)?.trim(),
      city: (data.city as string | undefined)?.trim(),
      state: (data.state as string | undefined)?.trim(),
      zip: (data.zip as string | undefined)?.trim(),
      deviceType: (data.deviceType as string).trim(),
      deviceBrand: (data.deviceBrand as string | undefined)?.trim(),
      deviceModel: (data.deviceModel as string | undefined)?.trim(),
      serialNumber: (data.serialNumber as string | undefined)?.trim(),
      problemDescription: (data.problemDescription as string).trim(),
      hasBackedUp: data.hasBackedUp === true,
      hasRemovedAccessories: data.hasRemovedAccessories === true,
      agreeToTerms: true,
    },
  };
}

function validateContact(payload: unknown): { ok: true; data: ContactFormPayload } | { ok: false; error: string } {
  if (typeof payload !== 'object' || payload === null) {
    return { ok: false, error: 'Invalid request body' };
  }
  const data = payload as Record<string, unknown>;

  for (const field of CONTACT_REQUIRED_STRING_FIELDS) {
    const value = data[field];
    if (typeof value !== 'string' || !value.trim()) {
      return { ok: false, error: `Missing required field: ${field}` };
    }
    if (value.length > MAX_FIELD_LENGTH) {
      return { ok: false, error: `Field too long: ${field}` };
    }
  }

  if (!EMAIL_RE.test(data.email as string)) {
    return { ok: false, error: 'Invalid email address' };
  }

  if (data.phone !== undefined && (typeof data.phone !== 'string' || data.phone.length > MAX_FIELD_LENGTH)) {
    return { ok: false, error: 'Invalid field: phone' };
  }

  return {
    ok: true,
    data: {
      fullName: (data.fullName as string).trim(),
      email: (data.email as string).trim(),
      phone: (data.phone as string | undefined)?.trim(),
      message: (data.message as string).trim(),
    },
  };
}

function buildEmailHtml(d: MailInFormPayload): string {
  const row = (label: string, value: string | undefined) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#666;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(value || 'Not provided')}</td></tr>`;

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;">
      <h2 style="color:#0099FF;">New Mail-In Repair Form Submission</h2>
      <h3>Customer Information</h3>
      <table>
        ${row('Name', d.fullName)}
        ${row('Email', d.email)}
        ${row('Phone', d.phone)}
        ${row('Address', d.address)}
        ${row('City', d.city)}
        ${row('State', d.state)}
        ${row('ZIP', d.zip)}
      </table>
      <h3>Device Information</h3>
      <table>
        ${row('Type', d.deviceType)}
        ${row('Brand', d.deviceBrand)}
        ${row('Model', d.deviceModel)}
        ${row('Serial Number', d.serialNumber)}
      </table>
      <h3>Problem Description</h3>
      <p style="white-space:pre-wrap;background:#f8f9fa;padding:12px;border:1px solid #ddd;border-radius:6px;">${escapeHtml(d.problemDescription)}</p>
      <h3>Checklist</h3>
      <ul>
        <li>Backed up data: ${d.hasBackedUp ? 'Yes' : 'No'}</li>
        <li>Removed accessories: ${d.hasRemovedAccessories ? 'Yes' : 'No'}</li>
      </ul>
      <p style="color:#999;font-size:12px;margin-top:24px;">Note: the device password field (if the customer filled one in) is intentionally not included here — it never leaves the customer's browser, per the site's privacy notice.</p>
    </div>
  `;
}

function buildContactEmailHtml(d: ContactFormPayload): string {
  const row = (label: string, value: string | undefined) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#666;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(value || 'Not provided')}</td></tr>`;

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;">
      <h2 style="color:#0099FF;">New Contact Page Message</h2>
      <table>
        ${row('Name', d.fullName)}
        ${row('Email', d.email)}
        ${row('Phone', d.phone)}
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;background:#f8f9fa;padding:12px;border:1px solid #ddd;border-radius:6px;">${escapeHtml(d.message)}</p>
    </div>
  `;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const requestOrigin = request.headers.get('Origin');
    const originAllowed = isAllowedOrigin(requestOrigin, env);
    // Only echo an origin we actually allow; never reflect an arbitrary one.
    const origin = originAllowed && requestOrigin ? requestOrigin : env.ALLOWED_ORIGIN;
    const jsonHeaders = { 'Content-Type': 'application/json', ...corsHeaders(origin) };

    if (request.method === 'OPTIONS') {
      if (!originAllowed) {
        // No CORS headers: the browser then blocks the follow-up request.
        return new Response(null, { status: 403 });
      }
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders(origin) });
    }

    if (!originAllowed) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: jsonHeaders,
      });
    }

    if (!hasJsonContentType(request)) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), {
        status: 415,
        headers: jsonHeaders,
      });
    }

    if (await isRateLimited(request, env)) {
      return new Response(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: { ...jsonHeaders, 'Retry-After': String(RATE_LIMIT_RETRY_AFTER_SECONDS) },
      });
    }

    const body = await readCappedJson(request);
    if (!body.ok) {
      return new Response(JSON.stringify({ error: body.error }), {
        status: body.status,
        headers: jsonHeaders,
      });
    }
    const payload = body.value;

    if (looksAutomated(payload)) {
      // Report success without sending, so a bot gets no signal.
      //
      // Logged because this path is otherwise INVISIBLE: a false positive - say
      // a browser autofilling the decoy field - silently discards a real
      // customer enquiry and still reports success to the page, so it also
      // counts as a GA4 form_submit. If this line appears at any volume, treat
      // the honeypot as suspect rather than assume it is working. No request
      // content is logged.
      console.log('notify: submission skipped by honeypot');
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: jsonHeaders });
    }

    const formType = typeof payload === 'object' && payload !== null && 'formType' in payload
      ? (payload as Record<string, unknown>).formType
      : 'mail_in';

    let subject: string;
    let html: string;
    let replyTo: string;

    if (formType === 'contact') {
      const result = validateContact(payload);
      if (!result.ok) {
        return new Response(JSON.stringify({ error: result.error }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
        });
      }
      subject = `Contact Form: ${result.data.fullName}`;
      html = buildContactEmailHtml(result.data);
      replyTo = result.data.email;
    } else {
      const result = validate(payload);
      if (!result.ok) {
        return new Response(JSON.stringify({ error: result.error }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
        });
      }
      subject = `Mail-In Form: ${result.data.fullName} — ${result.data.deviceType}`;
      html = buildEmailHtml(result.data);
      replyTo = result.data.email;
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.NOTIFY_FROM_EMAIL,
        to: env.NOTIFY_TO_EMAIL,
        reply_to: replyTo,
        subject,
        html,
      }),
    });

    if (!emailRes.ok) {
      // Status only. The response body can echo submitted content, and this
      // log is not a place for customer data.
      console.error('Resend API error', emailRes.status);
      return new Response(JSON.stringify({ error: 'Failed to send notification email' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  },
};
