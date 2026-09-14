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

const Pineville = () => {

  const services = [
    {
      icon: Monitor,
      title: "Everyday Laptop & Desktop Repair",
      description: "Screen replacements, batteries, virus removal and slow-PC tune-ups you can drop off on the way through south Charlotte",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Data Recovery After a Drive Failure",
      description: "Files pulled from failed hard drives, dead SSDs and laptops that will no longer boot",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Screen Repair",
      description: "Cracked iPhone, iPad and Android screens handled at the same Charlotte counter as your computer drop-off",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Wi-Fi & Small Business IT",
      description: "Router, Wi-Fi and small-office network setup for households and shops along the retail corridor",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "What will a repair cost, and is there a charge just to look at it?",
      answer: "We quote before any work begins, so there are no surprises. Prices depend on the part and the fault, which is why we ask you to call or text with the make, model and symptom. The diagnostic fee is waived with a hardware repair."
    },
    {
      question: "Can I drop a laptop off on my commute and collect it later?",
      answer: "Yes. Drop-off during our posted hours is the quickest way to start a repair, and the shop sits on the south-east side of Charlotte off Sardis Road North, which suits Pineville commuters already crossing the city. Contact us early in the day to ask about same-day availability."
    },
    {
      question: "Do you replace cracked laptop screens and worn-out batteries?",
      answer: "Yes. Cracked screens, swollen or dead batteries, failing charging ports and keyboards are among the most common everyday repairs we handle. Call or text with the exact model and we will quote the part and the labor before any work starts."
    },
    {
      question: "My computer is crawling and full of pop-ups. Is it worth repairing?",
      answer: "Often it is. Malware removal, a cleanup of startup programs, fan and thermal service, and a storage or memory upgrade bring most machines back to usable speed. We diagnose first and tell you plainly when the repair is not worth the value of the machine."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Pineville, NC",
      "description": "Everyday computer, laptop and phone repair for Pineville, NC: screens, batteries, virus removal, tune-ups and data recovery. Work is carried out at the KorTech workshop in south-east Charlotte, with drop-off or pickup and delivery.",
      "url": "https://www.kortechservice.com/pineville-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Pineville",
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
        title="Pineville NC Laptop &amp; PC Repair | KorTech"
        description="Laptop screens, batteries, virus removal and tune-ups for Pineville, NC. Drop off at our south Charlotte workshop or ask about pickup. Call 704-246-7642."
        canonicalUrl="/pineville-computer-repair"
        location="Pineville, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-rose-300" />
              <span className="text-white font-medium">A Pineville Service Area of Our Charlotte Workshop</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-rose-300">Pineville, NC</span>
            </h1>

            <div className="bg-rose-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-rose-100 mb-4">
                <strong>Pineville Community:</strong> Pineville is an incorporated town at the southern edge of Mecklenburg County, close to the South Carolina state line and built around a busy retail and commuter corridor. KorTech Service has no Pineville storefront: our workshop has operated in Charlotte since 1998, and Pineville is one of the south Charlotte areas we serve from it.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Everyday repairs for the machines Pineville households and shops actually use: cracked laptop
              screens, dying batteries, malware and pop-ups, and computers that have slowed to a crawl. Drop
              the device at our Charlotte workshop while you are out, or ask about pickup and delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_pineville_hero"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_pineville_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              Common Repairs for Pineville Households and Shops
            </h2>
            <p className="text-lg text-slate-600">
              The four things Pineville customers bring us most often, all handled at the Charlotte workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              What Pineville Customers Get From a Charlotte Workshop
            </h2>
            <p className="text-lg text-slate-600">
              An independent repair shop that has run in Charlotte since 1998
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">If the drive north does not fit your day, we can collect the device and return it once the repair is finished</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Easy Drop-Off</h3>
              <p className="text-slate-600">Our Sardis Road North workshop is a straightforward stop for Pineville commuters already crossing south Charlotte</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across the repairs completed at the Charlotte shop</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Pineville Drop-Off &amp; Repair Questions
            </h2>
            <p className="text-lg text-slate-600">
              Where to bring the device, what we fix, and what to expect on price
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
      <section className="py-16 bg-rose-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bringing a Device In From Pineville?
          </h2>
          <p className="text-xl text-rose-200 mb-8">
            Call or text with the make, model and symptom and we will tell you what the repair involves
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_pineville_footer"
              className="bg-white text-rose-900 hover:bg-rose-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_pineville_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-rose-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-rose-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-rose-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-rose-200">Pickup & Delivery Available in Pineville (via Pineville-Matthews Rd and I-485)</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-rose-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-rose-200">Pineville is a service area; all work is done at the Charlotte workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/pineville-computer-repair/" />
    </div>
  );
};

export default Pineville;
