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
  Award,
  Users,
  Target
} from 'lucide-react';

const Matthews = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Matthews",
      description: "Expert Mac & PC repair services in Matthews, NC",
      price: "Call/Text For Quote"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Matthews",
      description: "Professional data recovery services for Matthews residents",
      price: "Call/Text For Quote"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Matthews",
      price: "Call/Text For Quote"
    },
    {
      icon: Wifi,
      title: "Network Setup Matthews",
      description: "Business and home network installation in Matthews",
      price: "Call/Text For Quote"
    }
  ];

  const faqs = [
    {
      question: "Do you provide computer repair services in Matthews, NC?",
      answer: "Yes, we provide comprehensive computer repair services to Matthews, NC residents. We're located nearby in Charlotte and serve the entire Matthews area with pickup and delivery available."
    },
    {
      question: "How close are you to Matthews?",
      answer: "Our Charlotte location is just minutes from Matthews, making us easily accessible for all Matthews residents. We also offer pickup and delivery services throughout Matthews."
    },
    {
      question: "What computer brands do you repair in Matthews?",
      answer: "We repair all major computer brands in Matthews including Apple Mac, Dell, HP, Lenovo, ASUS, Acer, and custom-built PCs."
    },
    {
      question: "Do you offer same-day service to Matthews customers?",
      answer: "Yes, we offer same-day computer repair services to Matthews customers for most common issues. Contact us early in the day for best availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service - Matthews Computer Repair",
      "description": "Professional computer repair, data recovery, and IT support services serving Matthews, NC. Expert technicians providing quality service to Matthews residents since 1998.",
      "url": "https://kortechservice.com/matthews-computer-repair",
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
          "name": "Matthews",
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
        title="Computer Repair Matthews NC • KorTech Service"
        description="Professional computer repair in Matthews, NC. Same-day Mac & PC repair, data recovery, IT support. Call 704-246-7642 or Text/Call 980-888-5300."
        canonicalUrl="/matthews-computer-repair"
        location="Matthews, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Serving Matthews, NC Since 1998</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair Matthews NC
              <span className="block text-green-300">Matthews, NC</span>
            </h1>
            
            <div className="bg-green-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-green-100 mb-4">
                <strong>Matthews Community:</strong> Just minutes from downtown Matthews and the Matthews Community Center, we've been proudly serving Matthews families and businesses for over 25 years. Our location is easily accessible from Independence Boulevard and Highway 51, making us convenient for all Matthews residents. Whether you're near the historic downtown area or in one of the newer developments off Weddington Road, we're your local computer repair experts.
              </p>
              <p className="text-sm text-green-200 italic">
                "KorTech has been our go-to for all computer issues. They understand the Matthews community and provide excellent local service! Being so close to Matthews makes it super convenient." - Matthews Resident
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services serving Matthews, North Carolina. Expert Mac & PC repair, 
              data recovery, and IT support for Matthews residents and businesses. Conveniently located 
              minutes from Matthews with pickup and delivery available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642?utm_source=site&utm_medium=matthews_page&utm_campaign=phone_cta"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300?utm_source=site&utm_medium=matthews_page&utm_campaign=text_cta"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              Computer Services for Matthews, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Matthews residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="text-green-600 font-bold">{service.price}</div>
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
              Why Matthews Residents Choose KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Matthews community for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Close to Matthews</h3>
              <p className="text-slate-600">Conveniently located minutes from Matthews with pickup and delivery services available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Matthews Community</h3>
              <p className="text-slate-600">Proudly serving Matthews residents and businesses with personalized service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Matthews customers for quality service and fair pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Matthews Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about computer repair services for Matthews, NC residents
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
              Find Us Near Matthews
            </h2>
            <p className="text-lg text-slate-600">
              Easy access from Matthews via Independence Boulevard
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KorTech Service location map for Matthews NC residents - Computer repair pickup delivery service available"
            />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Easy Access from Matthews
            </h3>
            <p className="text-lg text-slate-600">
              Just minutes from downtown Matthews via Independence Boulevard
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KorTech Service location map for Matthews NC residents"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Computer Repair in Matthews?
          </h2>
          <p className="text-xl text-green-200 mb-8">
            Contact us today for expert computer repair services in Matthews, NC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
             href="tel:704-246-7642?utm_source=site&utm_medium=matthews_page&utm_campaign=phone_cta"
              className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
             href="sms:980-888-5300?utm_source=site&utm_medium=matthews_page&utm_campaign=text_cta"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-green-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-green-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-green-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-green-200">Minutes from Matthews - Pickup & Delivery Available</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-green-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-green-200">Serving Matthews and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matthews;