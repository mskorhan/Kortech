import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import reviewsData from '../../data/reviews.json';
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
  const { rating, totalReviews } = reviewsData;

  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Ballantyne",
      description: "Expert Mac & PC repair services for Ballantyne, NC",
      price: "Call/Text For Quote",
      link: "/services"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Ballantyne",
      description: "Professional data recovery for Ballantyne residents",
      price: "Call/Text For Quote",
      link: "/data-recovery"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Ballantyne",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte"
    },
    {
      icon: Wifi,
      title: "Network Setup Ballantyne",
      description: "Business and home network installation",
      price: "Call/Text For Quote",
      link: "/business-it-support"
    }
  ];

  const faqs = [
    {
      question: "Do you provide computer repair services in Ballantyne, NC?",
      answer: "Yes, we provide comprehensive computer repair services to Ballantyne, NC residents. We offer pickup and delivery services throughout Ballantyne for your convenience."
    },
    {
      question: "How do I get my computer repaired if I live in Ballantyne?",
      answer: "We offer pickup and delivery services to Ballantyne residents, or you can drop off your device at our Charlotte location. We make it convenient for Ballantyne customers to get expert computer repair."
    },
    {
      question: "What types of computer issues do you fix in Ballantyne?",
      answer: "We fix all types of computer issues for Ballantyne residents including hardware failures, software problems, virus infections, data loss, slow performance, and network connectivity issues."
    },
    {
      question: "Do you offer same-day service to Ballantyne?",
      answer: "Yes, we offer same-day computer repair services to Ballantyne customers for many common issues. Contact us early in the day for best availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Ballantyne, NC",
      "description": "Professional computer repair, data recovery, and IT support services serving Ballantyne, NC. Expert technicians providing quality service with pickup and delivery.",
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
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": String(rating ?? "4.8"),
          "reviewCount": String(totalReviews ?? "0")
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
        title="Computer Repair Ballantyne NC | KorTech Service"
        description="Professional computer repair services in Ballantyne, NC. Same-day Mac & PC repair, data recovery, IT support. Pickup and delivery available. Call 704-246-7642!"
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
              <span className="text-white font-medium">Serving Ballantyne, NC Since 1998</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-orange-300">Ballantyne, NC</span>
            </h1>

            <div className="bg-orange-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-orange-100 mb-4">
                <strong>Ballantyne Community:</strong> Serving Ballantyne residents and businesses just off Johnston Rd and the Ballantyne Corporate Park, we've been the trusted computer repair choice for Ballantyne families and professionals for over 25 years.
              </p>
              <p className="text-sm text-orange-200 italic">
                "KorTech picked up my laptop from my office in Ballantyne Corporate Park and had it back the next day. Incredibly convenient!" - Ballantyne Professional
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services serving Ballantyne, North Carolina. Expert Mac & PC repair,
              data recovery, and IT support for Ballantyne residents and businesses. Convenient pickup and
              delivery services available throughout Ballantyne.
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
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Diagnostic</span>
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
              Computer Services for Ballantyne, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Ballantyne residents and businesses
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
              Why Ballantyne Residents Choose KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Ballantyne community for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Convenient pickup and delivery services throughout Ballantyne for your computer repair needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Ballantyne Community</h3>
              <p className="text-slate-600">Proudly serving Ballantyne residents and businesses with personalized service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Ballantyne customers for quality service and convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ballantyne Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about computer repair services for Ballantyne, NC residents
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
            Ready for Computer Repair in Ballantyne?
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            Contact us today for expert computer repair services in Ballantyne, NC
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
                <p className="text-orange-200">Serving Ballantyne and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/ballantyne-computer-repair" />
    </div>
  );
};

export default Ballantyne;
