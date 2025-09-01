import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Settings, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  Users,
  Monitor,
  Wifi,
  Database,
  Zap,
  MapPin,
  Building
} from 'lucide-react';

const BusinessITSupport = () => {
  const faqs = [
    {
      question: "What business IT support services do you provide?",
      answer: "We provide comprehensive business IT support including on-site network setup, computer maintenance, server support, and ongoing technical assistance for businesses in Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne."
    },
    {
      question: "Do you offer on-site business support?",
      answer: "Yes, we provide on-site IT support for businesses throughout the Charlotte metro area. Our technicians come to your location for network setup, maintenance, and troubleshooting."
    },
    {
      question: "What are your business IT support response times?",
      answer: "We offer same-day response for urgent business issues and typically respond to support requests within 2-4 hours during business hours for our local Charlotte area clients."
    },
    {
      question: "Do you support both Windows and Mac business environments?",
      answer: "Yes, our technicians are certified to support both Windows PCs and Mac systems, as well as various mobile devices and network equipment for businesses."
    },
    {
      question: "Can you help with business network setup in Charlotte?",
      answer: "Absolutely! We specialize in business network design, installation, and configuration including Wi-Fi setup, security implementation, and ongoing network maintenance for Charlotte area businesses."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Business IT Support Services",
      "description": "Professional business IT support and technical services in Charlotte, NC. On-site network setup, computer maintenance, and ongoing IT support for local businesses.",
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
        "description": "Professional business IT support and technical services"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Business IT Support Charlotte NC - On-Site Network & Computer Support"
        description="Professional business IT support services in Charlotte, NC. On-site network setup, computer maintenance, and ongoing IT support for local businesses. Call 704-246-7642!"
        keywords="business IT support Charlotte, on-site IT support Charlotte NC, network setup Charlotte, business computer support, IT services Charlotte"
        canonicalUrl="/business-it-support"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Local Business IT Support</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Business IT Support
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional business IT support and technical services for Charlotte area businesses. 
                On-site network setup, computer maintenance, and ongoing support from local technicians serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
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
                  <span>Schedule Consultation</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>On-Site Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Local Charlotte Team</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Settings className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Need Business IT Support?</h3>
                  <p className="text-blue-200">Local Charlotte technicians for your business</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">On-Site</div>
                    <div className="text-sm text-blue-200">Service</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-300">Same Day</div>
                    <div className="text-sm text-indigo-200">Response</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Network setup & configuration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Computer maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Server support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Business consulting</span>
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
              Business IT Services We Provide
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive technical support for Charlotte area businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">On-Site Network Setup</h3>
              <p className="text-slate-600 mb-4">
                Professional network installation and configuration at your Charlotte business location.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Wi-Fi network setup</li>
                <li>• Router configuration</li>
                <li>• Network security</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Computer Maintenance</h3>
              <p className="text-slate-600 mb-4">
                Regular on-site maintenance to keep your business systems running smoothly.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• System optimization</li>
                <li>• Software updates</li>
                <li>• Performance tuning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Security Services</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive security solutions to protect your business data and systems.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Antivirus installation</li>
                <li>• Firewall configuration</li>
                <li>• Security audits</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Data Backup Solutions</h3>
              <p className="text-slate-600 mb-4">
                Automated backup systems to protect your important business data.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Cloud backup setup</li>
                <li>• Local backup systems</li>
                <li>• Disaster recovery planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Server Support</h3>
              <p className="text-slate-600 mb-4">
                Professional server maintenance and support for your business infrastructure.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Server maintenance</li>
                <li>• Performance monitoring</li>
                <li>• Troubleshooting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Business IT Consulting</h3>
              <p className="text-slate-600 mb-4">
                Strategic IT planning and consulting for growing Charlotte businesses.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Technology planning</li>
                <li>• System recommendations</li>
                <li>• IT budget planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Charlotte Area Business IT Support
            </h2>
            <p className="text-lg text-slate-600">
              On-site IT support for businesses throughout the Charlotte metro area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800">Charlotte</h3>
              <p className="text-sm text-slate-600">Uptown, South End, NoDa</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800">Matthews</h3>
              <p className="text-sm text-slate-600">Business district</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800">Mint Hill</h3>
              <p className="text-sm text-slate-600">Commercial areas</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800">Pineville</h3>
              <p className="text-sm text-slate-600">Business parks</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800">Ballantyne</h3>
              <p className="text-sm text-slate-600">Corporate corridor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Business IT Support" 
        price="Call for Consultation"
        urgentText="Same-Day On-Site Service Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Business IT Support FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Business Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/virus-malware-removal" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Security Services</h3>
              <p className="text-slate-600">Business virus removal and security solutions</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Database className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Business data recovery and backup solutions</p>
            </a>

            <a href="/services" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">All Services</h3>
              <p className="text-slate-600">View our complete range of business services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessITSupport;