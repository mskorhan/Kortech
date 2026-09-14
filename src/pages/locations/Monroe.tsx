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

const Monroe = () => {

  const services = [
    {
      icon: Monitor,
      title: "Office & Workstation Repair",
      description: "Desktop and laptop repair for Monroe offices, practices, and home workstations",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Data Recovery & Backup",
      description: "Recovery attempts on failed drives, plus backup setup so it does not happen twice",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Repair",
      description: "Screen and battery work on the iPhones, iPads, and Android devices your day runs on",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Small Business IT Support",
      description: "Wired and Wi-Fi networks, shared printers, and multi-user setups for small offices",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "Our Monroe office has one machine down. Can we send just that one in?",
      answer: "Yes. There is no minimum and no contract required, so a single workstation is fine. Call or text a description of the symptoms first and we can tell you whether it sounds like a part, a drive, or a software issue before the machine leaves your office."
    },
    {
      question: "A drive failed and the files were not backed up. What happens next?",
      answer: "Bring or send the drive in and stop using it, since continued power-on can make recovery harder. We evaluate the drive, tell you what looks recoverable and what does not, and quote before any recovery work starts. If it turns out to be a hardware fault we can also address, the diagnostic fee is waived with hardware repair."
    },
    {
      question: "Is it worth driving from Monroe to your Charlotte shop, or should we arrange pickup?",
      answer: "Monroe sits southeast of our Charlotte shop along the US-74 corridor, so if someone is already heading toward Charlotte, dropping the machine off is straightforward. If nobody can make the trip, ask about pickup and delivery. We are at 1721 Sardis Rd N, Suite 7A, Charlotte, and open Mon-Fri 9AM-6PM and Sat 11AM-4PM."
    },
    {
      question: "How long will our machine be out of service?",
      answer: "It depends on what is wrong and whether parts are needed, so we give you a timeframe once we have diagnosed it rather than guessing up front. If downtime is the pressing concern, contact us early in the day to ask about same-day availability, and tell us which files or applications matter most so we can prioritize."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Monroe, NC",
      "description": "Business IT support, workstation repair, and data recovery for Monroe, NC, the Union County seat. Work is performed at the KorTech Service shop in Charlotte, reachable from Monroe along the US-74 corridor, with pickup and delivery available.",
      "url": "https://www.kortechservice.com/monroe-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Monroe",
          "addressRegion": "NC"
        }
      ],
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.kortechservice.com/#organization",
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
        title="Monroe NC Business IT & Data Recovery | KorTech"
        description="Office IT support, workstation repair, and data recovery for Monroe, NC. Drop off at our Charlotte shop via US-74 or ask about pickup. Call 704-246-7642."
        canonicalUrl="/monroe-computer-repair"
        location="Monroe, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-teal-300" />
              <span className="text-white font-medium">Union County Seat | Served From Our Charlotte Shop</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-teal-300">Monroe, NC</span>
            </h1>
            
            <div className="bg-teal-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-teal-100 mb-4">
                <strong>Monroe Community:</strong> Monroe is the Union County seat, and it sits southeast of our Charlotte shop along the US-74 corridor. That makes drop-off practical for anyone already heading toward Charlotte, and as the county seat Monroe has the offices, practices, and small businesses whose workstations and networks we handle alongside home machines.
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              When a workstation goes down in a Monroe office or a drive stops mounting, the useful questions are
              what failed, what is recoverable, and how long you are without the machine. We diagnose first and
              quote before the work starts, whether you drop off in Charlotte or ask about pickup and delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_monroe_hero"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_monroe_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              What We Handle for Monroe
            </h2>
            <p className="text-lg text-slate-600">
              Office and small-business work alongside everyday home repairs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              Working With Us From Monroe
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte repair shop, operating since 1998, that covers Union County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Two Ways In</h3>
              <p className="text-slate-600">Drop off at the Charlotte shop if US-74 already fits your route, or ask about pickup and delivery when nobody can spare the trip</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Built for Small Offices</h3>
              <p className="text-slate-600">No contract or minimum machine count. Send in one workstation, or have us look at the network it sits on</p>
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
              Monroe Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              What Monroe offices and households usually want to know before sending a machine in
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
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Machine Down in Monroe?
          </h2>
          <p className="text-xl text-teal-200 mb-8">
            Describe the symptoms by call or text and we will tell you what the next step looks like
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_monroe_footer"
              className="bg-white text-teal-900 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_monroe_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-teal-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-teal-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-teal-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-teal-200">Our only location. Monroe is southeast via the US-74 corridor</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-teal-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-teal-200">Ask about pickup and delivery if the drive does not fit your day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/monroe-computer-repair/" />
    </div>
  );
};

export default Monroe;