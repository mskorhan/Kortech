import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Cpu, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Settings,
  Wrench,
  AlertTriangle
} from 'lucide-react';

const PCBMicroSoldering = () => {
  const faqs = [
    {
      question: "What is PCB-level micro-soldering?",
      answer: "PCB-level micro-soldering is the precise repair of electronic components on circuit boards using specialized equipment. It involves replacing damaged chips, connectors, and components at the microscopic level."
    },
    {
      question: "What devices can benefit from micro-soldering repair?",
      answer: "Smartphones, tablets, laptops, gaming consoles, motherboards, and other electronic devices with damaged circuit board components can be repaired using micro-soldering techniques."
    },
    {
      question: "How much does micro-soldering repair cost?",
      answer: "Micro-soldering repair costs vary based on device type and complexity of the repair. We provide detailed quotes after diagnostic evaluation of your device."
    },
    {
      question: "How long does micro-soldering take?",
      answer: "Micro-soldering repairs typically take 3-7 business days depending on the complexity of the repair and parts availability."
    },
    {
      question: "Is micro-soldering worth it for older devices?",
      answer: "We'll provide an honest assessment of repair costs versus replacement value to help you make the best decision for your specific device and situation."
    },
    {
      question: "Do you offer warranty on micro-soldering repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PCB Micro-Soldering Repair Services",
      "description": "Professional PCB-level micro-soldering and electronics rework services in Charlotte, NC. Expert circuit board repair for smartphones, laptops, and electronic devices.",
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
        "description": "Professional PCB micro-soldering and electronics repair services"
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
        title="PCB Micro-Soldering Repair Charlotte NC - Electronics Rework"
        description="Professional PCB-level micro-soldering and electronics rework in Charlotte, NC. Circuit board repair for smartphones, laptops, and electronic devices. Call 704-246-7642!"
        keywords="PCB micro-soldering Charlotte, electronics rework Charlotte NC, circuit board repair, micro-soldering service, motherboard repair"
        canonicalUrl="/pcb-micro-soldering"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Cpu className="h-5 w-5 text-indigo-300" />
                <span className="text-white font-medium">Micro-Soldering Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                PCB Micro-Soldering
                <span className="block text-indigo-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional PCB-level micro-soldering and electronics rework services in Charlotte, Matthews, and surrounding areas. 
                Expert circuit board repair for complex electronic devices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
                  <span>Precision Equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Cpu className="h-16 w-16 text-indigo-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Circuit Board Damage?</h3>
                  <p className="text-indigo-200">We perform precision micro-soldering</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-indigo-300">Call/Text</div>
                    <div className="text-sm text-indigo-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">3-7 Days</div>
                    <div className="text-sm text-purple-200">Typical Repair</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Motherboard repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Component replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Circuit board rework</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Precision soldering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Soldering Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Micro-Soldering Services
            </h2>
            <p className="text-lg text-slate-600">
              Professional PCB-level repair for all electronic devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Motherboard Repair</h3>
              <p className="text-slate-600 mb-4">
                Precision repair of damaged laptop and device motherboards.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Laptop motherboards</li>
                <li>• Phone logic boards</li>
                <li>• Gaming console boards</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Component Replacement</h3>
              <p className="text-slate-600 mb-4">
                Micro-soldering replacement of damaged electronic components.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• IC chip replacement</li>
                <li>• Connector repair</li>
                <li>• Resistor/capacitor replacement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Port Repair</h3>
              <p className="text-slate-600 mb-4">
                Precision repair of damaged ports and connectors.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Charging port repair</li>
                <li>• HDMI port replacement</li>
                <li>• USB port repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="PCB Micro-Soldering" 
        price="Call/Text For Quote"
        urgentText="Expert Electronics Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="PCB Micro-Soldering FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Electronics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/ps5-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Settings className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Gaming Console Repair</h3>
              <p className="text-slate-600">PS5, Xbox, and Nintendo Switch repair</p>
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

export default PCBMicroSoldering;