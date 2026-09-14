import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import StickyCTA from '../../components/StickyCTA';
import NearbyAreas from '../../components/NearbyAreas';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Monitor,
  HardDrive,
  Smartphone,
  Wifi,
  Users,
  Truck
} from 'lucide-react';

const Stallings = () => {

  const services = [
    {
      icon: Monitor,
      title: "Tune-Ups & Virus Removal",
      description: "Slow startups, pop-ups, and machines that need cleaning out rather than replacing",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Drive & Data Recovery",
      description: "Bring the drive in and we will tell you what is still readable before quoting",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Screens & Batteries",
      description: "Cracked iPhone, iPad, and Android screens and batteries that no longer hold charge",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Router & Network Setup",
      description: "New router, a connection that keeps dropping, or a small office network to sort out",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "How do I drop something off from Stallings?",
      answer: "Our hours are Mon-Fri 9AM-6PM and Sat 11AM-4PM at 1721 Sardis Rd N, Suite 7A, Charlotte, just over the Matthews line from Stallings. Call or text before you set off so we can confirm someone is ready for you and tell you what to expect, or what to bring, before you are standing at the counter."
    },
    {
      question: "What should I bring with the laptop or phone?",
      answer: "The charger or power adapter, and the password or PIN if you want us to get past the login screen and actually test the repair. For a desktop, the tower alone is usually enough unless the fault involves the monitor or keyboard. If a specific program or file is the problem, say which one."
    },
    {
      question: "Is a cracked screen or a dead battery worth repairing, or should I replace the device?",
      answer: "That depends on the device's age and what else is failing on it, and we would rather tell you honestly that a repair is not worth the money than take the job. We diagnose first and quote before starting, and if you go ahead with a hardware repair the diagnostic fee is waived."
    },
    {
      question: "My computer got slow and is showing pop-ups. Can that be cleaned up?",
      answer: "Usually, yes, and it is one of the most common things we see. Slowdowns and pop-ups tend to come from unwanted software, a cluttered startup, or an aging drive, and which one it is determines the fix. Bring it in and we will diagnose it. Contact us early in the day to ask about same-day availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Stallings, NC",
      "description": "Everyday computer, phone, and tablet repair for Stallings, NC, a Union County town on the Matthews line along US-74. Screen and battery replacement, virus removal, tune-ups, and data recovery, handled at the KorTech Service shop in Charlotte with drop-off or pickup and delivery.",
      "url": "https://www.kortechservice.com/stallings-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Stallings",
          "addressRegion": "NC"
        }
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "KorTech Service",
        "priceRange": "$$",
        "url": "https://www.kortechservice.com/",
        "telephone": "704-246-7642",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1721 Sardis Rd N, Suite 7A",
          "addressLocality": "Charlotte",
          "addressRegion": "NC",
          "postalCode": "28270",
          "addressCountry": "US"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Stallings NC Drop-Off Computer Repair | KorTech"
        description="Screen and battery replacement, virus removal, and tune-ups for Stallings, NC. Easy drop-off at our Charlotte shop near the Matthews line. Call 704-246-7642."
        canonicalUrl="/stallings-computer-repair"
        location="Stallings, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-sky-300" />
              <span className="text-white font-medium">On the Matthews Line | Closest of Our Union County Areas</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-sky-300">Stallings, NC</span>
            </h1>

            <div className="bg-sky-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-sky-100 mb-4">
                <strong>Stallings Community:</strong> Stallings sits between Matthews and Indian Trail along US-74, right on the Matthews line, which makes it the closest of the Union County areas we cover to our Charlotte shop. Close enough that dropping a device off and collecting it later is genuinely easy, which suits the everyday repairs below: a screen, a battery, a virus cleanup, a machine that has slowed down.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Cracked screens, batteries that no longer last, virus and pop-up cleanups, and machines that have
              slowed to a crawl. Call or text before you set off, bring the charger, and we will diagnose it
              and quote before any work starts. Pickup and delivery is there if a trip does not suit you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_stallings_hero"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_stallings_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Text 980-888-5300</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Ask About Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Diagnostic Fee Waived With Hardware Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Pickup & Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Everyday Repairs, Quick Drop-Off
            </h2>
            <p className="text-lg text-slate-600">
              Straightforward everyday repairs, close enough to Stallings to drop off and collect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Drop-Off Makes Sense From Stallings
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte repair shop, operating since 1998, just over the Matthews line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">A Short Trip Either Way</h3>
              <p className="text-slate-600">Drop off during opening hours and collect when it is done. Pickup and delivery stays available if a trip does not suit you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Told Before It Is Done</h3>
              <p className="text-slate-600">We diagnose and quote before starting, and we will say so plainly when a repair is not worth the cost</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across everyone the Charlotte shop serves</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Stallings Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              What to bring, how drop-off works, and when a repair is worth doing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-sky-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bring It By From Stallings
          </h2>
          <p className="text-xl text-sky-200 mb-8">
            Call or text first for a sense of the fix, then bring it in during opening hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_stallings_footer"
              className="bg-white text-sky-900 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_stallings_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-sky-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-sky-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-sky-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-sky-200">Our only location, just over the Matthews line from Stallings</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-sky-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-sky-200">Drop-off and collection during these hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/stallings-computer-repair/" />
    </div>
  );
};

export default Stallings;
