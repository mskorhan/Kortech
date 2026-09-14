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

const Weddington = () => {

  const services = [
    {
      icon: Monitor,
      title: "Home Office Computer Repair",
      description: "Keeping the machine you work from running, on Mac or PC",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Work File Recovery",
      description: "Getting documents and project files back off a drive that stopped cooperating",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Tablet & Phone Repair",
      description: "The second screen you take calls and notes on, back in working order",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Coverage & Networking",
      description: "Router placement, mesh or extenders, and wired runs where the signal will not reach",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "The Wi-Fi drops out in my back-room office. Can that be fixed?",
      answer: "Usually, yes. Dead spots at the far end of a house are typically a placement or coverage problem rather than a broken router, and the fix is some combination of moving the router, adding mesh units or an access point, or running a wired connection to the room that matters most. Describe the layout and where the signal fails and we can talk through the options."
    },
    {
      question: "I work from home and cannot be without this computer. What are my options?",
      answer: "Tell us that up front. It changes how we sequence the work and what we suggest, and if you have a spare machine of your own it is worth getting you working on that while yours is with us. Contact us early in the day to ask about same-day availability. We will also give you a timeframe once the machine is diagnosed rather than before."
    },
    {
      question: "Can I mail the laptop in, or do you have to come out?",
      answer: "Both work. A laptop is easy to send or drop at our Charlotte shop, and Weddington sits south of us, so drop-off is straightforward if you are already heading that way. For a desktop, or if you would rather not handle it at all, ask about pickup and delivery instead."
    },
    {
      question: "Do you set up a new home-office machine, not just repair a broken one?",
      answer: "Yes. Setting up a new computer, moving files and settings across from the old one, getting printers and monitors connected, and making sure it talks to your network properly is standard work for us. Mention what you are moving from and what needs to carry over when you call."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Weddington, NC",
      "description": "Home-office computer repair, new machine setup, and Wi-Fi coverage and networking help for Weddington, NC, in Union County south of Charlotte. Work is done at the KorTech Service shop in Charlotte, with mail-in, drop-off, and pickup and delivery options.",
      "url": "https://www.kortechservice.com/weddington-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Weddington",
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
        title="Weddington NC Home Office & Wi-Fi Help | KorTech"
        description="Home-office computer repair, new setups, and Wi-Fi coverage fixes for Weddington, NC. Mail-in, drop-off, or pickup and delivery. Call 704-246-7642."
        canonicalUrl="/weddington-computer-repair"
        location="Weddington, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-violet-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-indigo-300" />
              <span className="text-white font-medium">Union County | Mail-In, Drop-Off, or Pickup</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-indigo-300">Weddington, NC</span>
            </h1>

            <div className="bg-indigo-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-indigo-100 mb-4">
                <strong>Weddington Community:</strong> Weddington is a largely residential Union County community south of our Charlotte shop, without the commercial corridor that a town centre brings. When the computer in question is the one you work from, two practical questions follow: how to hand it over without losing a working day, and why the signal will not reach the room the desk is in. This page is built around both.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Repairs and upgrades for the computer you work from, setup when you replace it, and network
              work when video calls stutter or a back room never gets a solid signal. Mail a laptop in, drop
              it at the Charlotte shop, or ask about pickup and delivery, whichever costs you less time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_weddington_hero"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_weddington_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              Home Office & Network Services
            </h2>
            <p className="text-lg text-slate-600">
              Built around remote work: the machine, the files on it, and the connection behind it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              Getting Your Machine to Us
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte repair shop, operating since 1998, with options that fit a workday
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Three Ways to Hand It Over</h3>
              <p className="text-slate-600">Mail a laptop in, drop off at the Charlotte shop if you are heading that way, or ask about pickup and delivery for a desktop</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Downtime Taken Seriously</h3>
              <p className="text-slate-600">Say up front that you work from this machine and we will sequence the job around that rather than treating it as a spare</p>
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
              Weddington Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Wi-Fi coverage, working-day downtime, and how to get the machine to us
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
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Home Office Problem in Weddington?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Tell us what is failing and when you need it back, and we will suggest the quickest route
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_weddington_footer"
              className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_weddington_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-indigo-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-indigo-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-indigo-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-indigo-200">Our only location. Mail-in and pickup both end up here</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-indigo-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-indigo-200">Reach us by call or text outside these hours and we will reply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/weddington-computer-repair/" />
    </div>
  );
};

export default Weddington;
