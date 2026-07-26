import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Zap,
  Cpu,
  Thermometer, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Settings,
  Wrench,
  AlertTriangle
} from 'lucide-react';

const ApplianceElectronicsRepair = () => {
  const faqs = [
    {
      question: "What types of appliance electronics do you repair?",
      answer: "We repair electronic components in microwaves, thermostats, smart home devices, small kitchen appliances, and other household electronics with circuit board issues."
    },
    {
      question: "How much does appliance electronics repair cost?",
      answer: "Appliance electronics repair costs vary by device type and complexity. We provide free diagnostics and detailed quotes for all appliance repair services."
    },
    {
      question: "Is it worth repairing appliance electronics?",
      answer: "We'll provide an honest assessment of repair costs versus replacement value to help you make the best decision for your specific appliance and situation."
    },
    {
      question: "How long does appliance electronics repair take?",
      answer: "Most appliance electronics repairs are completed within 3-7 business days depending on parts availability and complexity."
    },
    {
      question: "Do you offer warranty on appliance electronics repair?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Appliance Electronics Repair Services",
      "description": "Professional appliance electronics repair services in Charlotte, NC. Expert repair for microwaves, thermostats, smart home devices, and small appliances.",
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
        "description": "Professional appliance electronics repair services"
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
        title="Appliance Electronics Repair Charlotte NC - Microwave & Thermostat"
        description="Professional appliance electronics repair in Charlotte, NC. Microwave, thermostat, smart home device, and small appliance repair services. Call 704-246-7642!"
        keywords="appliance electronics repair Charlotte, microwave repair Charlotte NC, thermostat repair, smart home device repair, small appliance repair"
        canonicalUrl="/appliance-electronics-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-5 w-5 text-orange-300" />
                <span className="text-white font-medium">Appliance Electronics Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Appliance Electronics Repair
                <span className="block text-orange-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional appliance electronics repair services in Charlotte, Matthews, and surrounding areas. 
                Expert repair for microwaves, thermostats, smart home devices, and small appliances.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Quality Parts</span>
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
                  <Settings className="h-16 w-16 text-orange-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Appliance Not Working?</h3>
                  <p className="text-orange-200">We fix electronic components</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-orange-300">Call/Text</div>
                    <div className="text-sm text-orange-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-300">3-7 Days</div>
                    <div className="text-sm text-red-200">Typical Repair</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Microwave electronics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Thermostat repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Smart home devices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Small appliance repair</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliance Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Appliance Electronics We Repair
            </h2>
            <p className="text-lg text-slate-600">
              Professional repair for a wide range of household electronics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Microwave Electronics</h3>
              <p className="text-slate-600 mb-4">
                Repair of microwave control boards, displays, and electronic components.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Control panel repair</li>
                <li>• Display issues</li>
                <li>• Sensor problems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Thermostat Repair</h3>
              <p className="text-slate-600 mb-4">
                Fix for smart thermostats and temperature control systems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Smart thermostat issues</li>
                <li>• Display problems</li>
                <li>• Sensor calibration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Smart Home Devices</h3>
              <p className="text-slate-600 mb-4">
                Repair of smart home hubs, controllers, and automation devices.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Smart hub repair</li>
                <li>• Controller issues</li>
                <li>• Connectivity problems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Appliance Electronics Repair" 
        price="Call/Text For Quote"
        urgentText="Expert Appliance Electronics Service"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Appliance Electronics Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Electronics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/pcb-micro-soldering" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Cpu className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">PCB Micro-Soldering</h3>
              <p className="text-slate-600">Professional circuit board repair services</p>
            </a>

            <a href="/smart-tv-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Zap className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Smart TV Repair</h3>
              <p className="text-slate-600">Television and home theater system repair</p>
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

export default ApplianceElectronicsRepair;