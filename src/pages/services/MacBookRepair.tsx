import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import ServiceAreaLinks from '../../components/ServiceAreaLinks';
import {
  Laptop,
  Wrench,
  Shield,
  CheckCircle,
  MapPin,
  Package,
  Monitor,
  Cpu,
  Droplets,
  BatteryCharging,
  HardDrive,
  HelpCircle
} from 'lucide-react';

// NOTE ON CLAIMS (read before editing this file):
// Every factual statement here is limited to what the owner confirmed on
// 2026-10-23 (Mac/MacBook/iMac/Mac mini/Mac Studio repair, logic-board
// diagnostics, board-level micro-soldering) plus the facts already in the
// project record: the $75-$150 diagnostic waived with hardware repair, the
// 14-day parts-only warranty, and the Charlotte shop on Sardis Rd N.
// Owner also confirmed on 2026-10-23 that mail-in covers EVERY repair
// category offered, Mac logic-board and board-level work included.
//
// Deliberately ABSENT, because they are unconfirmed (see
// seo-intelligence/reports/owner-confirmation-table-2026-10-22.md):
//   - turnaround times ("1-3 business days", "same-day"), including any
//     mail-in transit or repair duration
//   - shipping cost, who pays postage, prepaid labels, insurance cover and
//     return-shipping terms (explicitly excluded by the owner, 2026-10-23)
//   - walk-in availability, pickup and delivery
//   - certifications, cleanroom, parts sourcing / "we stock parts"
//   - "all work is carried out at our Charlotte shop" (claim C3, unconfirmed):
//     the ADDRESS is confirmed, "all work happens there" is not.
// Do not reintroduce any of these without an owner confirmation.
//
// APPLE AUTHORIZATION: per the owner (2026-10-23), this page must NOT state
// or deny Apple Authorized Service Provider status, affiliation or
// endorsement. Naming the Apple models we repair is accurate and fine;
// adding an authorization disclaimer is not. Do not reintroduce one.
//
// The Apple-silicon/T2 storage statement below is sourced to Apple Platform
// Security, "The Secure Enclave": "if the internal SSD storage is physically
// moved from one device to another, the files are inaccessible."
// https://support.apple.com/guide/security/the-secure-enclave-sec59b0b31ff/web
//
// FAQSection is intentionally NOT used on this page: it emits FAQPage JSON-LD,
// and config.json schemaPolicy forbids adding new FAQPage markup (Google
// retired FAQ rich results in May 2026). The questions below are rendered as
// plain, crawlable HTML instead.

const MacBookRepair = () => {
  const symptoms = [
    {
      icon: BatteryCharging,
      title: 'No power, or no sign of charging',
      body:
        'The Mac shows nothing on a known-good charger: no chime, no fan, no display, no charging light. On a MacBook this often sits in the power circuitry on the logic board rather than in the battery itself, which is why replacing the battery does not always resolve it.'
    },
    {
      icon: Monitor,
      title: 'Display problems',
      body:
        'A cracked panel, backlight that stays dark while the machine is clearly running, lines or bands across the image, or an external monitor that works when the built-in display does not. The last case matters: it separates a panel or backlight fault from a graphics or board-level fault, and they are different repairs.'
    },
    {
      icon: Droplets,
      title: 'Liquid exposure',
      body:
        'Liquid damage is progressive. Corrosion continues after the spill and can spread across the board even when the Mac still switches on, so the useful step is assessment rather than waiting to see whether it settles down. Power the machine off and bring it in rather than retrying it repeatedly.'
    },
    {
      icon: Cpu,
      title: 'Logic-board faults',
      body:
        'Shorts, failed power rails, damaged charging circuitry and lifted or damaged components. These are component-level problems on the board, which is the work a parts-swap-only shop normally declines and refers out.'
    },
    {
      icon: HardDrive,
      title: 'Storage and data concerns',
      body:
        'A Mac that will not boot is not the same as a Mac that has lost its data. On modern Macs the two questions are tightly linked, because the storage is tied to the machine it was made in — see the note on Apple-silicon and T2 Macs below.'
    },
    {
      icon: Wrench,
      title: 'Ports and connectors',
      body:
        'USB-C and MagSafe charging ports, and other board-mounted connectors, take mechanical stress and can fail or tear away from the board. Where the connector is soldered to the logic board, the repair is a board-level one rather than a module replacement.'
    }
  ];

  const faqs = [
    {
      q: 'Do you repair MacBooks, iMacs, Mac minis and Mac Studios?',
      a:
        'Yes. We repair MacBook, MacBook Air, MacBook Pro, iMac, Mac mini and Mac Studio, including Mac logic-board diagnostics and board-level repair. Bring the machine to our Charlotte shop at 1721 Sardis Rd N, Suite 7A, or mail it in using our mail-in repair form. You can also call or text us to describe the fault first.'
    },
    {
      q: 'Can I mail in my Mac for repair?',
      a:
        'Yes. We accept mail-in repairs for every repair category we offer, including MacBook, MacBook Air, MacBook Pro, iMac, Mac mini and Mac Studio, Mac logic-board repair and board-level micro-soldering. Start with our mail-in repair form, which collects the device details and the fault description so we know what is coming. If you would rather talk it through first, call or text us before you ship.'
    },
    {
      q: 'What does a Mac diagnostic cost?',
      a:
        'Diagnostics are $75-$150 depending on the work involved, and the diagnostic fee is waived when you go ahead with a hardware repair. You get a detailed quote before any repair work begins.'
    },
    {
      q: 'What is board-level or component-level repair, and when is it the right option?',
      a:
        'Board-level repair means repairing the logic board itself — the power circuitry, a failed component, a damaged charging port — rather than replacing the whole board. It is the appropriate route when the fault is on the board and a replacement board is expensive or unavailable, and it is also the route that can keep the original storage with the machine. It is not appropriate for every fault: some failures are better addressed by replacing a module, and some boards are too extensively damaged to be worth repairing. We tell you which case yours is after the diagnostic.'
    },
    {
      q: 'Can you recover my data if the Mac will not turn on?',
      a:
        'It depends on the machine. On Macs with Apple silicon or the T2 chip, the internal storage is cryptographically tied to that specific Mac. Apple states that if the internal SSD storage is physically moved from one device to another, the files are inaccessible. In practice that means the data on those models is generally reachable only by getting the original board working again, which is one reason board-level repair matters on Macs. Bring it in and we will tell you what is realistic for your model before you commit to anything.'
    },
    {
      q: 'Should I repair my Mac or replace it?',
      a:
        'That is a cost-and-value question, and it is yours to make — our part is to give you the information. After the diagnostic you get a quote for the actual fault, so you can weigh it against the machine\'s age, its condition otherwise, and what a replacement would cost you. Note that replacing the machine does not by itself recover the data on it.'
    },
    {
      q: 'Do all Macs support the same repairs?',
      a:
        'No, and this is worth knowing before you plan around a repair. What can be replaced or repaired varies by model and year — on many current Macs the storage and memory are soldered to the logic board and are not user-upgradeable, and the internal layout differs substantially between a MacBook Air, an iMac and a Mac Studio. We confirm what applies to your specific model during the diagnostic rather than assuming.'
    },
    {
      q: 'Is there a warranty on the repair?',
      a:
        'We provide a 14-day limited warranty on all parts installed, covering only the parts themselves. It covers manufacturing defects or faulty parts that fail under normal use. It does not cover accidental damage, liquid damage, drops or similar incidents.'
    },
    {
      q: 'How do I start a Mac repair?',
      a:
        'Call 704-246-7642 or text 980-888-5300 and describe what the Mac is doing, bring it to the shop at 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270, or fill in the mail-in repair form if you would rather ship it. We are open Monday to Friday 9AM-6PM and Saturday 11AM-4PM. If you can tell us the model and what happened before the fault appeared, that usually shortens the diagnostic.'
    }
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mac and MacBook Repair',
      description:
        'Mac and MacBook repair in Charlotte, NC. MacBook, MacBook Air, MacBook Pro, iMac, Mac mini and Mac Studio repair, including Mac logic-board diagnostics and board-level micro-soldering.',
      serviceType: 'Mac and MacBook repair',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.kortechservice.com/#organization',
        name: 'KorTech Service',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1721 Sardis Rd N, Suite 7A',
          addressLocality: 'Charlotte',
          addressRegion: 'NC',
          postalCode: '28270'
        },
        telephone: '704-246-7642'
      },
      areaServed: ['Charlotte, NC', 'Matthews, NC', 'Mint Hill, NC', 'Pineville, NC', 'Ballantyne, NC'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mac repair services',
        itemListElement: [
          'MacBook repair',
          'MacBook Air repair',
          'MacBook Pro repair',
          'iMac repair',
          'Mac mini repair',
          'Mac Studio repair',
          'Mac logic-board diagnostics and repair',
          'Board-level micro-soldering and component-level repair'
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name }
        }))
      },
      offers: {
        '@type': 'Offer',
        description:
          'Diagnostic $75-$150, waived with hardware repair. A detailed quote is provided before any repair work begins.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Mac & MacBook Repair Charlotte NC | KorTech Service"
        description="Mac and MacBook repair in Charlotte, NC. MacBook Air & Pro, iMac, Mac mini, Mac Studio, logic-board diagnostics and board-level repair. Drop off or mail in. Call 704-246-7642."
        canonicalUrl="/macbook-repair"
        service="Mac and MacBook Repair"
        location="Charlotte, NC"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <span className="text-white font-medium">Charlotte Repair Shop — Sardis Rd N</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Mac &amp; MacBook Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed">
                MacBook, MacBook Air, MacBook Pro, iMac, Mac mini and Mac Studio repair in
                Charlotte, including Mac logic-board diagnostics and board-level micro-soldering.
                Drop your Mac off at the shop, or mail it in from anywhere.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  data-track-source="service_macbook_hero"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  data-track-source="service_macbook_hero"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Text 980-888-5300</span>
                </a>
              </div>

              <p className="text-sm text-gray-300">
                Diagnostic $75–$150, waived with hardware repair. You get a quote before any work begins.
              </p>
            </div>

            <div className="hidden lg:flex justify-center" aria-hidden="true">
              <Laptop className="h-64 w-64 text-blue-300/40" />
            </div>
          </div>
        </div>
      </section>

      {/* What we repair */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What we repair</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Our shop is at 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'MacBook repair',
              'MacBook Air and MacBook Pro repair',
              'iMac repair',
              'Mac mini repair',
              'Mac Studio repair',
              'Mac logic-board diagnostics and repair',
              'Board-level micro-soldering and component-level repair'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-5">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 mt-8 max-w-3xl">
            What can actually be replaced or repaired differs by model and year. On many current Macs
            the storage and memory are soldered to the logic board, so an upgrade that is routine on an
            older machine is not possible on a newer one. We confirm what applies to your specific
            model during the diagnostic instead of assuming it carries over.
          </p>
        </div>
      </section>

      {/* Mail-in. Owner-confirmed 2026-10-23: mail-in covers every repair
          category we offer, Mac logic-board and board-level work included.
          Deliberately absent: shipping cost, who pays postage, transit or
          repair turnaround, labels, insurance and return-shipping terms —
          none of those are confirmed. */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <Package className="h-10 w-10 text-brand-primary flex-shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Mail in your Mac
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                You do not have to be local. We accept mail-in repairs for every repair
                category we offer — MacBook, MacBook Air and MacBook Pro, iMac, Mac mini, Mac
                Studio, Mac logic-board repair and board-level micro-soldering included.
              </p>
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl mb-8">
            Start with the mail-in repair form. It collects your contact details, the model and a
            description of the fault, so the Mac is identified and expected when it arrives. The
            same diagnostic and quote process applies: $75-$150 for the diagnostic, waived when you
            go ahead with a hardware repair, and a quote before any repair work starts. Call or text
            us first if you would rather describe the fault before shipping.
          </p>

          {/* No UTM parameters on this link: it is INTERNAL, and UTMs on internal
              links restart the GA4 session and reassign its source, so an organic
              visitor's later form_submit would be credited to "site / service"
              rather than to search. Page path and referrer already attribute it. */}
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
              data-track-source="service_macbook_mailin"
              className="border-2 border-brand-primary text-brand-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Call 704-246-7642</span>
            </a>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mac symptoms, and what they usually mean</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            These are the faults we see most often. None of this replaces a diagnostic — the point is
            to help you describe the problem accurately and to show which faults need board-level work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-7 w-7 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Storage / data note */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why the data on a modern Mac depends on the board
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              On Macs with Apple silicon or the T2 chip, the internal storage is encrypted and tied to
              that particular machine. Apple&rsquo;s own security documentation puts it plainly: if the
              internal SSD storage is physically moved from one device to another, the files are
              inaccessible.
            </p>
            <p>
              The practical consequence is worth understanding before you decide what to do with a Mac
              that will not boot. On these models you generally cannot pull the drive and read it in an
              enclosure the way you could with an older machine. Recovering the data usually means
              getting the original logic board working again — which is exactly why board-level repair
              is not just a cheaper alternative to a board swap on a Mac, but sometimes the only route
              to the data at all.
            </p>
            <p>
              If the data matters more than the machine, say so when you call, so we can take that
              into account.
            </p>
            <p className="text-sm text-gray-500">
              Source: Apple Platform Security,{' '}
              <a
                href="https://support.apple.com/guide/security/the-secure-enclave-sec59b0b31ff/web"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                &ldquo;The Secure Enclave&rdquo;
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How a Mac repair works here</h2>
          <ol className="space-y-6">
            {[
              {
                t: 'Tell us what it is doing',
                d: 'Call 704-246-7642, text 980-888-5300, or bring the Mac in. The model and what happened immediately before the fault are the two most useful things you can tell us.'
              },
              {
                t: 'Diagnostic',
                d: 'We establish what has actually failed rather than replacing parts to find out. The diagnostic is $75–$150 depending on the work involved, and it is waived if you go ahead with a hardware repair.'
              },
              {
                t: 'A quote, before any work',
                d: 'You get the cost for the actual fault, and where there is a choice — board-level repair, module replacement, or replacement of the machine — you hear the options and decide.'
              },
              {
                t: 'Repair and collection',
                d: 'Parts installed carry a 14-day limited warranty covering the parts themselves against manufacturing defects or failure under normal use — not accidental or liquid damage, drops or similar.'
              }
            ].map(({ t, d }, i) => (
              <li key={t} className="flex gap-5">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t}</h3>
                  <p className="text-gray-700 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceCTA
          service="Mac or MacBook Repair"
          price="Diagnostic $75–$150, waived with hardware repair"
          urgentText="Call or Text to Describe the Fault"
        />
      </div>

      {/* Questions — plain HTML, no FAQPage JSON-LD (see note at top of file) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Mac repair questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <article key={q} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>{q}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related repairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/pcb-micro-soldering/', title: 'PCB Micro-Soldering', d: 'Board-level and component-level repair in detail.' },
              { href: '/laptop-screen-repair/', title: 'Laptop Screen Repair', d: 'Screen and display repair across laptop brands.' },
              { href: '/water-damage-repair/', title: 'Water Damage Repair', d: 'Liquid exposure and corrosion assessment.' },
              { href: '/data-recovery/', title: 'Data Recovery', d: 'When the data matters more than the machine.' }
            ].map(({ href, title, d }) => (
              <a
                key={href}
                href={href}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group block"
              >
                <Shield className="h-8 w-8 text-blue-600 mb-3" aria-hidden="true" />
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">{title}</h3>
                <p className="text-sm text-gray-600">{d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks serviceName="Mac and MacBook Repair" />
    </div>
  );
};

export default MacBookRepair;
