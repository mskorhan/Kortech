import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  ArrowRight,
  Clock,
  Shield,
  MessageSquare,
  Monitor,
  HardDrive,
  Smartphone,
  Wifi,
  Settings,
  Zap,
  Tablet,
  Tv,
  Cpu,
  Thermometer,
  Gamepad2,
  Printer,
  Database,
  Laptop,
  Sparkles,
  Target,
  Award
} from 'lucide-react';

const Services = () => {
  const faqs = [
    {
      question: "How much does computer repair cost in Charlotte?",
      answer: "Computer repair costs vary by issue type. We provide free diagnostics ($75-$150 value, waived with repair) and transparent pricing. Most repairs range from $99+."
    },
    {
      question: "Do you offer same-day computer repair service?",
      answer: "Yes, we offer same-day service for most common computer issues at our Charlotte location. Walk-ins welcome or call ahead to ensure availability."
    },
    {
      question: "What computer brands do you repair?",
      answer: "We repair all major computer brands including Apple Mac, Dell, HP, Lenovo, ASUS, Acer, and custom-built PCs. Our technicians are experienced with all operating systems."
    },
    {
      question: "Do you provide warranty on computer repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents. The warranty covers only manufacturing defects or faulty parts that fail under normal use conditions."
    },
    {
      question: "Can you recover data from a crashed computer?",
      answer: "Yes, we specialize in data recovery from failed hard drives, corrupted systems, and damaged computers. We have a 95% success rate for data recovery services."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair Services Charlotte",
      "description": "Professional computer repair services in Charlotte, NC. Mac & PC repair, data recovery, virus removal, and IT support.",
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
      "areaServed": ["Charlotte, NC", "Matthews, NC", "Mint Hill, NC", "Pineville, NC", "Ballantyne, NC"]
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

  const services = [
    { 
      icon: Monitor,
      title: "Mac & PC Repair",
      description: "Professional computer repair for all major brands including Apple Mac, Dell, HP, Lenovo, and custom-built PCs.",
      features: [
        "Hardware diagnosis & repair",
        "Software troubleshooting", 
        "Performance optimization",
        "Virus/malware removal",
        "Operating system repair",
        "Component replacement"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: HardDrive,
      title: "Data Recovery & Backup",
      description: "Professional data recovery services for failed hard drives, corrupted files, and accidental deletions.",
      features: [
        "Hard drive recovery",
        "SSD data recovery",
        "File corruption repair",
        "Deleted file recovery",
        "Automated backup setup",
        "Cloud backup solutions"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "1-3 Days",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Laptop,
      title: "Laptop Screen Repair",
      description: "Comprehensive laptop repair services for all major brands with quick turnaround times.",
      features: [
        "Screen replacement",
        "Keyboard repair",
        "Battery replacement",
        "Charging port repair",
        "Hinge repair",
        "Motherboard repair"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Smartphone Repair",
      description: "Expert repair services for iPhones and Android smartphones with quality parts and warranties.",
      features: [
        "Screen & display repair",
        "Battery replacement",
        "Charging port repair",
        "Camera repair",
        "Speaker/microphone repair",
        "Water damage repair"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Tablet,
      title: "Tablet & iPad Repair",
      description: "Professional repair services for iPads, Samsung tablets, and all tablet devices with quality parts.",
      features: [
        "Screen replacement",
        "Battery replacement",
        "Charging port repair",
        "Button replacement",
        "Water damage repair",
        "Software issues"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Gamepad2,
      title: "Gaming Console Repair",
      description: "Expert repair for PlayStation, Xbox, and Nintendo Switch consoles with fast turnaround.",
      features: [
        "HDMI port repair",
        "Disc drive issues",
        "Power problems",
        "Controller repair",
        "Water damage repair",
        "System updates"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Wifi,
      title: "Network Setup & IT Support",
      description: "Complete network installation, configuration, and optimization for homes and businesses.",
      features: [
        "Wi-Fi network setup",
        "Router configuration",
        "Network security setup",
        "Multi-device connectivity",
        "Network troubleshooting",
        "Performance optimization"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "1-2 Days",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Tv,
      title: "Smart TV Repair",
      description: "Professional repair for smart TVs, home theater systems, and audio equipment.",
      features: [
        "Screen repair",
        "Power issues",
        "Audio problems",
        "Smart TV connectivity",
        "HDMI port repair",
        "Remote control issues"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "2-5 Days",
      gradient: "from-slate-500 to-blue-500"
    },
    {
      icon: Printer,
      title: "Printer & Router Repair",
      description: "Expert repair and setup for printers, routers, and networking equipment.",
      features: [
        "Printer repair",
        "Router configuration",
        "Network setup",
        "Wi-Fi optimization",
        "Connectivity issues",
        "Driver installation"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "PCB Micro-Soldering",
      description: "Professional circuit board repair and component-level electronics rework.",
      features: [
        "Motherboard repair",
        "Component replacement",
        "Circuit board rework",
        "Charging port repair",
        "HDMI port repair",
        "Precision soldering"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "3-7 Days",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Thermometer,
      title: "Appliance Electronics",
      description: "Repair of electronic components in household appliances and smart home devices.",
      features: [
        "Microwave electronics",
        "Thermostat repair",
        "Smart home devices",
        "Small appliance repair",
        "Control board repair",
        "Display issues"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "3-7 Days",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & Virus Removal",
      description: "Comprehensive computer security services to protect your digital assets and remove threats.",
      features: [
        "Virus & malware removal",
        "Security software installation",
        "System security audit",
        "Firewall configuration",
        "Privacy protection",
        "Security training"
      ],
      pricing: "Call/Text For Quote",
      turnaround: "Same Day Available",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call, text, or visit our Charlotte location to describe your computer issue",
      icon: Phone
    },
    {
      step: "2", 
      title: "Free Diagnosis",
      description: "Our technicians perform a thorough diagnostic ($75-$150, waived if HARDWARE repair is performed)",
      icon: Target
    },
    {
      step: "3",
      title: "Transparent Quote",
      description: "Receive a clear quote with no hidden fees before any work begins",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Expert Repair",
      description: "Our certified technicians perform the repair using quality parts",
      icon: Settings
    },
    {
      step: "5",
      title: "Quality Testing",
      description: "Comprehensive testing to ensure your device works perfectly",
      icon: Shield
    },
    {
      step: "6",
      title: "Pickup & Support",
      description: "Collect your repaired device with comfort and receive support",
      icon: Star
    }
  ];

  const additionalServices = [
    {
      service: "Computer Diagnostic",
      price: "Call/Text For Quote",
      icon: Target
    },
    {
      service: "Mac & PC Repair",
      price: "Call/Text For Quote",
      icon: Shield
    },
    {
      service: "Data Recovery",
      price: "Call/Text For Quote",
      icon: Award
    },
    {
      service: "Network Setup",
      price: "Call/Text For Quote",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="services-page">
      <SEOHead
        title="Computer Repair Charlotte NC Services | Expert Mac & PC Repair | KorTech Service"
        description="Professional Computer Repair Charlotte NC services. Mac & PC repair, data recovery, virus removal & IT support. Call 704-246-7642 today!"
        keywords="computer repair services Charlotte NC, Mac repair Charlotte, PC repair Charlotte, laptop repair Charlotte, virus removal Charlotte"
        canonicalUrl="/services"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-[#071930] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#0099FF]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0099FF]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Complete Computer Solutions - Free Diagnostic Available</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight" itemProp="headline">
              Computer Repair Charlotte NC Services - Expert Solutions
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Professional computer repair and IT support services at our Charlotte location and on-site for local homes and businesses. 
              Expert technicians, transparent pricing, walk-in service available. Serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
              Visit our <a href="/about" className="text-blue-300 hover:text-white font-medium">about page</a> to learn more about our 25+ years of experience, or 
              <a href="/contact" className="text-blue-300 hover:text-white font-medium">contact us</a> for immediate assistance.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light mt-4">
              For industry standards and best practices, visit <a href="https://www.comptia.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">CompTIA</a> 
              and <a href="https://www.bbb.org/us/nc/charlotte" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">Better Business Bureau Charlotte</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold" id="computer-solutions">
              <span className="text-[#071930]">
                Expert Computer Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              From basic troubleshooting to enterprise IT solutions, we provide comprehensive technology services at our Charlotte shop and on-site throughout the local area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200/50 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4" itemProp="name">{service.title}</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-blue-600 text-sm font-medium">
                      +{service.features.length - 4} more services
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-brand-primary mb-2">Call/Text For Quote</div>
                    <div className="text-sm text-slate-600">Turnaround: {service.turnaround}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-24 bg-white" id="service-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-[#071930]">Our Service Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Data Recovery</h3>
              <p className="text-slate-600 mb-4">Professional data recovery from failed hard drives, SSDs, and storage devices with 95% success rate.</p>
              <a href="/data-recovery" className="text-blue-600 hover:text-blue-800 font-medium">Learn more about data recovery →</a>
              <p className="text-sm text-slate-500 mt-2">
                Need help now? 
                <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact our experts</a> 
                or visit our 
                <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about page</a> 
                to learn more about our experience.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Virus Removal</h3>
              <p className="text-slate-600 mb-4">Complete virus and malware removal to protect your computer and personal information.</p>
              <a href="/virus-malware-removal" className="text-blue-600 hover:text-blue-800 font-medium">Learn more about virus removal →</a>
              <p className="text-sm text-slate-500 mt-2">For comprehensive security solutions, see our <a href="https://www.cisa.gov/cybersecurity-best-practices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">cybersecurity best practices guide</a>.</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">IT Support</h3>
              <p className="text-slate-600 mb-4">Comprehensive IT support for businesses including network setup and ongoing maintenance.</p>
              <a href="/it-support" className="text-blue-600 hover:text-blue-800 font-medium">Learn more about IT support →</a>
              <p className="text-sm text-slate-500 mt-2">Learn more about <a href="https://www.sba.gov/business-guide/manage-your-business/stay-safe-cybersecurity-threats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">business cybersecurity from the SBA</a>.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Services Section */}
      <section className="py-24 bg-white" id="additional-services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                Service Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Transparent pricing for all our computer services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{service.service}</h3>
                    <div className="text-lg font-bold text-brand-primary mb-3">Call/Text For Quote</div>
                    <p className="text-slate-600 mb-3 font-light">{service.description}</p>
                    <div className="text-sm text-slate-500 italic">{service.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white" id="repair-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                Simple Repair Process
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Transparent process from walk-in diagnosis to completion at our Charlotte location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#0099FF] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold group-hover:bg-[#071930] transition-colors">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-[#0099FF]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 bg-slate-50" id="service-guarantees">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-[#071930]">
                Service Guarantees
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Professional service with complete transparency at our Charlotte location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-3">No Hidden Fees</h3>
              <p className="text-sm text-slate-600 font-light">
                Transparent pricing with detailed quotes before work begins at our shop
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#0099FF]" />
              </div>
              <h3 className="font-bold text-slate-800 mb-3">Quality Guarantee</h3>
              <p className="text-sm text-slate-600 font-light">
                All work performed at our Charlotte shop with quality parts and satisfaction guarantee
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-3">Expert Service</h3>
              <p className="text-sm text-slate-600 font-light">
                Local certified technicians with 25+ years experience serving Charlotte
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-3">Fast Turnaround</h3>
              <p className="text-sm text-slate-600 font-light">
                Walk-in service and same-day repairs available for most issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our computer repair services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#071930] text-white relative overflow-hidden" id="services-cta">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#0099FF]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0099FF]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-200 font-light">
              Visit our Charlotte shop for expert computer repair service with transparent pricing and same-day turnaround
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:704-246-7642?utm_source=site&utm_medium=services&utm_campaign=phone_cta"
                className="bg-[#0099FF] hover:bg-white hover:text-[#071930] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl hover:shadow-[#0099FF]/25 transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
              <a
                href="sms:980-888-5300?utm_source=site&utm_medium=services&utm_campaign=text_cta"
                className="border-2 border-[#0099FF] text-[#0099FF] hover:bg-[#0099FF] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Send Text</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Diagnostic</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;