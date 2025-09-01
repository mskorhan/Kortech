import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircle, 
  X, 
  Star, 
  Phone, 
  Mail, 
  ArrowRight,
  Clock,
  Shield,
  MessageSquare,
  Crown,
  Sparkles,
  TrendingUp,
  Award,
  Target,
  Users,
  Zap,
  Timer,
  Gift
} from 'lucide-react';

const Pricing = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Support Plans Charlotte",
      "description": "Professional IT support plans and computer repair pricing in Charlotte, NC. Transparent pricing with no hidden fees.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "KorTech Service"
      }
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const packages = [
    {
      name: "Basic Support",
      price: "$499",
      originalPrice: "$750",
      period: "per month",
      description: "Essential IT support for small businesses",
      badge: "Save $250/mo",
      badgeColor: "bg-green-500",
      features: [
        "Computer hardware diagnosis & repair",
        "Software troubleshooting & updates",
        "Virus/malware removal & protection",
        "Basic data backup solutions",
        "Email & phone support",
        "Monthly system maintenance",
        "Remote support included"
      ],
      notIncluded: [
        "Network infrastructure setup",
        "Advanced data recovery",
        "24/7 priority support"
      ],
      popular: false,
      cta: "Get Started",
      gradient: "from-blue-500 to-blue-600",
      savings: "$250",
      discount: "33% OFF"
    },
    {
      name: "Professional Support",
      price: "$1499",
      originalPrice: "$2250",
      period: "per month",
      description: "Comprehensive IT solutions for growing businesses",
      badge: "Most Popular",
      badgeColor: "bg-orange-500",
      features: [
        "Everything in Basic Support",
        "Network setup & optimization",
        "Multi-device management",
        "Professional data recovery services",
        "Mobile device support",
        "Email setup & migration",
        "Software installation & training",
        "Weekly system health reports",
        "Priority response times"
      ],
      notIncluded: [
        "24/7 emergency support",
        "Dedicated account manager"
      ],
      popular: true,
      cta: "Choose Plan",
      gradient: "from-green-500 to-green-600",
      savings: "$750",
      discount: "33% OFF"
    },
    {
      name: "Enterprise Support",
      price: "$3499+",
      originalPrice: "$5250+",
      period: "per month",
      description: "Complete enterprise IT management and support",
      badge: "Best Value",
      badgeColor: "bg-purple-500",
      features: [
        "Everything in Professional Support",
        "Advanced data recovery services",
        "Enterprise security implementation",
        "Active Directory management",
        "Technology consulting included",
        "24/7 priority support",
        "Ongoing maintenance & monitoring",
        "Dedicated account manager",
        "Quarterly business reviews",
        "Custom solution development"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Us",
      gradient: "from-purple-500 to-purple-600",
      savings: "$1,750+",
      discount: "33% OFF"
    }
  ];

  const additionalServices = [
    {
      service: "Computer Diagnostic",
      price: "Call/Text For Quote",
      originalPrice: "",
      description: "Complete computer troubleshooting and analysis",
      note: "Applied toward repair cost",
      icon: Target,
      savings: "Save $75"
    },
    {
      service: "Mac & PC Repair",
      price: "Call/Text For Quote",
      originalPrice: "",
      description: "Hardware repairs, upgrades, and replacements",
      note: "Depends on complexity",
      icon: Shield,
      savings: "Save 50%"
    },
    {
      service: "Data Recovery",
      price: "Call/Text For Quote",
      originalPrice: "",
      description: "Professional data recovery from failed drives",
      note: "Varies by data amount",
      icon: Award,
      savings: "Save $150+"
    },
    {
      service: "Network Setup",
      price: "Call/Text For Quote",
      originalPrice: "",
      description: "Professional network installation and configuration",
      note: "Per device/location",
      icon: Zap,
      savings: "Save 50%"
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="pricing-page">
      <SEOHead
        title="Computer Repair Charlotte NC Pricing | Transparent Rates | KorTech Service"
        description="Affordable Computer Repair Charlotte NC pricing. IT support plans & service costs. No hidden fees. Call 704-246-7642 for quote today!"
        keywords="computer repair pricing Charlotte NC, IT support plans Charlotte, computer repair costs Charlotte, diagnostic fees"
        canonicalUrl="/pricing"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Timer className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Limited Time: 33% OFF All Plans!</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight" itemProp="headline">
              Computer Repair Charlotte NC Pricing - Transparent Rates
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Professional IT support plans at discounted rates. Save up to $1,750/month with our limited-time offer. 
              View our <a href="/services" className="text-blue-300 hover:text-white font-medium">complete services</a>, 
              learn <a href="/about" className="text-blue-300 hover:text-white font-medium">about our company</a>, or 
              <a href="/contact" className="text-blue-300 hover:text-white font-medium">contact us for consultation</a>.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light mt-4">
              For business planning resources, visit <a href="https://www.sba.gov/business-guide/manage-your-business/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">SBA Cybersecurity Guide</a> 
              and <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white font-medium">NIST Cybersecurity Framework</a>.
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/30 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Gift className="h-6 w-6 text-yellow-400" />
                <span className="text-yellow-300 font-bold text-lg">SPECIAL OFFER</span>
              </div>
              <p className="text-white text-lg">
                <strong>33% OFF</strong> all monthly plans - Save thousands per year!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50" id="pricing-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              <span className="text-red-800 font-semibold">Limited Time Discount</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-brand-dark">
                Choose Your Discounted Plan
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Professional IT support packages at 33% off regular pricing - limited time offer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-500 ${
                  pkg.popular
                    ? 'border-orange-500 scale-105 shadow-2xl ring-4 ring-orange-200'
                    : 'border-slate-200 hover:border-blue-300'
                } ${hoveredCard === index ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Discount Badge */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-pulse">
                  {pkg.discount}
                </div>

                {/* Popular Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${pkg.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2`}>
                  {pkg.popular && <Crown className="h-4 w-4" />}
                  <span>{pkg.badge}</span>
                </div>

                <div className="p-8 pt-12">
                  <div className="text-center space-y-6 mb-8">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {pkg.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex flex-col items-center">
                          <span className="text-slate-400 line-through text-lg">{pkg.originalPrice}</span>
                          <span className="text-5xl font-bold text-slate-800">{pkg.price}</span>
                          <span className="text-green-600 font-medium text-sm">You save {pkg.savings}!</span>
                        </div>
                      </div>
                      <div className="text-lg text-slate-600">
                        {pkg.period}
                      </div>
                      <p className="text-slate-600 font-light">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <h4 className="font-semibold text-slate-800">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" />
                          <span className="text-slate-700 text-sm font-light">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <div className="pt-4">
                        <h4 className="font-semibold text-slate-800 mb-3">
                          Not included:
                        </h4>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <X className="h-4 w-4 flex-shrink-0 text-red-400" />
                              <span className="text-slate-500 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 text-center block transform hover:scale-105 ${
                        pkg.popular
                          ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                          : 'bg-brand-primary hover:bg-brand-dark text-white shadow-lg'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>{pkg.cta}</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Timer className="h-6 w-6 text-red-600" />
                <span className="text-red-600 font-bold text-lg">Contact Us Today</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional IT Support</h3>
              <p className="text-lg text-slate-700 mb-6">
                Get professional IT support tailored to your business needs. Contact us today to discuss your requirements.
              </p>
              <a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 bg-white" id="individual-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">One-Time Services - Also Discounted!</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-brand-dark">
                Individual Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Need a specific service? Our individual repairs and support are also on sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group relative">
                {/* Savings Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {service.savings}
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800">{service.service}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-3 font-light">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-50" id="pricing-social-proof">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-brand-dark">
                Trusted by Charlotte Businesses
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">100,000+</div>
              <div className="text-green-600 font-medium">Happy Customers</div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-brand-primary mb-2">4.8★</div>
              <div className="text-brand-primary font-medium">Google Rating</div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-700 mb-2">25+</div>
              <div className="text-purple-600 font-medium">Years Experience</div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-700 mb-2">24/7</div>
              <div className="text-orange-600 font-medium">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="pricing-cta">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-500 rounded-full px-6 py-3 animate-pulse">
              <Timer className="h-5 w-5 text-white" />
              <span className="text-white font-bold">Contact Us Today For A Quote!</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-200 font-light">
              Get professional IT support tailored to your business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
               href="tel:704-246-7642?utm_source=site&utm_medium=pricing&utm_campaign=phone_cta"
                className="bg-brand-primary hover:bg-white hover:text-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
              <a
               href="sms:980-888-5300?utm_source=site&utm_medium=pricing&utm_campaign=text_cta"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Send Text</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Customized Support Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Professional IT Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>25+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;