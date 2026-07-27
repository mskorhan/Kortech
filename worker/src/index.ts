export interface Env {
  RESEND_API_KEY: string;
  NOTIFY_TO_EMAIL: string;
  NOTIFY_FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
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

const REQUIRED_STRING_FIELDS: (keyof MailInFormPayload)[] = [
  'fullName',
  'email',
  'phone',
  'deviceType',
  'problemDescription',
];

const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN;

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders(origin) });
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const result = validate(payload);
    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
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
        reply_to: result.data.email,
        subject: `Mail-In Form: ${result.data.fullName} — ${result.data.deviceType}`,
        html: buildEmailHtml(result.data),
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error('Resend API error', emailRes.status, errText);
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
