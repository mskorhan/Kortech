import React from 'react';
import SEOHead from '../../components/SEOHead';
import StickyCTA from '../../components/StickyCTA';
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
  Shield,
  Zap,
  Award,
  Users,
  Target
} from 'lucide-react';

const Charlotte = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Charlotte",
      description: "Expert Mac & PC repair services in Charlotte, NC",
      price: "Call/Text For Quote"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Charlotte",
      description: "Professional data recovery services for Charlotte residents",
      price: "Call/Text For Quote"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Charlotte",
      price: "Call/Text For Quote"
    },
    {
      icon: Wifi,
      title: "Network Setup Charlotte",
      description: "Business and home network installation in Charlotte",
      price: "Call/Text For Quote"
    }
  ];

  const faqs = [
    {
      question: "Do you provide same-day computer repair in Charlotte?",
      answer: "Yes, we offer same-day computer repair services in Charlotte for most common issues. Our technicians can often complete repairs within a few hours."
    },
    {
      question: "What areas of Charlotte do you serve?",
      answer: "We serve all areas of Charlotte including Uptown, South End, NoDa, Plaza Midwood, Dilworth, Myers Park, and surrounding neighborhoods."
    },
    {
      question: "How much does computer repair cost in Charlotte?",
      answer: "Computer repair costs in Charlotte vary based on the issue. We provide free diagnostics ($75-$150 value, waived with repair) and transparent pricing before any work begins."
    },
    {
      question: "Do you offer pickup and delivery in Charlotte?",
      answer: "Yes, we offer pickup and delivery services throughout Charlotte for your convenience. Contact us to schedule pickup of your device."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service - Charlotte Computer Repair",
      "description": "Professional computer repair, data recovery, and IT support services in Charlotte, NC. Serving Charlotte residents and businesses since 1998.",
      "url": "https://kortechservice.com/charlotte-computer-repair",
      "telephone": "704-246-7642",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.2271",
        "longitude": "-80.8431"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Charlotte",
          "addressRegion": "NC"
        }
      ],
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 11:00-16:00"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "96"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Charlotte Computer Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Computer Repair Charlotte",
              "description": "Professional Mac and PC repair services in Charlotte, NC"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Recovery Charlotte",
              "description": "Expert data recovery services for Charlotte residents"
            }
          }
        ]
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
        title="Computer Repair Charlotte NC • KorTech Service"
        description="Professional computer repair in Charlotte, NC. Same-day Mac & PC repair, data recovery, IT support. Call 704-246-7642 or Text/Call 980-888-5300."
        canonicalUrl="/charlotte-computer-repair"
        location="Charlotte, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Serving Charlotte, NC Since 1998</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair Charlotte NC
              <span className="block text-blue-300">Charlotte, NC</span>
            </h1>
            
            <div className="bg-blue-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-blue-100 mb-4">
                <strong>Local Charlotte Landmark:</strong> Located just minutes from SouthPark Mall and easily accessible from Uptown Charlotte, our Sardis Road location has been serving the Charlotte community since 1998. We're proud to be part of the Queen City's tech community. Our convenient location near the intersection of Sardis Road and Rea Road makes us easily accessible from all Charlotte neighborhoods including Myers Park, Dilworth, South End, and NoDa.
              </p>
              <p className="text-sm text-blue-200 italic">
                "I've been bringing my computers to KorTech for over 10 years. They're the most reliable repair shop in Charlotte! Located right off Sardis Road, it's so convenient for us in the SouthPark area." - Local Charlotte Business Owner
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services in Charlotte, North Carolina. Expert Mac & PC repair, 
              data recovery, and IT support for all Charlotte neighborhoods including Uptown, South End, 
              NoDa, Plaza Midwood, and Dilworth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642?utm_source=site&utm_medium=charlotte_page&utm_campaign=phone_cta"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300?utm_source=site&utm_medium=charlotte_page&utm_campaign=text_cta"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
                <span>All Charlotte Areas</span>
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
              Computer Services in Charlotte, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Charlotte residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="text-blue-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Charlotte Chooses KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Charlotte residents and businesses for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">25+ Years in Charlotte</h3>
              <p className="text-slate-600">Serving the Charlotte community since 1998 with expert computer repair services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">100,000+ Customers</h3>
              <p className="text-slate-600">Trusted by Charlotte residents, businesses, and organizations throughout the city</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Charlotte customers for quality service and fair pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Charlotte Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about computer repair services in Charlotte, NC
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

      {/* Find Us Section with Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Find Us in Charlotte
            </h2>
            <p className="text-lg text-slate-600">
              Conveniently located on Sardis Road, easily accessible from all Charlotte neighborhoods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KorTech Service Charlotte computer repair shop location - Professional Mac PC repair data recovery IT support"
            />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Visit Our Charlotte Location
            </h2>
            <p className="text-lg text-slate-600">
              Conveniently located on Sardis Road, easily accessible from all Charlotte neighborhoods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KorTech Service Charlotte computer repair shop location"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Computer Repair in Charlotte?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact Charlotte's most trusted computer repair experts today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642?utm_source=site&utm_medium=charlotte_page&utm_campaign=phone_cta"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300?utm_source=site&utm_medium=charlotte_page&utm_campaign=text_cta"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-blue-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-blue-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-blue-200">Serving all Charlotte neighborhoods</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Charlotte;