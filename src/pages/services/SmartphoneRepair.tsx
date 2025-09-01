import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Smartphone, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Battery,
  Monitor,
  Zap
} from 'lucide-react';

const SmartphoneRepair = () => {
  const faqs = [
    {
      question: "How much does smartphone screen repair cost?",
      answer: "Smartphone screen repair costs vary by device model and screen type. We provide free diagnostics and detailed quotes for all smartphone screen replacements."
    },
    {
      question: "How long does smartphone repair take?",
      answer: "Most smartphone repairs are completed within 1-2 hours. Complex repairs may take same-day or next-day depending on parts availability."
    },
    {
      question: "What smartphone brands do you repair?",
      answer: "We repair all major smartphone brands including iPhone, Samsung Galaxy, Google Pixel, OnePlus, LG, and more."
    },
    {
      question: "Do you offer warranty on smartphone repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    },
    {
      question: "Can you repair water-damaged smartphones?",
      answer: "Yes, we specialize in water damage repair for smartphones. Bring your device in immediately for the best chance of recovery."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Smartphone Repair Services",
      "description": "Professional smartphone screen repair, battery replacement, and mobile device repair services in Charlotte, NC. Expert repair for iPhone, Samsung, and all major brands.",
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
        "description": "Professional smartphone repair services"
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
        title="Smartphone Repair Charlotte NC - iPhone & Android Screen Repair"
        description="Professional smartphone repair in Charlotte, NC. iPhone screen repair, Samsung Galaxy repair, battery replacement, and water damage repair. Same-day service available. Call 704-246-7642!"
        keywords="smartphone repair Charlotte, iPhone screen repair Charlotte NC, Samsung Galaxy repair, Android repair Charlotte, phone battery replacement"
        canonicalUrl="/smartphone-screen-repair-charlotte"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Smartphone className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Mobile Device Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smartphone Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional smartphone repair services in Charlotte, Matthews, and surrounding areas. 
                Expert iPhone and Android repair with same-day service available.
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
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Brands</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Cracked Phone Screen?</h3>
                  <p className="text-blue-200">We fix all smartphone issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">1-2 Hours</div>
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
                    <span className="text-white">Battery replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Water damage repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Charging port repair</span>
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
              Common Smartphone Problems We Fix
            </h2>
            <p className="text-lg text-slate-600">
              Expert repair for all smartphone issues in Charlotte, Matthews, and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cracked Screens</h3>
              <p className="text-slate-600 mb-4">
                Professional screen replacement for all smartphone models with quality parts.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• iPhone screen repair</li>
                <li>• Samsung Galaxy screens</li>
                <li>• Google Pixel displays</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Battery Issues</h3>
              <p className="text-slate-600 mb-4">
                Battery replacement and charging problems fixed with genuine parts.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Won't hold charge</li>
                <li>• Rapid battery drain</li>
                <li>• Charging port repair</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Water Damage</h3>
              <p className="text-slate-600 mb-4">
                Emergency water damage repair with professional cleaning and restoration.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Liquid spill damage</li>
                <li>• Dropped in water</li>
                <li>• Corrosion cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Smartphone Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Smartphone Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Smartphone Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Mobile Device Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/tablet-ipad-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Tablet & iPad Repair</h3>
              <p className="text-slate-600">Professional tablet screen repair and iPad service</p>
            </a>

            <a href="/water-damage-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Zap className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Water Damage Repair</h3>
              <p className="text-slate-600">Emergency water damage repair for all devices</p>
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

export default SmartphoneRepair;