import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  HardDrive, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  MapPin,
  AlertTriangle,
  Database,
  Zap,
  FileText,
  Search,
  Link
} from 'lucide-react';

const DataRecovery = () => {
  const faqs = [
    {
      question: "How much does data recovery cost?",
      answer: "Data recovery costs vary based on the type of failure and amount of data. We provide free diagnostics and detailed quotes for all data recovery services."
    },
    {
      question: "What types of data can you recover?",
      answer: "We can recover documents, photos, videos, emails, databases, and other files from hard drives, SSDs, USB drives, memory cards, and RAID systems."
    },
    {
      question: "How long does data recovery take?",
      answer: "Simple software-based recoveries take 1-3 days. Complex hardware recoveries requiring cleanroom work can take 5-10 business days depending on the extent of damage."
    },
    {
      question: "What is your success rate for data recovery?",
      answer: "Our success rate is over 95% for most common data loss scenarios. Even in severe cases like fire or water damage, we often recover significant portions of data."
    },
    {
      question: "Do you offer emergency data recovery services?",
      answer: "Yes, we provide emergency data recovery services for critical business data. Contact us immediately for urgent situations - we can often prioritize your case."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Data Recovery Services",
      "description": "Professional data recovery services in Charlotte, NC. Recover lost data from failed hard drives, SSDs, and storage devices.",
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
        "description": "Professional data recovery services"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Data Recovery Charlotte NC | KorTech Service"
        description="Expert data recovery services in Charlotte, NC. Recover lost files from failed hard drives, SSDs, storage devices. 95% success rate. Call 704-246-7642!"
        canonicalUrl="/data-recovery"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Charlotte Local Data Recovery</span>
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Database className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Emergency Data Recovery Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Data Recovery Services
                <span className="block text-red-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional data recovery from failed hard drives, SSDs, and storage devices at our Charlotte location. 
                95% success rate with walk-in diagnostics and emergency services available. Serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Visit Our Shop: 704-246-7642</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Schedule Visit</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Walk-In Diagnostics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Local Charlotte Shop</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <HardDrive className="h-16 w-16 text-red-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Lost Important Data?</h3>
                  <p className="text-red-200">Visit our Charlotte shop for professional recovery</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-red-300">Walk-In</div>
                    <div className="text-sm text-red-200">Diagnostics</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-300">95%</div>
                    <div className="text-sm text-orange-200">Success Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">In-shop recovery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">All storage types</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Emergency service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Free evaluation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Loss Scenarios */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Data Loss Scenarios We Handle
            </h2>
            <p className="text-lg text-slate-600">
              Professional data recovery for all types of storage failures at our Charlotte location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hardware Failure</h3>
              <p className="text-slate-600 mb-4">
                Mechanical failures, head crashes, and electronic component failures.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Clicking or grinding sounds</li>
                <li>• Drive not recognized</li>
                <li>• Slow performance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Accidental Deletion</h3>
              <p className="text-slate-600 mb-4">
                Accidentally deleted files, formatted drives, or emptied recycle bin.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Deleted important files</li>
                <li>• Formatted hard drive</li>
                <li>• Partition loss</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">System Corruption</h3>
              <p className="text-slate-600 mb-4">
                Operating system corruption, virus damage, or software conflicts.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Boot failures</li>
                <li>• Corrupted files</li>
                <li>• System crashes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Data Recovery" 
        price="Call/Text For Quote"
        urgentText="Emergency Data Recovery Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Data Recovery FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Looking for other services? <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">Browse all our computer repair services</a> in Charlotte, NC.
            </p>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Data Services
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Related Blog Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/signs-hard-drive-failing-data-recovery-tips" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <Link className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Signs Your Hard Drive is Failing - Data Recovery Tips</h4>
                  <p className="text-sm text-slate-600 mt-1">Learn the warning signs of hard drive failure and emergency data recovery steps.</p>
                </div>
              </a>
              <a href="/blog/data-recovery-charlotte-2025" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <Link className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Data Recovery Services in Charlotte - How to Recover Lost Files</h4>
                  <p className="text-sm text-slate-600 mt-1">Expert guide to data recovery options in Charlotte, NC for failed drives and storage devices.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/ssd-upgrades" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <HardDrive className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">SSD Upgrades</h3>
              <p className="text-slate-600">Upgrade to faster, more reliable SSD storage</p>
            </a>

            <a href="/virus-malware-removal" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Virus Removal</h3>
              <p className="text-slate-600">Remove malware that may have corrupted your data</p>
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

export default DataRecovery;