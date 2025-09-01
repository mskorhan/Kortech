import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Printer, 
  Wifi, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Settings,
  Network,
  AlertTriangle
} from 'lucide-react';

const PrinterRouterRepair = () => {
  const faqs = [
    {
      question: "How much does printer repair cost?",
      answer: "Printer repair costs vary by brand, model, and issue type. We provide free diagnostics and detailed quotes for all printer repair services."
    },
    {
      question: "Can you fix network connectivity issues?",
      answer: "Yes, we specialize in network troubleshooting, router configuration, Wi-Fi setup, and connectivity problems for homes and businesses."
    },
    {
      question: "What printer brands do you service?",
      answer: "We service all major printer brands including HP, Canon, Epson, Brother, Lexmark, and more."
    },
    {
      question: "Do you provide on-site network support?",
      answer: "Yes, we offer on-site network setup and troubleshooting services for businesses and residential customers in Charlotte and surrounding areas."
    },
    {
      question: "How long does network setup take?",
      answer: "Basic network setup typically takes 1-2 hours. Complex business networks may require additional time depending on requirements."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Printer and Router Repair Services",
      "description": "Professional printer repair and network troubleshooting services in Charlotte, NC. Expert router setup, Wi-Fi configuration, and printer maintenance.",
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
        "description": "Professional printer and network repair services"
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
        title="Printer & Router Repair Charlotte NC - Network Troubleshooting"
        description="Professional printer repair and network troubleshooting in Charlotte, NC. Router setup, Wi-Fi configuration, and printer maintenance. Call 704-246-7642!"
        keywords="printer repair Charlotte, router repair Charlotte NC, network troubleshooting, Wi-Fi setup Charlotte, printer maintenance"
        canonicalUrl="/printer-router-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Network className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">Network & Printer Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Printer & Router Repair
                <span className="block text-green-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional printer repair and network troubleshooting services in Charlotte, Matthews, and surrounding areas. 
                Expert router setup, Wi-Fi configuration, and printer maintenance.
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
                  <span>On-Site Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Brands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Business & Home</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Settings className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Network or Printer Issues?</h3>
                  <p className="text-green-200">We fix all connectivity problems</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-300">Call/Text</div>
                    <div className="text-sm text-green-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-teal-300">Same Day</div>
                    <div className="text-sm text-teal-200">Service</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Printer repair & maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Router setup & configuration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Wi-Fi troubleshooting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Network security setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Printer & Network Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive printer repair and network support services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Printer className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Printer Repair</h3>
              <p className="text-slate-600 mb-4">
                Complete printer repair and maintenance for all major brands.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Paper jam fixes</li>
                <li>• Print quality issues</li>
                <li>• Cartridge problems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Wi-Fi Setup</h3>
              <p className="text-slate-600 mb-4">
                Professional Wi-Fi network setup and optimization.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Router configuration</li>
                <li>• Network optimization</li>
                <li>• Range extension</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Network Troubleshooting</h3>
              <p className="text-slate-600 mb-4">
                Diagnose and fix network connectivity problems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Connection issues</li>
                <li>• Slow internet speeds</li>
                <li>• Network security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Printer & Router Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Network Support Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Printer & Router Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related IT Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/it-support" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Settings className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">IT Support</h3>
              <p className="text-slate-600">Comprehensive IT support for businesses</p>
            </a>

            <a href="/virus-malware-removal" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Security Services</h3>
              <p className="text-slate-600">Virus removal and security solutions</p>
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

export default PrinterRouterRepair;