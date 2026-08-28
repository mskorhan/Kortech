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

const Stallings = () => {
  const { rating, totalReviews } = reviewsData;

  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Stallings",
      description: "Expert Mac & PC repair services for Stallings, NC",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Stallings",
      description: "Professional data recovery for Stallings residents",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Stallings",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Network Setup Stallings",
      description: "Business and home network installation",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "Do you provide computer repair services in Stallings, NC?",
      answer: "Yes, we provide comprehensive computer repair services to Stallings, NC residents. We offer pickup and delivery services throughout Stallings for your convenience."
    },
    {
      question: "How do I get my computer repaired if I live in Stallings?",
      answer: "We offer pickup and delivery services to Stallings residents, or you can drop off your device at our Charlotte location. We make it convenient for Stallings customers to get expert computer repair."
    },
    {
      question: "What types of computer issues do you fix in Stallings?",
      answer: "We fix all types of computer issues for Stallings residents including hardware failures, software problems, virus infections, data loss, slow performance, and network connectivity issues."
    },
    {
      question: "Do you offer same-day service to Stallings?",
      answer: "Yes, we offer same-day computer repair services to Stallings customers for many common issues. Contact us early in the day for best availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Stallings, NC",
      "description": "Professional computer repair, data recovery, and IT support services serving Stallings, NC. Expert technicians providing quality service with pickup and delivery.",
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
        title="Computer Repair Stallings NC | KorTech Service"
        description="Professional computer repair services in Stallings, NC. Same-day Mac & PC repair, data recovery, IT support. Pickup and delivery available. Call 704-246-7642!"
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
              <span className="text-white font-medium">Serving Stallings, NC Since 1998</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-sky-300">Stallings, NC</span>
            </h1>

            <div className="bg-sky-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-sky-100 mb-4">
                <strong>Stallings Community:</strong> Serving Stallings residents and businesses along Highway 74 and near Stallings Rd, we've been providing reliable computer repair services to Stallings families and businesses for over 25 years.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services serving Stallings, North Carolina. Expert Mac & PC repair,
              data recovery, and IT support for Stallings residents and businesses. Convenient pickup and
              delivery services available throughout Stallings.
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
              Computer Services for Stallings, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Stallings residents and businesses
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
              Why Stallings Residents Choose KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Stallings community for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Convenient pickup and delivery services throughout Stallings for your computer repair needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Stallings Community</h3>
              <p className="text-slate-600">Proudly serving Stallings residents and businesses with personalized service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Stallings customers for quality service and convenience</p>
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
              Common questions about computer repair services for Stallings, NC residents
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
            Ready for Computer Repair in Stallings?
          </h2>
          <p className="text-xl text-sky-200 mb-8">
            Contact us today for expert computer repair services in Stallings, NC
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
                <p className="text-sky-200">Pickup & Delivery Available in Stallings (via Highway 74 and Stallings Rd)</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-sky-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-sky-200">Serving Stallings and surrounding areas</p>
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
