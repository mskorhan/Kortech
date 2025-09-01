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
  Award,
  Users,
  Truck
} from 'lucide-react';

const MintHill = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Mint Hill",
      description: "Expert Mac & PC repair services for Mint Hill, NC",
      price: "Call/Text For Quote"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Mint Hill",
      description: "Professional data recovery for Mint Hill residents",
      price: "Call/Text For Quote"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Mint Hill",
      price: "Call/Text For Quote"
    },
    {
      icon: Wifi,
      title: "Network Setup Mint Hill",
      description: "Business and home network installation",
      price: "Call/Text For Quote"
    }
  ];

  const faqs = [
    {
      question: "Do you provide computer repair services in Mint Hill, NC?",
      answer: "Yes, we provide comprehensive computer repair services to Mint Hill, NC residents. We offer pickup and delivery services throughout Mint Hill for your convenience."
    },
    {
      question: "How do I get my computer repaired if I live in Mint Hill?",
      answer: "We offer pickup and delivery services to Mint Hill residents, or you can drop off your device at our Charlotte location. We make it convenient for Mint Hill customers to get expert computer repair."
    },
    {
      question: "What computer problems do you fix in Mint Hill?",
      answer: "We fix all types of computer problems for Mint Hill residents including hardware failures, software issues, virus removal, data recovery, and performance optimization."
    },
    {
      question: "Do you offer same-day service to Mint Hill?",
      answer: "Yes, we offer same-day computer repair services to Mint Hill customers for many common issues. Contact us early in the day for best availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service - Mint Hill Computer Repair",
      "description": "Professional computer repair, data recovery, and IT support services serving Mint Hill, NC. Expert technicians providing quality service with pickup and delivery.",
      "url": "https://kortechservice.com/mint-hill-computer-repair",
      "telephone": "704-246-7642",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Mint Hill",
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
        title="Computer Repair Mint Hill NC | KorTech Service"
        description="Professional computer repair services in Mint Hill, NC. Same-day Mac & PC repair, data recovery, IT support. Pickup and delivery available. Call 704-246-7642!"
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
              <span className="text-white font-medium">Serving Mint Hill, NC Since 1998</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-purple-300">Mint Hill, NC</span>
            </h1>
            
            <div className="bg-purple-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-purple-100 mb-4">
                <strong>Mint Hill Community:</strong> Located just minutes from Mint Hill via Highway 51 and Lawyers Road, we've been proudly serving Mint Hill residents and local businesses for over 25 years. Our convenient Charlotte location makes us easily accessible from all Mint Hill neighborhoods.
              </p>
              <p className="text-sm text-purple-200 italic">
                "As a Mint Hill resident, I appreciate having KorTech so close by. Their pickup service makes it even more convenient, and their work is always top-notch!" - Mint Hill Resident
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services serving Mint Hill, North Carolina. Expert Mac & PC repair, 
              data recovery, and IT support for Mint Hill residents and businesses. Convenient pickup and 
              delivery services available throughout Mint Hill.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              Computer Services for Mint Hill, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Mint Hill residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="text-purple-600 font-bold">{service.price}</div>
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
              Why Mint Hill Residents Choose KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Mint Hill community for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Convenient pickup and delivery services throughout Mint Hill for your computer repair needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mint Hill Community</h3>
              <p className="text-slate-600">Proudly serving Mint Hill residents and businesses with personalized service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Mint Hill customers for quality service and convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Mint Hill Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about computer repair services for Mint Hill, NC residents
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
            Ready for Computer Repair in Mint Hill?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Contact us today for expert computer repair services in Mint Hill, NC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
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
                <p className="text-purple-200">Serving Mint Hill and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MintHill;