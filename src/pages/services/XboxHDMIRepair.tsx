import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Gamepad2, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  AlertTriangle,
  Zap
} from 'lucide-react';

const XboxHDMIRepair = () => {
  const faqs = [
    {
      question: "How much does Xbox HDMI repair cost?",
      answer: "Xbox HDMI port repair costs vary for Xbox Series X/S and Xbox One consoles. We provide a free diagnostic to determine the exact issue and provide you with a detailed quote."
    },
    {
      question: "Do you repair both Xbox Series X/S and Xbox One?",
      answer: "Yes, we repair HDMI ports on all Xbox models including Xbox Series X, Xbox Series S, Xbox One X, Xbox One S, and original Xbox One."
    },
    {
      question: "What are signs of Xbox HDMI port damage?",
      answer: "Common signs include no display output, loose HDMI connection, flickering screen, or the HDMI cable not staying securely connected."
    },
    {
      question: "How long does Xbox HDMI repair take?",
      answer: "Most Xbox HDMI repairs are completed within 1-3 business days. Same-day service may be available depending on our current workload."
    },
    {
      question: "Is there a warranty on Xbox HDMI repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Xbox HDMI Port Repair",
      "description": "Professional Xbox Series X/S and Xbox One HDMI port repair service in Charlotte, NC. Expert gaming console repair with warranty.",
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
        "description": "Professional Xbox HDMI port repair service"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Xbox HDMI Repair Charlotte NC - Series X/S & Xbox One HDMI Fix"
        description="Professional Xbox HDMI port repair in Charlotte, NC. Xbox Series X/S and Xbox One HDMI repair. Same-day service, 14-day limited warranty. Call 704-246-7642!"
        keywords="Xbox HDMI repair Charlotte, Xbox Series X repair, Xbox One HDMI fix, gaming console repair Charlotte NC"
        canonicalUrl="/xbox-hdmi-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Gamepad2 className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">Xbox Repair Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Xbox HDMI Repair
                <span className="block text-green-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Expert Xbox Series X/S and Xbox One HDMI port repair service. 
                Fast turnaround, quality parts, and professional technicians.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Xbox Models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Repair</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Gamepad2 className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Xbox HDMI Problems?</h3>
                  <p className="text-green-200">We repair all Xbox models</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-300">Call/Text</div>
                    <div className="text-sm text-green-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">1-3 Days</div>
                    <div className="text-sm text-blue-200">Turnaround</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Xbox Series X/S</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Xbox One X/S</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Original Xbox One</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">All HDMI issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Xbox Models We Repair */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Xbox Models We Repair
            </h2>
            <p className="text-lg text-slate-600">
              Professional HDMI repair for all Xbox console generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Xbox Series X</h3>
              <p className="text-sm text-slate-600">Latest generation 4K gaming console HDMI repair</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Xbox Series S</h3>
              <p className="text-sm text-slate-600">Compact next-gen console HDMI port repair</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Xbox One X/S</h3>
              <p className="text-sm text-slate-600">Previous generation enhanced console repair</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Xbox One</h3>
              <p className="text-sm text-slate-600">Original Xbox One console HDMI repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Xbox HDMI Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Xbox Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Xbox HDMI Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Gaming Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/ps5-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">PS5 HDMI Repair</h3>
              <p className="text-slate-600">Professional PlayStation 5 HDMI port repair service</p>
            </a>

            <a href="/custom-gaming-pc" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Gaming PC</h3>
              <p className="text-slate-600">Build your dream gaming PC with expert assembly</p>
            </a>

            <a href="/services" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">All Services</h3>
              <p className="text-slate-600">View our complete range of repair services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XboxHDMIRepair;