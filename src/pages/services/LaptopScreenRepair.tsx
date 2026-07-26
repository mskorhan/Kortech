import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Laptop, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  MapPin,
  Star,
  AlertTriangle,
  Monitor,
  Link
} from 'lucide-react';

const LaptopRepair = () => {
  const faqs = [
    {
      question: "What laptop problems do you fix at your Charlotte shop?",
      answer: "We repair all laptop issues at our Charlotte location including screen replacement, keyboard repair, battery replacement, charging port repair, motherboard issues, and performance problems for all major brands."
    },
    {
      question: "How long does laptop repair take at your shop?",
      answer: "Most laptop repairs are completed within 1-2 business days at our Charlotte location. Walk-in diagnostics are available, and same-day service is often possible for common issues."
    },
    {
      question: "Do you repair all laptop brands in Charlotte?",
      answer: "Yes, we repair all major laptop brands at our Charlotte shop including Dell, HP, Lenovo, ASUS, Acer, MSI, Apple MacBook, and more. We stock parts for common models."
    },
    {
      question: "Can I walk in without an appointment?",
      answer: "Yes! Walk-ins are welcome at our Charlotte location. We provide free diagnostics and can often begin repairs the same day for most laptop issues."
    },
    {
      question: "Do you offer warranty on laptop repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Laptop Repair Services",
      "description": "Professional laptop repair services at our Charlotte, NC location. Screen replacement, keyboard repair, battery service, and comprehensive laptop repair for all brands.",
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
        "description": "Professional laptop repair services"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Laptop Repair Charlotte NC | KorTech Service"
        description="Professional laptop repair services at our Charlotte, NC location. Screen replacement, keyboard repair, battery service for all brands. Walk-ins welcome! Call 704-246-7642!"
        canonicalUrl="/laptop-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Charlotte Local Repair Shop</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Laptop Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional laptop repair services at our Charlotte location. 
                Screen replacement, keyboard repair, battery service, and comprehensive laptop repair for all brands. 
                Walk-in service available - serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Visit Our Shop: 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Directions</span>
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
                  <Laptop className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Laptop Problems?</h3>
                  <p className="text-blue-200">Visit our Charlotte shop for professional repair</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Walk-In</div>
                    <div className="text-sm text-blue-200">Welcome</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">1-2 Days</div>
                    <div className="text-sm text-green-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Screen replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Keyboard repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Battery replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">All brands serviced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Repair Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Laptop Repair Services at Our Charlotte Shop
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive laptop repair services for all major brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Screen Replacement</h3>
              <p className="text-slate-600 mb-4">
                Professional laptop screen replacement for cracked, damaged, or malfunctioning displays.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• LCD screen replacement</li>
                <li>• Touchscreen repair</li>
                <li>• Backlight repair</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Keyboard & Trackpad</h3>
              <p className="text-slate-600 mb-4">
                Repair and replacement of laptop keyboards and trackpads for all models.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Keyboard replacement</li>
                <li>• Individual key repair</li>
                <li>• Trackpad replacement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Battery & Charging</h3>
              <p className="text-slate-600 mb-4">
                Battery replacement and charging port repair for extended laptop life.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Battery replacement</li>
                <li>• Charging port repair</li>
                <li>• Power jack replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Visit Our Charlotte Laptop Repair Shop
            </h2>
            <p className="text-lg text-slate-600">
              Convenient Sardis Road location serving the entire Charlotte metro area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">KorTech Service</h3>
                <div className="space-y-3 text-blue-700">
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-3" />
                    Mon-Fri: 9AM-6PM, Sat: 11AM-4PM
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 mb-3">Service Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>• Charlotte</div>
                  <div>• Matthews</div>
                  <div>• Mint Hill</div>
                  <div>• Pineville</div>
                  <div>• Ballantyne</div>
                  <div>• Surrounding areas</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Our Charlotte Shop?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Walk-In Welcome</h4>
                    <p className="text-slate-600 text-sm">No appointment needed for diagnostics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Same-Day Service</h4>
                    <p className="text-slate-600 text-sm">Many repairs completed while you wait</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Local Expertise</h4>
                    <p className="text-slate-600 text-sm">25+ years serving Charlotte area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Quality Parts</h4>
                    <p className="text-slate-600 text-sm">OEM and high-quality compatible parts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Laptop Repair" 
        price="Walk-In for Free Diagnostic"
        urgentText="Same-Day Service Available at Our Charlotte Shop"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Laptop Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Looking for other services? <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">Browse all our computer repair services</a> in Charlotte, NC.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Computer Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/ssd-upgrades" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">SSD Upgrades</h3>
              <p className="text-slate-600">Speed up your laptop with SSD upgrade installation</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover data from failed laptop drives</p>
            </a>

            <a href="/services" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">All Services</h3>
              <p className="text-slate-600">View our complete range of repair services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaptopRepair;