import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Tv, 
  Monitor, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Zap,
  Settings,
  Volume2
} from 'lucide-react';

const SmartTVRepair = () => {
  const faqs = [
    {
      question: "How much does smart TV repair cost?",
      answer: "Smart TV repair costs vary by brand, model, and issue type. We provide free diagnostics and detailed quotes for all TV repair services."
    },
    {
      question: "What TV problems can you fix?",
      answer: "We repair screen issues, power problems, audio issues, smart TV connectivity, HDMI ports, and motherboard problems on all major TV brands."
    },
    {
      question: "How long does TV repair take?",
      answer: "Most TV repairs are completed within 2-5 business days depending on parts availability and complexity of the repair."
    },
    {
      question: "Do you repair all TV brands?",
      answer: "Yes, we repair all major TV brands including Samsung, LG, Sony, TCL, Hisense, Vizio, and more."
    },
    {
      question: "Is it worth repairing an older TV?",
      answer: "We'll provide an honest assessment of repair costs versus replacement value to help you make the best decision for your situation."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Smart TV Repair Services",
      "description": "Professional smart TV repair, television screen repair, and home theater services in Charlotte, NC. Expert repair for Samsung, LG, Sony, and all major TV brands.",
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
      "areaServed": ["Charlotte, NC", "Matthews, NC", "Indian Trail, NC", "Mint Hill, NC", "Monroe, NC"],
      "offers": {
        "@type": "Offer",
        "availability": "InStock",
        "description": "Professional smart TV and television repair services"
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
        title="Smart TV Repair Charlotte NC - Television Screen & Audio Repair"
        description="Professional smart TV repair in Charlotte, NC. Samsung, LG, Sony TV repair, screen replacement, audio issues, and smart TV connectivity. Call 704-246-7642!"
        keywords="smart TV repair Charlotte, TV repair Charlotte NC, Samsung TV repair, LG TV repair, television screen repair, TV audio repair"
        canonicalUrl="/smart-tv-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Tv className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Smart TV Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart TV Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional smart TV and television repair services in Charlotte, Matthews, and surrounding areas. 
                Expert repair for all major TV brands with home theater system support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free Diagnosis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All TV Brands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Home Service</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Tv className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">TV Not Working?</h3>
                  <p className="text-blue-200">We fix all smart TV issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-slate-300">2-5 Days</div>
                    <div className="text-sm text-slate-200">Typical Repair</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Screen repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Power issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Audio problems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Smart TV connectivity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Common Smart TV Problems We Fix
            </h2>
            <p className="text-lg text-slate-600">
              Expert repair for all smart TV and home theater issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Screen Issues</h3>
              <p className="text-slate-600 mb-4">
                Cracked screens, dead pixels, lines, and display problems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Cracked or broken screens</li>
                <li>• Dead pixels and lines</li>
                <li>• Dim or flickering display</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Power Problems</h3>
              <p className="text-slate-600 mb-4">
                Won't turn on, power cycling, and electrical issues.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Won't power on</li>
                <li>• Turns on then off</li>
                <li>• Power supply issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Volume2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Audio Issues</h3>
              <p className="text-slate-600 mb-4">
                No sound, distorted audio, and speaker problems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• No audio output</li>
                <li>• Distorted sound</li>
                <li>• Speaker replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Smart TV Repair" 
        price="Call/Text For Quote"
        urgentText="Professional TV Repair Service Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Smart TV Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Home Electronics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/printer-router-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Settings className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Printer & Router Repair</h3>
              <p className="text-slate-600">Network troubleshooting and printer repair services</p>
            </a>

            <a href="/appliance-electronics-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Zap className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Appliance Electronics</h3>
              <p className="text-slate-600">Microwave, thermostat, and appliance repair</p>
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

export default SmartTVRepair;