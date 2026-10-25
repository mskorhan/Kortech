import { Package } from 'lucide-react';

// Shared mail-in block for service pages.
//
// NOTE ON CLAIMS (read before editing):
// Owner-confirmed 2026-10-23 (decision A4): mail-in covers EVERY repair category
// KorTech offers. That is the only availability claim made here.
//
// Owner-confirmed 2026-10-25: mail-in repair turnaround is an ESTIMATE of
// 5-10 business days, depending on diagnosis and parts availability. It is NOT
// a guaranteed completion date, it excludes carrier transit, and mail-in does
// NOT qualify for same-day service. That is stated once, below.
//
// Still deliberately ABSENT, because they are NOT owner-confirmed:
//   - any shipping or delivery DATE guarantee, and any transit duration. The
//     5-10 day estimate covers the repair only.
//   - shipping cost, who pays postage, prepaid labels, insurance, packaging and
//     return-shipping terms - all excluded under A4.
//   - any in-shop turnaround figure (1-3 days, 3-7 days). Those are a separate,
//     still-unconfirmed claim cluster (issue #26 Q3) - do not borrow this
//     estimate for them.
//
// The $75-$150 diagnostic waived with hardware repair IS safe: it is already
// published on /terms/, /mail-in-form/ and /macbook-repair/ and is confirmed in
// the project record.
//
// No UTM parameters on the form link: it is INTERNAL, and UTMs on internal links
// restart the GA4 session and reassign its source, so an organic visitor's later
// form_submit would be credited to "site / service" rather than to search.

interface MailInSectionProps {
  /** What the customer is sending, e.g. "laptop", "console". Used in body copy. */
  deviceNoun: string;
  /** Page-specific GA4 attribution id, e.g. "service_datarecovery_mailin". */
  trackSource: string;
}

const MailInSection: React.FC<MailInSectionProps> = ({ deviceNoun, trackSource }) => (
  <section className="py-16 bg-white border-t border-gray-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-start gap-4 mb-6">
        <Package className="h-10 w-10 text-brand-primary flex-shrink-0" aria-hidden="true" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Mail in your {deviceNoun}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            You do not have to be local. We accept mail-in repairs for every repair
            category we offer.
          </p>
        </div>
      </div>

      <p className="text-gray-600 max-w-3xl mb-8">
        Start with the mail-in repair form. It collects your contact details, the model
        and a description of the fault, so your {deviceNoun} is identified and expected
        when it arrives. The same process applies: $75-$150 for the diagnostic, waived
        when you go ahead with a hardware repair, and a quote before any repair work
        starts. Call or text us first if you would rather describe the fault before
        shipping.
      </p>

      <p className="text-gray-600 max-w-3xl mb-8">
        Mail-in repairs typically take an estimated 5-10 business days once your{' '}
        {deviceNoun} reaches us, depending on diagnosis and parts availability. That is an
        estimate rather than a guaranteed completion date, and actual turnaround times may
        vary. Carrier shipping time in each direction is separate from it. Same-day service
        does not apply to mail-in repairs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/mail-in-form/"
          className="bg-brand-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 transition-colors"
        >
          <Package className="h-5 w-5" aria-hidden="true" />
          <span>Start a mail-in repair</span>
        </a>
        <a
          href="tel:704-246-7642"
          data-track-source={trackSource}
          className="border-2 border-brand-primary text-brand-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 transition-colors"
        >
          <span>Call 704-246-7642</span>
        </a>
      </div>
    </div>
  </section>
);

export default MailInSection;
