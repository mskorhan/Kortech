import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Palette, 
  Monitor, 
  Image, 
  Clock,
  CheckCircle, 
  Star,
  Layers,
  FileText,
  Smartphone
} from 'lucide-react';

const GraphicDesign = () => {
  const faqs = [
    {
      question: "What graphic design services do you offer?",
      answer: "We offer a wide range of graphic design services including logo design, branding, print materials, digital graphics, social media assets, website design, and UI/UX design. Our team can handle projects of any size for businesses in Charlotte and beyond."
    },
    {
      question: "How much do graphic design services cost?",
      answer: "Graphic design costs vary based on project complexity, deliverables, and timeline. We provide detailed quotes after discussing your specific needs and requirements. We offer competitive rates for Charlotte businesses."
    },
    {
      question: "What is your graphic design process?",
      answer: "Our design process includes: 1) Initial consultation to understand your needs, 2) Research and concept development, 3) Design creation and presentation, 4) Revision rounds based on your feedback, and 5) Final delivery of all agreed-upon files and assets."
    },
    {
      question: "How long do graphic design projects take?",
      answer: "Project timelines vary based on complexity. Simple projects like business cards may take 3-5 business days, while comprehensive branding packages might take 2-4 weeks. We'll provide a specific timeline during our initial consultation."
    },
    {
      question: "Do you offer rush graphic design services?",
      answer: "Yes, we offer expedited graphic design services for urgent projects. Rush fees may apply depending on the timeline and project scope. Contact us to discuss your deadline requirements."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Graphic Design Services",
      "description": "Professional graphic design services in Charlotte, NC. Logo design, branding, print materials, digital graphics, and more for businesses of all sizes.",
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
        "description": "Professional graphic design services"
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
        title="Graphic Design Charlotte NC - Professional Logo & Branding Services"
        description="Professional graphic design services in Charlotte, NC. Logo design, branding, print materials, digital graphics, and more for businesses of all sizes. Call 704-246-7642!"
        keywords="graphic design Charlotte, logo design Charlotte NC, branding services, print design, digital graphics, website design Charlotte"
        canonicalUrl="/graphic-design"
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
                <Palette className="h-5 w-5 text-purple-300" />
                <span className="text-white font-medium">Creative Design Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Graphic Design Services
                <span className="block text-purple-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional graphic design services in Charlotte, Matthews, and surrounding areas. 
                Expert logo design, branding, print materials, and digital graphics for businesses of all sizes.
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
                  <span>Custom Designs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Unlimited Revisions</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Palette className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Need Professional Design?</h3>
                  <p className="text-purple-200">We create stunning visuals for your business</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-300">Call/Text</div>
                    <div className="text-sm text-purple-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-300">Custom</div>
                    <div className="text-sm text-indigo-200">Design Solutions</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Logo design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Branding packages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Print materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Digital graphics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Graphic Design Services
            </h2>
            <p className="text-lg text-slate-600">
              Professional design solutions for all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Logo Design</h3>
              <p className="text-slate-600 mb-4">
                Custom logo creation that captures your brand's essence and values.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Brand identity development</li>
                <li>• Multiple concept options</li>
                <li>• All file formats included</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Branding Packages</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive branding solutions for businesses of all sizes.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Logo design</li>
                <li>• Color palette selection</li>
                <li>• Typography guidelines</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Print Materials</h3>
              <p className="text-slate-600 mb-4">
                Professional design for all your print marketing needs.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Business cards</li>
                <li>• Brochures and flyers</li>
                <li>• Posters and banners</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Image className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Digital Graphics</h3>
              <p className="text-slate-600 mb-4">
                Eye-catching digital assets for your online presence.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Social media graphics</li>
                <li>• Email marketing templates</li>
                <li>• Web banners and ads</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Website Design</h3>
              <p className="text-slate-600 mb-4">
                Custom website design that converts visitors into customers.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Responsive layouts</li>
                <li>• UI/UX design</li>
                <li>• Landing page optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mobile App Design</h3>
              <p className="text-slate-600 mb-4">
                Intuitive and engaging mobile application interfaces.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• iOS and Android design</li>
                <li>• User flow optimization</li>
                <li>• Interactive prototypes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Graphic Design" 
        price="Call/Text For Quote"
        urgentText="Professional Design Services Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Graphic Design FAQ" />

      {/* Design Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-slate-600">
              How we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation</h3>
              <p className="text-slate-600">We discuss your needs, goals, and vision for the project</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Concept Development</h3>
              <p className="text-slate-600">We create initial design concepts based on your requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Refinement</h3>
              <p className="text-slate-600">We refine the chosen concept based on your feedback</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Delivery</h3>
              <p className="text-slate-600">We provide final files in all required formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Design Portfolio
            </h2>
            <p className="text-lg text-slate-600">
              Examples of our recent work
            </p>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-8">
              Contact us to see examples of our recent design work for Charlotte businesses. We'd be happy to share our portfolio and discuss how we can help with your specific project needs.
            </p>
            
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <span>Request Portfolio Samples</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;