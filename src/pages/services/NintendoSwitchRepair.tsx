import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Gamepad2, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  AlertTriangle,
  Zap
} from 'lucide-react';

const NintendoSwitchRepair = () => {
  const faqs = [
    {
      question: "How much does Nintendo Switch repair cost?",
      answer: "Nintendo Switch repair costs vary depending on the issue. We provide a free diagnostic to determine the exact problem and provide you with a detailed quote."
    },
    {
      question: "What Nintendo Switch problems can you fix?",
      answer: "We repair all Nintendo Switch issues including Joy-Con drift, screen replacement, charging port repair, battery replacement, and motherboard problems."
    },
    {
      question: "How long does Nintendo Switch repair take?",
      answer: "Most Nintendo Switch repairs are completed within 1-3 business days. Simple repairs like Joy-Con replacement may be completed same-day."
    },
    {
      question: "Do you repair Nintendo Switch Lite and OLED models?",
      answer: "Yes, we repair all Nintendo Switch models including the original Switch, Switch Lite, and Switch OLED."
    },
    {
      question: "Is there a warranty on Nintendo Switch repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Nintendo Switch Repair Services",
      "description": "Professional Nintendo Switch repair services in Charlotte, NC. Expert Joy-Con drift fix, screen replacement, and charging port repair for all Switch models.",
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
        "description": "Professional Nintendo Switch repair services"
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
        title="Nintendo Switch Repair Charlotte NC - Joy-Con Drift & Screen Fix"
        description="Professional Nintendo Switch repair in Charlotte, NC. Joy-Con drift fix, screen replacement, and charging port repair. All Switch models. Call 704-246-7642!"
        keywords="Nintendo Switch repair Charlotte, Joy-Con drift fix Charlotte NC, Switch screen repair, Switch charging port repair, Nintendo Switch Lite repair"
        canonicalUrl="/nintendo-switch-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Gamepad2 className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Nintendo Switch Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Nintendo Switch Repair
                <span className="block text-red-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional Nintendo Switch repair services in Charlotte, Matthews, and surrounding areas. 
                Expert Joy-Con drift fix, screen replacement, and charging port repair for all Switch models.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Switch Models</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Gamepad2 className="h-16 w-16 text-red-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Switch Not Working?</h3>
                  <p className="text-red-200">We fix all Nintendo Switch issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-red-300">Call/Text</div>
                    <div className="text-sm text-red-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">1-3 Days</div>
                    <div className="text-sm text-blue-200">Typical Repair</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Joy-Con drift repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Screen replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Charging port repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Battery replacement</span>
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
              Common Nintendo Switch Problems We Fix
            </h2>
            <p className="text-lg text-slate-600">
              Expert repair for all Nintendo Switch issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Joy-Con Drift</h3>
              <p className="text-slate-600 mb-4">
                Fix for Joy-Con controller drift and button issues.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Joystick drift repair</li>
                <li>• Button replacement</li>
                <li>• Controller calibration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Charging Issues</h3>
              <p className="text-slate-600 mb-4">
                Repair for charging port damage and battery problems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Charging port replacement</li>
                <li>• Battery replacement</li>
                <li>• Power management issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Screen Problems</h3>
              <p className="text-slate-600 mb-4">
                Fix for cracked screens, display issues, and touch problems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Screen replacement</li>
                <li>• Display issues</li>
                <li>• Touch screen repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Nintendo Switch Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Switch Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Nintendo Switch Repair FAQ" />

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
              <p className="text-slate-600">Professional PlayStation 5 HDMI port repair</p>
            </a>

            <a href="/xbox-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Xbox HDMI Repair</h3>
              <p className="text-slate-600">Xbox Series X/S and Xbox One HDMI repair</p>
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

export default NintendoSwitchRepair;