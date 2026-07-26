import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Monitor, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Gamepad2,
  Cpu,
  HardDrive,
  MemoryStick
} from 'lucide-react';

const CustomGamingPC = () => {
  const faqs = [
    {
      question: "How much does a custom gaming PC cost?",
      answer: "Custom gaming PC costs vary based on your performance needs and component selection. We work with your budget to build the best gaming PC for your needs. Contact us for a detailed quote."
    },
    {
      question: "How long does it take to build a custom gaming PC?",
      answer: "Most custom gaming PC builds are completed within 3-5 business days after parts arrive. Complex builds with custom cooling may take up to a week."
    },
    {
      question: "Do you provide warranty on custom gaming PCs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    },
    {
      question: "Can you help me choose the right components?",
      answer: "Absolutely! Our experts will recommend the best components for your gaming needs, budget, and preferred games. We stay current with the latest hardware releases."
    },
    {
      question: "Do you offer gaming PC upgrades?",
      answer: "Yes, we can upgrade existing gaming PCs with new graphics cards, more RAM, faster storage, better cooling, and other performance improvements."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Gaming PC Build",
      "description": "Professional custom gaming PC building service in Charlotte, NC. Expert assembly, component selection, and optimization.",
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
        "description": "Professional custom gaming PC building service"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Custom Gaming PC Build Charlotte NC - Professional PC Assembly"
        description="Expert custom gaming PC building in Charlotte, NC. Professional assembly, component selection, and optimization. Gaming PCs from $800. Call 704-246-7642!"
        keywords="custom gaming PC Charlotte, gaming PC build Charlotte NC, gaming computer assembly, PC builder Charlotte"
        canonicalUrl="/custom-gaming-pc"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Gamepad2 className="h-5 w-5 text-purple-300" />
                <span className="text-white font-medium">Gaming PC Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Custom Gaming PC Build
                <span className="block text-purple-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional custom gaming PC building service. Expert component selection, 
                assembly, and optimization for maximum gaming performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Assembly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Component Selection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Warranty</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dream Gaming PC?</h3>
                  <p className="text-purple-200">We build custom PCs for every budget</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-300">Call/Text</div>
                    <div className="text-sm text-purple-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">3-5 Days</div>
                    <div className="text-sm text-blue-200">Build Time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Component selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Professional assembly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Performance optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Testing & support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Gaming PC Build Categories
            </h2>
            <p className="text-lg text-slate-600">
              Custom gaming PCs for every budget and performance level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Entry Level Gaming</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Budget-Friendly</div>
              <p className="text-slate-600 mb-4">
                Perfect for 1080p gaming at high settings in most modern games.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AMD Ryzen 5 or Intel i5</li>
                <li>• GTX 1660 Super or RTX 3060</li>
                <li>• 16GB DDR4 RAM</li>
                <li>• 500GB SSD</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">High Performance</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">High-Performance</div>
              <p className="text-slate-600 mb-4">
                Excellent for 1440p gaming and streaming with high frame rates.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AMD Ryzen 7 or Intel i7</li>
                <li>• RTX 3070 or RTX 4060 Ti</li>
                <li>• 32GB DDR4/DDR5 RAM</li>
                <li>• 1TB NVMe SSD</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Enthusiast Build</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">Enthusiast-Level</div>
              <p className="text-slate-600 mb-4">
                Ultimate performance for 4K gaming, VR, and content creation.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• AMD Ryzen 9 or Intel i9</li>
                <li>• RTX 4070 Ti or RTX 4080</li>
                <li>• 32GB+ DDR5 RAM</li>
                <li>• 2TB+ NVMe SSD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Custom Gaming PC Build" 
        price="Call/Text For Quote"
        urgentText="Expert Gaming PC Assembly Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Custom Gaming PC FAQ" />

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
              <h3 className="text-xl font-bold text-slate-800 mb-2">Console Repair</h3>
              <p className="text-slate-600">PS5, Xbox, and gaming console repair services</p>
            </a>

            <a href="/ssd-upgrades" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <HardDrive className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">SSD Upgrades</h3>
              <p className="text-slate-600">Upgrade your gaming PC with faster storage</p>
            </a>

            <a href="/services" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">All Services</h3>
              <p className="text-slate-600">View our complete range of tech services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomGamingPC;