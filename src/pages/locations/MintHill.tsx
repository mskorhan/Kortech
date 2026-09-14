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

const MintHill = () => {

  const services = [
    {
      icon: Monitor,
      title: "Home Computer Repair & Upgrades",
      description: "SSD swaps, memory upgrades, fan and power supply repairs that keep an older desktop or laptop in service",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Data Recovery & Transfer",
      description: "Years of documents and photos rescued from an aging drive, or moved onto a newer machine",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Repair",
      description: "Screen and battery replacement on iPhone, iPad and Android devices, handled at the same workshop",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Home Wi-Fi & Network Setup",
      description: "Router replacement, dead-spot coverage in larger or older houses, printers and shared home storage",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "My desktop is several years old. Is it worth upgrading or should I replace it?",
      answer: "We look at the machine before advising. A solid-state drive and more memory transform most computers that still have a working processor, and that is far cheaper than a new system. If the hardware really is at the end of its life we will say so rather than sell you an upgrade that will not help."
    },
    {
      question: "Can you add an SSD or more memory and keep everything exactly as it is?",
      answer: "Yes. The usual approach is to clone the existing system onto the new drive so your programs, files, settings and shortcuts come across unchanged, then fit the additional memory at the same time. You get the machine back looking the same but responding much faster."
    },
    {
      question: "Our Wi-Fi does not reach the whole house. What can be done?",
      answer: "Dead spots are common in larger or older houses, especially where the router sits at one end. We can reposition or replace the router, add mesh units or a wired access point, and sort out printers and shared storage so everything stays reachable from every room."
    },
    {
      question: "Where do Mint Hill customers bring a computer in?",
      answer: "To our workshop at 1721 Sardis Rd N, Suite 7A in Charlotte. Mint Hill lies east and north-east of the shop, so it is a straightforward drop-off for most residents, and pickup and delivery is available if carrying a desktop is not practical."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Mint Hill, NC",
      "description": "Home computer repair, SSD and memory upgrades, and home Wi-Fi and network setup for Mint Hill, NC, east of the KorTech workshop in south-east Charlotte, with drop-off or pickup and delivery.",
      "url": "https://www.kortechservice.com/mint-hill-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Mint Hill",
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
        title="Mint Hill NC Computer Upgrades &amp; Repair | KorTech"
        description="Home computer repair, SSD and memory upgrades and Wi-Fi setup for Mint Hill, NC. Drop off at our Charlotte workshop or ask about pickup. Call 704-246-7642."
        canonicalUrl="/mint-hill-computer-repair"
        location="Mint Hill, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-purple-300" />
              <span className="text-white font-medium">Serving Mint Hill From Our Charlotte Workshop</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-purple-300">Mint Hill, NC</span>
            </h1>
            
            <div className="bg-purple-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-purple-100 mb-4">
                <strong>Mint Hill Community:</strong> Mint Hill is an established incorporated town on the east side of Mecklenburg County, sitting east and north-east of our shop. KorTech Service has no Mint Hill branch: our workshop on Sardis Rd N has operated in Charlotte since 1998, and Mint Hill is one of the east-side areas we serve from it.
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Keeping home computers going rather than replacing them: solid-state drive and memory upgrades,
              fan and power supply repairs, data transfers to a newer machine, and home Wi-Fi that reaches
              every room. Drop-off at the Charlotte workshop, or ask about pickup and delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_mint_hill_hero"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_mint_hill_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              Home Computer and Network Services for Mint Hill
            </h2>
            <p className="text-lg text-slate-600">
              Repairs, upgrades and home networking aimed at machines people intend to keep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              Repair and Upgrade Instead of Replace
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte workshop, running since 1998, on the west side of Mint Hill
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Desktops, monitors and printers are awkward to carry, so we can collect from Mint Hill and return the equipment set up and working</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Upgrades That Last</h3>
              <p className="text-slate-600">SSDs, memory and thermal repairs that add years to a working machine, with an honest answer when a computer is genuinely finished</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across the repairs and upgrades completed at the Charlotte workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Mint Hill Upgrade &amp; Home Network Questions
            </h2>
            <p className="text-lg text-slate-600">
              Whether to upgrade or replace, what a faster drive changes, and fixing Wi-Fi dead spots
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
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thinking About an Upgrade in Mint Hill?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Tell us the age of the machine and what it struggles with, and we will say whether an upgrade is worth it
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_mint_hill_footer"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_mint_hill_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-purple-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-purple-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-purple-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-purple-200">Pickup & Delivery Available in Mint Hill</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-purple-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-purple-200">Mint Hill is a service area; all work is carried out at the Charlotte workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/mint-hill-computer-repair/" />
    </div>
  );
};

export default MintHill;