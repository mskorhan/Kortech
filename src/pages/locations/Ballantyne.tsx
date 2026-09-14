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

const Ballantyne = () => {

  const services = [
    {
      icon: Monitor,
      title: "Workstation & MacBook Repair",
      description: "Repairs for the Macs and Windows laptops people work on daily, with your files and setup kept intact",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Data Recovery for Professionals",
      description: "Client files, archives and working documents retrieved from failed drives, dead SSDs and RAID volumes",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Repair",
      description: "Screens and batteries on the iPhones, iPads and Android devices you use alongside your work machine",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Business IT & Home-Office Setup",
      description: "Office and remote-work networking, secure Wi-Fi, backups and multi-monitor desk setups",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "Do you support small businesses and professional offices in Ballantyne?",
      answer: "Yes. We handle workstation repair, secure Wi-Fi and wired networking, shared storage, backups and general IT support for small offices and independent professionals in the Ballantyne area of south Charlotte. All bench work is done at our Charlotte workshop."
    },
    {
      question: "Can you set up a home office for remote and hybrid work?",
      answer: "We set up and troubleshoot home-office equipment: multi-monitor arrangements, docking stations, printers, VPN and video-call reliability, and Wi-Fi coverage in rooms the router does not reach well. Tell us which work applications have to keep running and we will build around them."
    },
    {
      question: "My drive failed and client files are on it. What are the options?",
      answer: "Bring the machine or the drive to us before doing anything else and stop using it, because continued use can overwrite recoverable data. We evaluate the drive, tell you what looks retrievable and quote before we proceed. Do not run recovery software on a failing drive first."
    },
    {
      question: "I cannot lose a day without my laptop. How do I keep downtime short?",
      answer: "Contact us early in the day to ask about same-day availability, and mention the deadline when you call so we can tell you honestly whether the repair fits it. If you have a spare machine we can move your working files across while the main one is with us."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Ballantyne, NC",
      "description": "Business IT support, home-office and remote-work setup, workstation repair and professional data recovery for the Ballantyne community of south Charlotte, handled at the KorTech workshop on Sardis Rd N.",
      "url": "https://www.kortechservice.com/ballantyne-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Ballantyne",
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
        title="Ballantyne Office IT &amp; Mac Support | KorTech"
        description="Office IT support, home-office and remote-work setup, Mac and PC repair and data recovery for Ballantyne professionals in south Charlotte. Call 704-246-7642."
        canonicalUrl="/ballantyne-computer-repair"
        location="Ballantyne, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-orange-300" />
              <span className="text-white font-medium">Serving the Ballantyne Area of South Charlotte</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-orange-300">Ballantyne, NC</span>
            </h1>

            <div className="bg-orange-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-orange-100 mb-4">
                <strong>Ballantyne Community:</strong> Ballantyne is a large community within south Charlotte rather than a separate town, and it is home to a dense mix of offices, professional practices and people working from home. KorTech Service has no Ballantyne office: our workshop has operated in Charlotte since 1998 and serves the Ballantyne area from there.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              IT support built around people who work for a living on their machines: small-office and
              home-office setups, secure networks and backups, workstation and MacBook repair, and data
              recovery when a drive holding client work stops responding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_ballantyne_hero"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_ballantyne_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              IT and Repair Services for Ballantyne Professionals
            </h2>
            <p className="text-lg text-slate-600">
              Support for offices, practices and home-based professionals across the Ballantyne area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              Working With Ballantyne Businesses and Home Offices
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte workshop, operating since 1998, that businesses can talk to directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">We can collect a workstation from an office or home office and return it after the repair, so no one loses a working day to the drive across town</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Business &amp; Home Office</h3>
              <p className="text-slate-600">Networking, backups, remote-work setups and workstation repair, sized for small offices and independent professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across the work completed at the Charlotte workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Questions From Ballantyne Businesses and Remote Workers
            </h2>
            <p className="text-lg text-slate-600">
              Office support, home-office setup, data recovery and keeping downtime short
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
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need IT Support in the Ballantyne Area?
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            Tell us what your office or home setup has to keep doing and we will tell you what it takes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_ballantyne_footer"
              className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_ballantyne_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-orange-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-orange-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-orange-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-orange-200">Pickup & Delivery Available in Ballantyne (via Johnston Rd and Ballantyne Commons Pkwy)</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-orange-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-orange-200">Ballantyne is a service area; all bench work is done at the Charlotte workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/ballantyne-computer-repair/" />
    </div>
  );
};

export default Ballantyne;
