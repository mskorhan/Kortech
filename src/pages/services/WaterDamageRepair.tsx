import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Droplets, 
  AlertTriangle, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Zap,
  Phone,
  Timer
} from 'lucide-react';

const WaterDamageRepair = () => {
  const faqs = [
    {
      question: "Can water-damaged devices be repaired?",
      answer: "Many water-damaged devices can be successfully repaired if brought in quickly. The key is immediate action - turn off the device and bring it to us as soon as possible."
    },
    {
      question: "How much does water damage repair cost?",
      answer: "Water damage repair costs vary based on the extent of damage and device type. We provide free diagnostics to assess the damage and provide you with a detailed quote."
    },
    {
      question: "How long does water damage repair take?",
      answer: "Water damage repairs typically take 2-5 business days. We need time for thorough cleaning, drying, and testing to ensure all components function properly."
    },
    {
      question: "What should I do immediately after water damage?",
      answer: "Turn off the device immediately, remove the battery if possible, do not try to charge it, and bring it to us as soon as possible. Do not use rice or heat sources."
    },
    {
      question: "Do you offer warranty on water damage repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Water Damage Repair",
      "description": "Emergency water damage repair services in Charlotte, NC. Professional cleaning and restoration for water-damaged electronics.",
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
      "areaServed": "Charlotte, NC",
      "offers": {
        "@type": "Offer",
        "availability": "InStock",
        "description": "Emergency water damage repair services"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Water Damage Repair Charlotte NC - Emergency Electronics Recovery"
        description="Emergency water damage repair in Charlotte, NC. Professional cleaning and restoration for water-damaged phones, laptops, and electronics. Call 704-246-7642!"
        keywords="water damage repair Charlotte, phone water damage Charlotte NC, laptop water damage repair, electronics water damage"
        canonicalUrl="/water-damage-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Timer className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Emergency Water Damage Service</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Water Damage Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Emergency water damage repair for phones, laptops, and electronics. 
                Professional cleaning and restoration services with fast turnaround.
              </p>

              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-300" />
                  <span className="text-red-200 font-bold">URGENT:</span>
                </div>
                <p className="text-red-100 text-sm">
                  Time is critical! Turn off your device immediately and bring it to us within 24 hours for best recovery chances.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency: 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Help Now</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Professional Cleaning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Droplets className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Water Damaged Device?</h3>
                  <p className="text-blue-200">We specialize in emergency recovery</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-teal-300">24 Hours</div>
                    <div className="text-sm text-teal-200">Critical Window</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Phone water damage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Laptop liquid spills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Tablet water damage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Gaming console spills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              EMERGENCY: What to Do Right Now
            </h2>
            <p className="text-lg text-red-700">
              Follow these steps immediately to maximize recovery chances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-red-800 mb-2 text-center">Turn Off Immediately</h3>
              <p className="text-red-700 text-sm text-center">
                Power down the device immediately. Do not try to turn it on or charge it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-red-800 mb-2 text-center">Remove Battery</h3>
              <p className="text-red-700 text-sm text-center">
                If possible, remove the battery to prevent further electrical damage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-red-800 mb-2 text-center">Don't Use Rice</h3>
              <p className="text-red-700 text-sm text-center">
                Avoid rice, heat sources, or hair dryers. These can cause more damage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-red-800 mb-2 text-center">Bring to Us</h3>
              <p className="text-red-700 text-sm text-center">
                Bring your device to us immediately for professional cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Types of Water Damage We Repair
            </h2>
            <p className="text-lg text-slate-600">
              Professional repair for all types of liquid damage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fresh Water</h3>
              <p className="text-slate-600 mb-4">
                Clean water spills, rain damage, or accidental drops in fresh water.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Highest recovery rate</li>
                <li>• Less corrosive damage</li>
                <li>• Faster repair process</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Salt Water</h3>
              <p className="text-slate-600 mb-4">
                Ocean water, pool water, or other salt water exposure.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• More challenging repair</li>
                <li>• Requires thorough cleaning</li>
                <li>• Time-sensitive treatment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Liquid Spills</h3>
              <p className="text-slate-600 mb-4">
                Coffee, soda, juice, or other liquid spills on devices.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Sticky residue removal</li>
                <li>• Component cleaning</li>
                <li>• Corrosion prevention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Water Damage Repair" 
        price="Call/Text For Quote"
        urgentText="Emergency Water Damage Service - Call Now!"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Water Damage Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Emergency Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover data from water-damaged storage devices</p>
            </a>

            <a href="/laptop-screen-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <AlertTriangle className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Screen Repair</h3>
              <p className="text-slate-600">Repair screens damaged by water exposure</p>
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

export default WaterDamageRepair;