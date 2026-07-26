import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  HardDrive, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  TrendingUp,
  BarChart3,
  Link
} from 'lucide-react';

const SSDUpgrades = () => {
  const faqs = [
    {
      question: "How much does an SSD upgrade cost?",
      answer: "SSD upgrade costs depend on the storage capacity and laptop model. This includes the SSD drive and professional installation. Contact us for a detailed quote."
    },
    {
      question: "How much faster will my laptop be with an SSD?",
      answer: "Most laptops see 3-5x faster boot times and significantly improved overall performance. Programs load faster, file transfers are quicker, and multitasking is smoother."
    },
    {
      question: "Will I lose my data during the SSD upgrade?",
      answer: "No, we clone your existing hard drive to the new SSD, preserving all your files, programs, and settings. Your laptop will work exactly as before, just much faster."
    },
    {
      question: "How long does an SSD upgrade take?",
      answer: "Most SSD upgrades are completed within 1-2 business days, including data migration and testing to ensure everything works perfectly."
    },
    {
      question: "What size SSD should I choose?",
      answer: "We recommend at least 500GB for most users. If you store lots of photos, videos, or games, consider 1TB or larger. We'll help you choose the right size for your needs."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SSD Upgrade Installation",
      "description": "Professional SSD upgrade service in Charlotte, NC. Speed up your laptop with solid state drive installation and data migration.",
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
        "description": "Professional SSD upgrade installation service"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="SSD Upgrade Charlotte NC | KorTech Service"
        description="Professional SSD upgrade service in Charlotte, NC. Speed up your laptop 3-5x faster with solid state drive installation. Data migration included. Call 704-246-7642!"
        canonicalUrl="/ssd-upgrades"
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
                <Zap className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">Speed Up Your Laptop</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                SSD Upgrades
                <span className="block text-green-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Transform your slow laptop into a speed machine with professional SSD upgrade installation. 
                3-5x faster performance with data migration included.
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
                  <span>Data Migration Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>1-2 Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Faster Performance</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <HardDrive className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Slow Laptop?</h3>
                  <p className="text-green-200">Upgrade to SSD for instant speed boost</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-300">Call/Text</div>
                    <div className="text-sm text-green-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-teal-300">3-5x</div>
                    <div className="text-sm text-teal-200">Faster Speed</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Faster boot times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Quicker program loading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Better multitasking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">All data preserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Upgrade to SSD?
            </h2>
            <p className="text-lg text-slate-600">
              Transform your laptop's performance with solid state drive technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Lightning Fast Speed</h3>
              <p className="text-slate-600 mb-4">
                Boot your laptop in seconds instead of minutes. Programs open instantly.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 3-5x faster boot times</li>
                <li>• Instant program loading</li>
                <li>• Faster file transfers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Better Performance</h3>
              <p className="text-slate-600 mb-4">
                Smoother multitasking and improved overall system responsiveness.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Better multitasking</li>
                <li>• Reduced system lag</li>
                <li>• Improved gaming performance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">More Reliable</h3>
              <p className="text-slate-600 mb-4">
                SSDs have no moving parts, making them more durable and reliable.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• No moving parts to fail</li>
                <li>• Better shock resistance</li>
                <li>• Longer lifespan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Before vs After SSD Upgrade
            </h2>
            <p className="text-lg text-slate-600">
              See the dramatic performance improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Before: Traditional Hard Drive</h3>
              <div className="bg-slate-100 rounded-lg p-8 mb-4 text-center">
                <TrendingUp className="h-16 w-16 text-red-500 mx-auto mb-4 transform rotate-180" />
                <p className="text-slate-600">Slow Performance</p>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• 2-3 minute boot times</li>
                <li>• Programs take 10-30 seconds to open</li>
                <li>• Frequent system freezing</li>
                <li>• Slow file transfers</li>
                <li>• Poor multitasking performance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">After: SSD Upgrade</h3>
              <div className="bg-slate-100 rounded-lg p-8 mb-4 text-center">
                <Zap className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-slate-600">Lightning Fast</p>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• 15-30 second boot times</li>
                <li>• Programs open instantly</li>
                <li>• Smooth, responsive system</li>
                <li>• Fast file transfers</li>
                <li>• Excellent multitasking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="SSD Upgrade" 
        price="Call/Text For Quote"
        urgentText="Same-Day SSD Installation Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="SSD Upgrade FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Need other computer services? <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">View all our computer repair services</a> in Charlotte, NC.
            </p>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Computer Services
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Related Blog Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/best-ssd-upgrade-old-laptop-2025" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <Link className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Best SSD Upgrade for Old Laptop 2025</h4>
                  <p className="text-sm text-slate-600 mt-1">Transform your slow laptop into a speed machine with the right SSD upgrade.</p>
                </div>
              </a>
              <a href="/blog/signs-hard-drive-failing-data-recovery-tips" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <Link className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Signs Your Hard Drive is Failing</h4>
                  <p className="text-sm text-slate-600 mt-1">Learn the warning signs of hard drive failure and why an SSD upgrade might be your best option.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/laptop-screen-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <HardDrive className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Laptop Screen Repair</h3>
              <p className="text-slate-600">Professional laptop screen replacement service</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover data from failed hard drives and SSDs</p>
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

export default SSDUpgrades;