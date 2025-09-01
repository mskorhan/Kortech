import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Gamepad2, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  AlertTriangle,
  Zap,
  Link as LinkIcon
} from 'lucide-react';

const PS5HDMIRepair = () => {
  const faqs = [
    {
      question: "How much does PS5 HDMI repair cost?",
      answer: "PS5 HDMI port repair costs vary depending on the extent of damage. We provide a free diagnostic to determine the exact issue and provide you with a detailed quote before any work begins."
    },
    {
      question: "How long does PS5 HDMI repair take?",
      answer: "Most PS5 HDMI repairs are completed within 1-3 business days. Same-day service may be available for urgent repairs depending on our current workload."
    },
    {
      question: "What causes PS5 HDMI port damage?",
      answer: "Common causes include forceful cable insertion/removal, bent HDMI cables, power surges, liquid spills, and general wear from frequent use."
    },
    {
      question: "Do you offer warranty on PS5 HDMI repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    },
    {
      question: "Can you repair other PS5 issues besides HDMI?",
      answer: "Absolutely! We repair overheating, disc drive issues, controller problems, power issues, and more. Contact us for a complete diagnostic."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PS5 HDMI Port Repair",
      "description": "Professional PS5 HDMI port repair service in Charlotte, NC. Fast, affordable, and reliable gaming console repair.",
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
        "description": "Professional PS5 HDMI port repair service"
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
        title="PS5 HDMI Repair Charlotte NC • KorTech Service"
        description="Professional PS5 HDMI port repair in Charlotte, NC. Same-day service available. Expert technicians, quality parts. Call 704-246-7642 or Text/Call 980-888-5300."
        canonicalUrl="/ps5-hdmi-repair"
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
                <Gamepad2 className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Gaming Console Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                PS5 HDMI Repair Charlotte NC
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional PlayStation 5 HDMI port repair service. Fast turnaround, 
                quality parts, and expert technicians. Get your PS5 back to gaming today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                  onClick={() => console.log('GA4 conversion: PHONE_CLICK')}
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                  onClick={() => console.log('GA4 conversion: SMS_CLICK')}
                >
                  <span>Text/Call 980-888-5300</span>
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
                  <span>Expert Technicians</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Gamepad2 className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">PS5 HDMI Issues?</h3>
                  <p className="text-blue-200">We fix all HDMI-related problems</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">1-3 Days</div>
                    <div className="text-sm text-green-200">Turnaround</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">No display/black screen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Loose HDMI connection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Damaged HDMI port</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Signal issues</span>
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
              Common PS5 HDMI Problems We Fix
            </h2>
            <p className="text-lg text-slate-600">
              Expert diagnosis and repair for all PlayStation 5 HDMI issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">No Display/Black Screen</h3>
              <p className="text-slate-600 mb-4">
                PS5 powers on but no video signal reaches your TV or monitor.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Damaged HDMI port pins</li>
                <li>• Internal connection issues</li>
                <li>• HDMI IC chip problems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Loose Connection</h3>
              <p className="text-slate-600 mb-4">
                HDMI cable doesn't stay securely connected to the console.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Worn HDMI port housing</li>
                <li>• Bent or damaged pins</li>
                <li>• Physical port damage</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Signal Issues</h3>
              <p className="text-slate-600 mb-4">
                Intermittent display, flickering, or poor video quality.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Poor solder connections</li>
                <li>• HDMI retimer issues</li>
                <li>• EMI interference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our PS5 HDMI Repair Process
            </h2>
            <p className="text-lg text-slate-600">
              Professional repair process with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Free Diagnosis</h3>
              <p className="text-slate-600 text-sm">
                Complete diagnostic to identify the exact HDMI issue
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Quote & Approval</h3>
              <p className="text-slate-600 text-sm">
                Transparent pricing with no hidden fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Repair</h3>
              <p className="text-slate-600 text-sm">
                Professional HDMI port replacement using quality parts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Testing & Return</h3>
              <p className="text-slate-600 text-sm">
                Thorough testing before returning your console
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              PS5 HDMI Repair Results
            </h2>
            <p className="text-lg text-slate-600">
              See the difference our expert repair makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Before Repair</h3>
              <div className="bg-slate-100 rounded-lg p-8 mb-4 text-center">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <p className="text-slate-600">Damaged HDMI Port</p>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• No video signal to TV</li>
                <li>• Loose HDMI connection</li>
                <li>• Bent or broken pins</li>
                <li>• Console unusable</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">After Repair</h3>
              <div className="bg-slate-100 rounded-lg p-8 mb-4 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-slate-600">Perfect HDMI Connection</p>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• Crystal clear 4K video</li>
                <li>• Secure HDMI connection</li>
                <li>• All pins properly aligned</li>
                <li>• Console fully functional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="PS5 HDMI Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Gaming Console Repair"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="PS5 HDMI Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link to="/services" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
              <span>← Back to All Services</span>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Need other computer services? <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">View all our computer repair services</a> in Charlotte, NC.
            </p>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Gaming Console Services
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Related Blog Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/how-to-fix-broken-ps5-hdmi-port" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <LinkIcon className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">How to Fix PS5 HDMI Port No Signal After Drop</h4>
                  <p className="text-sm text-slate-600 mt-1">Step-by-step guide to diagnosing PS5 HDMI port damage after dropping your console.</p>
                </div>
              </a>
              <a href="/blog/xbox-hdmi-repair-guide" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex items-start">
                <LinkIcon className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Xbox Series X HDMI Port Repair - DIY vs Professional Fix</h4>
                  <p className="text-sm text-slate-600 mt-1">Compare DIY and professional repair options for Xbox HDMI port issues.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/xbox-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Xbox HDMI Repair</h3>
              <p className="text-slate-600">Professional Xbox Series X/S and Xbox One HDMI port repair</p>
            </a>

            <a href="/nintendo-switch-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Nintendo Switch Repair</h3>
              <p className="text-slate-600">Professional Nintendo Switch repair including Joy-Con drift fixes</p>
            </a>

            <a href="/custom-gaming-pc" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Gaming PC</h3>
              <p className="text-slate-600">Build your dream gaming PC with expert assembly</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PS5HDMIRepair;