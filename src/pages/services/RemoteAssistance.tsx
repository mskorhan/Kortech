import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Monitor, 
  Wifi, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Zap,
  Globe,
  Laptop,
  AlertTriangle,
  MapPin
} from 'lucide-react';

const RemoteAssistance = () => {
  const faqs = [
    {
      question: "Who can receive remote assistance?",
      answer: "We only provide remote assistance to existing, verified customers who have previously used our in-shop services. This is offered by appointment only as a convenience for our established clients."
    },
    {
      question: "Is remote assistance your main service?",
      answer: "No, our main services are performed in-shop at our Charlotte location or on-site in the local area. Remote assistance is a limited service we offer only to returning customers for minor software issues."
    },
    {
      question: "How do I become eligible for remote assistance?",
      answer: "You must first visit our Charlotte shop for an in-person service. After establishing a customer relationship, we may offer remote assistance for future minor software issues by appointment."
    },
    {
      question: "What types of issues can be handled remotely?",
      answer: "Only minor software configuration issues for verified returning customers. Hardware problems, virus removal, and major repairs require in-shop or on-site service."
    },
    {
      question: "Do you offer general remote tech support?",
      answer: "No, we do not offer general remote tech support services. We are a local computer repair shop serving Charlotte and surrounding areas with in-shop and on-site services."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Optional Remote Help for Returning Clients",
      "description": "Limited remote assistance available only to existing, verified customers of our Charlotte computer repair shop by appointment.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "KorTech Service",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1721 Sardis Rd N, Suite 7A",
          "addressLocality": "Charlotte",
          "addressRegion": "NC",
          "postalCode": "28270"
        },
        "telephone": "704-246-7642"
      },
      "areaServed": ["Charlotte, NC", "Matthews, NC", "Mint Hill, NC", "Pineville, NC", "Ballantyne, NC"],
      "offers": {
        "@type": "Offer",
        "availability": "InStock",
        "description": "Limited remote assistance for verified returning customers only"
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
        title="Optional Remote Help for Returning Clients - KorTech Service Charlotte"
        description="Limited remote assistance available only to existing, verified customers of our Charlotte computer repair shop by appointment. Main services performed in-shop."
        keywords="remote assistance Charlotte, computer help returning customers, local computer repair Charlotte"
        canonicalUrl="/remote-assistance"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span className="text-white font-medium">Local Charlotte Computer Repair Shop</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Optional Remote Help
                <span className="block text-cyan-300">for Returning Clients</span>
              </h1>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-300" />
                  <span className="text-red-200 font-bold">IMPORTANT NOTICE:</span>
                </div>
                <p className="text-red-100 text-lg">
                  We only offer secure remote support to existing, verified customers by appointment. Our main services are performed in-shop or on-site in the Charlotte area.
                </p>
              </div>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                As a convenience for our established customers, we offer limited remote assistance by appointment only. 
                New customers must first visit our Charlotte shop for in-person service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Visit Our Shop: 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Schedule In-Shop Visit</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Walk-In Welcome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Local Charlotte Shop</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Laptop className="h-16 w-16 text-cyan-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Need Computer Help?</h3>
                  <p className="text-cyan-200">Visit our Charlotte location first</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-cyan-300">Main Services</div>
                    <div className="text-sm text-cyan-200">In-Shop & On-Site</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Walk-in diagnostics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">In-shop repairs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">On-site service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Mail-in repairs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Emphasis */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Main Services - In-Shop & On-Site
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair services at our Charlotte location and throughout the local area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">In-Shop Repair</h3>
              <p className="text-slate-600 mb-4">
                Visit our Charlotte location for comprehensive computer repair and diagnostics.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Walk-in diagnostics</li>
                <li>• Same-day service</li>
                <li>• All repair types</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">On-Site Service</h3>
              <p className="text-slate-600 mb-4">
                We come to you for business and residential service in the Charlotte area.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Charlotte metro area</li>
                <li>• Business IT support</li>
                <li>• Network setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mail-In Repairs</h3>
              <p className="text-slate-600 mb-4">
                Can't visit our shop? Ship your device using our secure mail-in form.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Secure shipping</li>
                <li>• Professional service</li>
                <li>• Nationwide available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Remote Service */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Limited Remote Assistance for Returning Clients
            </h2>
            <p className="text-lg text-slate-600">
              Available only to established customers by appointment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Eligibility Requirements</h3>
                <p className="text-yellow-700">
                  Remote assistance is only available to customers who have previously used our in-shop services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Requirements</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Previous in-shop service</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Verified customer account</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Appointment scheduled</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Limited Scope</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>Minor software issues only</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>Follow-up support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>Configuration assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Computer Repair" 
        price="Visit Our Charlotte Shop"
        urgentText="Walk-In Service Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Remote Assistance FAQ" />

      {/* Location Emphasis */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Visit Our Charlotte Location
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair services at our convenient Sardis Road location
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">KorTech Service</h3>
                <div className="space-y-3 text-slate-600">
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    Mon-Fri: 9AM-6PM, Sat: 11AM-4PM
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-slate-800 mb-2">Service Areas:</h4>
                  <p className="text-slate-600">Charlotte, Matthews, Mint Hill, Pineville, Ballantyne, and surrounding areas</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Walk-In Welcome!</h4>
                  <p className="text-blue-700 mb-4">
                    No appointment needed for diagnostics and most repairs. Same-day service available.
                  </p>
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 transition-all duration-300"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteAssistance;