import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Tablet, 
  Monitor, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Battery,
  Zap,
  Wrench
} from 'lucide-react';

const TabletIPadRepair = () => {
  const faqs = [
    {
      question: "How much does tablet screen repair cost?",
      answer: "Tablet screen repair costs vary by device model and screen type. We provide free diagnostics and detailed quotes for all tablet screen replacements."
    },
    {
      question: "How long does iPad repair take?",
      answer: "Most iPad and tablet repairs are completed within 2-4 hours. Complex repairs may take same-day or next-day depending on parts availability."
    },
    {
      question: "What tablet brands do you repair?",
      answer: "We repair all major tablet brands including iPad, Samsung Galaxy Tab, Microsoft Surface, Amazon Fire, and more."
    },
    {
      question: "Do you repair tablet charging ports?",
      answer: "Yes, we repair charging ports, headphone jacks, and other connection issues on all tablet models."
    },
    {
      question: "Can you fix tablet water damage?",
      answer: "Yes, we specialize in water damage repair for tablets and iPads. Bring your device in immediately for the best chance of recovery."
    },
    {
      question: "Do you offer warranty on tablet repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tablet and iPad Repair Services",
      "description": "Professional tablet screen repair, iPad repair, and mobile device services in Charlotte, NC. Expert repair for iPad, Samsung Galaxy Tab, Surface, and all major tablet brands.",
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
        "description": "Professional tablet and iPad repair services"
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
        title="Tablet & iPad Repair Charlotte NC - Professional Screen Repair"
        description="Professional tablet and iPad repair in Charlotte, NC. Screen replacement, battery repair, and water damage service. Same-day iPad repair available. Call 704-246-7642!"
        keywords="tablet repair Charlotte, iPad repair Charlotte NC, iPad screen repair, Samsung Galaxy Tab repair, tablet screen replacement, iPad battery replacement Charlotte"
        canonicalUrl="/tablet-ipad-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Tablet className="h-5 w-5 text-purple-300" />
                <span className="text-white font-medium">Tablet & iPad Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Tablet & iPad Repair
                <span className="block text-purple-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional tablet and iPad repair services in Charlotte, Matthews, and surrounding areas. 
                Expert screen replacement, battery repair, and water damage restoration.
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
                  <Tablet className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Broken Tablet Screen?</h3>
                  <p className="text-purple-200">We fix all tablet and iPad issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-300">Call/Text</div>
                    <div className="text-sm text-purple-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-300">2-4 Hours</div>
                    <div className="text-sm text-indigo-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">iPad screen replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Samsung Galaxy Tab repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Surface tablet repair</span>
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

      {/* Tablet Brands */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Tablet Brands We Repair
            </h2>
            <p className="text-lg text-slate-600">
              Professional repair for all major tablet manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Tablet className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">iPad</h3>
              <p className="text-xs text-slate-600 mt-1">All models</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Tablet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Samsung</h3>
              <p className="text-xs text-slate-600 mt-1">Galaxy Tab</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Tablet className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Microsoft</h3>
              <p className="text-xs text-slate-600 mt-1">Surface</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Tablet className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Amazon</h3>
              <p className="text-xs text-slate-600 mt-1">Fire Tablet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Tablet Repair Process
            </h2>
            <p className="text-lg text-slate-600">
              Professional, transparent tablet repair from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Free Diagnosis</h3>
              <p className="text-slate-600 text-sm">
                We thoroughly examine your tablet to identify all issues
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Detailed Quote</h3>
              <p className="text-slate-600 text-sm">
                We provide a transparent price quote with no hidden fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Repair</h3>
              <p className="text-slate-600 text-sm">
                Our certified technicians perform the repair with quality parts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Quality Testing</h3>
              <p className="text-slate-600 text-sm">
                We thoroughly test your tablet before returning it to you
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg" 
              alt="Professional technician repairing tablet device with precision tools - Expert iPad and tablet screen repair service" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg mb-8"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Tablet Repair Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Transparent pricing for common tablet and iPad repairs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">iPad Screen Repair</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-purple-600">Call/Text For Quote</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>iPad 7th-10th Gen: $129-$179</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>iPad Pro/Air: $199-$299</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>iPad Mini: $149-$199</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Samsung Tablet Repair</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-purple-600">Call/Text For Quote</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Galaxy Tab S Series: $149-$249</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Galaxy Tab A Series: $129-$179</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Other Samsung Models: Call for Quote</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Other Tablet Services</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-purple-600">Call/Text For Quote</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Battery Replacement: $79-$129</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Charging Port Repair: $89-$149</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Water Damage: Call for Quote</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>* Prices are estimates and may vary based on model and condition. Contact us for an exact quote.</p>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Tablet & iPad Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Tablet Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Tablet & iPad Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Mobile Device Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/smartphone-screen-repair-charlotte" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Smartphone Repair</h3>
              <p className="text-slate-600">iPhone and Android screen repair services</p>
            </a>

            <a href="/laptop-screen-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Wrench className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Laptop Screen Repair</h3>
              <p className="text-slate-600">Professional laptop screen replacement service</p>
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

export default TabletIPadRepair;