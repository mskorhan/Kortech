import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  Recycle, 
  Leaf, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Award,
  Users,
  Heart,
  Truck,
  FileText,
  AlertTriangle
} from 'lucide-react';

const Recycling = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Free Electronics Recycling",
      "description": "Free electronics recycling service in Charlotte, NC. Environmentally responsible disposal of computers, phones, and electronics.",
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
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free electronics recycling service"
      }
    }
  ];

  const acceptedItems = [
    { 
      category: "Computers & Laptops",
      items: [
        "Desktop computers",
        "Laptop computers", 
        "All-in-one computers",
        "Computer towers",
        "Workstations",
        "Gaming computers"
      ],
      icon: "💻"
    },
    {
      category: "Mobile Devices",
      items: [
        "Smartphones",
        "Tablets",
        "iPads",
        "E-readers",
        "Smartwatches",
        "Fitness trackers"
      ],
      icon: "📱"
    },
    {
      category: "Computer Components",
      items: [
        "Hard drives",
        "Memory (RAM)",
        "Motherboards",
        "Graphics cards",
        "Power supplies",
        "Cables & accessories"
      ],
      icon: "🔧"
    },
    {
      category: "Peripherals",
      items: [
        "Keyboards",
        "Mice",
        "Monitors",
        "Printers",
        "Speakers",
        "Webcams"
      ],
      icon: "⌨️"
    },
    {
      category: "Networking Equipment",
      items: [
        "Routers",
        "Modems",
        "Switches",
        "Access points",
        "Network cables",
        "Ethernet hubs"
      ],
      icon: "📡"
    },
    {
      category: "Other Electronics",
      items: [
        "Gaming consoles",
        "DVD/Blu-ray players",
        "Digital cameras",
        "Portable drives",
        "Chargers & adapters",
        "Small electronics"
      ],
      icon: "🎮"
    }
  ];

  const notAccepted = [
    "CRT monitors/TVs (due to lead content)",
    "Large appliances (refrigerators, washers, etc.)",
    "Batteries (we can direct you to proper disposal)",
    "Fluorescent bulbs",
    "Medical devices",
    "Items containing hazardous materials"
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Prevent toxic materials from entering landfills and protect our Charlotte environment",
      color: "green"
    },
    {
      icon: Recycle,
      title: "Resource Recovery",
      description: "Valuable materials like gold, silver, and rare earth elements are recovered and reused",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Professional data destruction ensures your personal information stays secure",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Support local Charlotte recycling efforts and responsible e-waste management",
      color: "red"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Bring Your Electronics",
      description: "Drop off your old electronics at our Charlotte location during business hours",
      icon: Truck
    },
    {
      step: "2",
      title: "Data Destruction",
      description: "We securely wipe all data from storage devices to protect your privacy",
      icon: Shield
    },
    {
      step: "3",
      title: "Sorting & Processing",
      description: "Items are sorted and prepared for environmentally responsible recycling",
      icon: Recycle
    },
    {
      step: "4",
      title: "Certified Recycling",
      description: "Materials are sent to certified recycling facilities for proper processing",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="recycling-page">
      <SEOHead
        title="Free Electronics Recycling Charlotte NC | Computer Disposal | KorTech Service"
        description="Free electronics recycling Charlotte NC. Environmentally responsible Computer Repair Charlotte NC disposal. Call 704-246-7642 today!"
        canonicalUrl="/recycling"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-[#071930] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-600/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Recycle className="h-5 w-5 text-green-400" />
              <span className="text-white font-medium">100% FREE Recycling - Protecting Charlotte's Environment</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Free Electronics Recycling Charlotte NC - Environmentally Responsible Computer Disposal
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
             Responsibly recycle your old computers, phones, and electronics at KorTech Service. Free, secure, and environmentally friendly disposal. 
             View our <a href="/services" className="text-blue-300 hover:text-white font-medium">repair services</a>, 
             learn <a href="/about" className="text-blue-300 hover:text-white font-medium">about our company</a>, or 
             <a href="/contact" className="text-blue-300 hover:text-white font-medium">contact us for pickup</a>.
            </p>
           <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light mt-4">
             For environmental guidelines, visit <a href="https://www.epa.gov/recycle/electronics-donation-and-recycling" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">EPA Electronics Recycling</a> 
             and <a href="https://www.e-stewards.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">e-Stewards Certification</a>.
           </p>

            <div className="bg-gradient-to-r from-green-800/40 to-emerald-800/40 rounded-2xl p-6 max-w-2xl mx-auto border border-green-500/30 backdrop-blur-sm">
              <p className="text-green-200 text-lg">
                <strong>Completely FREE:</strong> No fees, no appointments needed. Just drop off during business hours!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-green-50" id="recycling-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                Why Recycle Electronics?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Electronic waste is one of the fastest-growing waste streams. Responsible recycling protects our environment and recovers valuable materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Environmental Protection</h3>
                <p className="text-slate-600 font-light leading-relaxed">Prevent toxic materials from entering landfills and protect our Charlotte environment</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Recycle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Resource Recovery</h3>
                <p className="text-slate-600 font-light leading-relaxed">Valuable materials like gold, silver, and rare earth elements are recovered and reused</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Data Security</h3>
                <p className="text-slate-600 font-light leading-relaxed">Professional data destruction ensures your personal information stays secure</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Community Impact</h3>
                <p className="text-slate-600 font-light leading-relaxed">Support local Charlotte recycling efforts and responsible e-waste management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="py-24 bg-white" id="accepted-items">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                What We Accept
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We accept most electronic devices for free recycling. Bring your old electronics to our Charlotte location.
            </p>
            
            <div className="mt-8">
              <img 
                src="/Electronics recycling image.png" 
                alt="Collection of old electronic devices including phones, tablets, and computers ready for recycling" 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acceptedItems.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Accepted */}
      <section className="py-24 bg-green-50" id="not-accepted-items">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-3xl p-8 border-2 border-orange-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Items We Cannot Accept</h3>
              <p className="text-orange-700 font-light">
                For safety and environmental reasons, we cannot accept the following items:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notAccepted.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-xl p-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-orange-800 font-light">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-orange-700 font-medium">
                Contact us for guidance on proper disposal of these items in Charlotte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-white to-green-50" id="recycling-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                Our Recycling Process
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Simple, secure, and environmentally responsible electronics recycling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-green-50" id="recycling-location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#071930]">
                  Drop Off Location
                </span>
              </h2>
              <p className="text-xl text-slate-600 font-light">
                Bring your electronics to our Charlotte location during business hours. 
                No appointment necessary - just drop off and go!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">KorTech Service</p>
                    <p className="text-slate-600">1721 Sardis Rd N, Suite 7A</p>
                    <p className="text-slate-600">Charlotte, NC 28270</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Drop-off Hours</p>
                    <p className="text-slate-600">Mon-Fri: 9 AM - 6 PM</p>
                    <p className="text-slate-600">Sat: 11 AM - 4 PM</p>
                    <p className="text-slate-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 text-center">Free Electronics Recycling</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">No fees or charges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">Secure data destruction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">Environmentally responsible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">No appointment needed</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="text-green-800 text-sm font-medium text-center">
                    Questions? Call us at 704-246-7642
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Detailed Recycling Process
            </h2>
            <p className="text-lg text-slate-600">
              How we ensure your electronics are recycled responsibly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">1. Collection & Sorting</h3>
              <p className="text-slate-600 mb-4">
                When you drop off your electronics at our Charlotte location, we carefully sort them by type and condition. Some devices may be refurbished, while others will be disassembled for parts and materials.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Initial assessment of device condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Categorization by device type and recyclability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Identification of potentially reusable components</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">2. Data Destruction</h3>
              <p className="text-slate-600 mb-4">
                For devices with storage capabilities, we perform secure data destruction to ensure your personal information remains protected. This includes wiping hard drives, SSDs, and mobile device storage.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>DoD-compliant data wiping for storage devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Physical destruction of non-reusable storage media</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Certificate of destruction available upon request</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">3. Disassembly & Material Separation</h3>
              <p className="text-slate-600 mb-4">
                Our technicians carefully disassemble devices to separate different materials: plastics, metals, circuit boards, batteries, and more. This ensures each material can be properly processed.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Manual disassembly by trained technicians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Separation of valuable materials for recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Safe handling of hazardous components</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">4. Responsible Processing</h3>
              <p className="text-slate-600 mb-4">
                We partner with certified recycling facilities that adhere to strict environmental standards. These facilities process the materials to recover valuable resources and safely dispose of hazardous components.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Partnership with R2 and e-Stewards certified facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Zero landfill policy for electronic waste</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Compliance with all local and federal regulations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Environmental Impact</h3>
            <p className="text-green-700 mb-4 text-center">
              By recycling your electronics with KorTech Service, you're making a significant positive impact on the environment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-bold text-green-600 text-lg">Reduces Landfill Waste</p>
                <p className="text-sm text-slate-600">Keeps harmful materials out of landfills</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-bold text-green-600 text-lg">Conserves Resources</p>
                <p className="text-sm text-slate-600">Recovers valuable metals and materials</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-bold text-green-600 text-lg">Prevents Pollution</p>
                <p className="text-sm text-slate-600">Avoids toxic chemicals leaching into soil and water</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-800 to-emerald-900 text-white relative overflow-hidden" id="recycling-cta">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-lime-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">
                Ready to Recycle?
              </span>
            </h2>
            <p className="text-xl text-gray-200 font-light">
              Bring your old electronics to KorTech Service for free, secure, and environmentally responsible recycling
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:704-246-7642"
                className="bg-green-600 hover:bg-white hover:text-green-800 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Text Questions</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100% Free Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Secure Data Destruction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Environmentally Responsible</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recycling;