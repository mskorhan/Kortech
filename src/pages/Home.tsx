import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircle, 
  Star, 
  Phone,
  Mail, 
  ArrowRight,
  Clock,
  Shield,
  Users,
  MessageSquare,
  Monitor,
  HardDrive,
  Smartphone,
  Wifi,
  Settings,
  Zap,
  Award,
  MapPin,
  Sparkles,
  TrendingUp,
  Target,
  Play,
  Gift
} from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import StickyCTA from '../components/StickyCTA';
// import GooglePlacesAPI from '../components/GooglePlacesAPI';

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service",
      "description": "Professional computer repair, Mac & PC repair, virus removal, data recovery, and IT support in Charlotte, Matthews, Indian Trail, Mint Hill & surrounding areas. Call 704-246-7642 for free diagnostics!",
      "url": "https://kortechservice.com",
      "telephone": "704-246-7642",
      "hasMap": "https://www.google.com/maps/place/Kortech+Service/@35.14047,-80.7400749,17z",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.1495",
        "longitude": "-80.8414"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "11:00",
          "closes": "16:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "96"
      },
      "serviceArea": ["Charlotte, NC", "Matthews, NC", "Indian Trail, NC", "Mint Hill, NC", "Surrounding Areas"]
    }
  ];

  const services = [
    {
      icon: Monitor,
      title: "Mac & PC Repair",
      description: "Expert repair for all computer brands with same-day service",
      features: ["Hardware diagnosis", "Software troubleshooting", "Performance optimization"],
      gradient: "from-blue-500 to-cyan-500",
      price: "Call/Text For Quote"
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Professional data recovery with 95% success rate",
      features: ["Hard drive recovery", "File restoration", "Backup solutions"],
      gradient: "from-purple-500 to-pink-500",
      price: "Call/Text For Quote"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair specialists",
      features: ["Screen replacement", "Battery service", "Water damage repair"],
      gradient: "from-green-500 to-emerald-500",
      price: "Call/Text For Quote"
    },
    {
      icon: Wifi,
      title: "Network & IT Support",
      description: "Complete IT solutions for businesses of all sizes",
      features: ["Network setup", "Security configuration", "Ongoing support"],
      gradient: "from-orange-500 to-red-500",
      price: "Call/Text For Quote"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "100K+", label: "Customers Served", icon: Users },
    { number: "4.8★", label: "Google Rating", icon: Star },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEOHead
        title="Computer Repair Charlotte NC | Professional Mac & PC Repair | KorTech Service"
        description="Expert Computer Repair Charlotte NC since 1998. Same-day Mac & PC repair, data recovery & virus removal. Call 704-246-7642 for free quote today!"
        keywords="computer repair Charlotte NC, Mac repair Charlotte, PC repair Charlotte, virus removal Charlotte, data recovery Charlotte, IT support Charlotte"
        canonicalUrl="/"
        schema={schema}
      />
      
      <StickyCTA showOnMobile={true} />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-slate-800 py-responsive overflow-hidden tech-grid mobile-safe" id="home-hero">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-responsive relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="space-responsive text-center lg:text-left mobile-text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-blue-200 text-xs sm:text-sm md:text-base shadow-sm float tech-border">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span className="text-slate-700 font-medium">Charlotte & Matthews #1 Computer Repair Since 1998</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" itemProp="headline">
                  Professional Computer & Electronics Repair in Charlotte, NC
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Expert Mac & PC repair, data recovery, virus removal, and IT support. Same-day service available with free diagnostics. Serving Charlotte, Matthews, Mint Hill, and surrounding areas since 1998.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mobile-stack mobile-space-y-4">
              <a
                href="tel:704-246-7642"
                className="bg-brand-primary hover:bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105 whitespace-nowrap mobile-full-width min-w-[240px] sm:min-w-[260px]"
                onClick={() => console.log('GA4 conversion: PHONE_CLICK')}
              >
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center space-x-2 transition-all duration-300 whitespace-nowrap mobile-full-width min-w-[240px] sm:min-w-[260px]"
                onClick={() => console.log('GA4 conversion: SMS_CLICK')}
              >
                <MessageSquare className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Text/Call 980-888-5300</span>
              </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free Diagnostic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>100% Guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative mt-8 lg:mt-0 lg:ml-8 xl:ml-12 mobile-px-4">
              <div className="card p-8 hover-lift circuit-pattern">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-brand-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg float">
                      <Monitor className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Expert Computer Solutions</h3>
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl">
                      Trusted by 100,000+ Charlotte & Matthews customers since 1998
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-blue-50/80 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-sm border border-blue-100 hover-lift tech-border data-stream">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <stat.icon className="h-5 w-5 text-brand-primary" />
                        </div>
                       <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">{stat.number}</div>
                        <div className="text-base sm:text-lg md:text-xl text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-700 font-medium text-base sm:text-lg"> Available Now - Same Day Service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-slate-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform rotate-12 animate-bounce">
                <div className="text-center">
                  <div className="text-sm sm:text-base">FREE Diagnostic!</div>
                  <div className="text-xs sm:text-sm font-normal">(with hardware repair)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-responsive bg-gradient-to-br from-white to-slate-50 relative circuit-pattern overflow-x-hidden" id="home-services">
        <div className="max-w-7xl mx-auto px-responsive">
          <div className="text-center space-responsive mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base border border-blue-200 tech-border">
              <TrendingUp className="h-5 w-5 text-brand-primary" />
              <span className="text-slate-700 font-semibold text-sm sm:text-base">Our Expertise</span>
            </div>
            <h2 className="text-responsive-lg font-bold" id="professional-services">
              <span className="text-slate-800">
                Professional Computer
              </span>
              <span className="text-gradient ml-0 sm:ml-3 block sm:inline">
                Services Charlotte & Matthews
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Expert computer repair and IT support services in Charlotte, Matthews, Pineville, Mint Hill with transparent pricing and same-day turnaround
            </p>
          </div>

          <div className="grid-responsive-4">
            {services.map((service, index) => (
              <div key={index} className="card-interactive p-4 sm:p-6 md:p-8 group holographic">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4" itemProp="name">{service.title}</h3>
                <p className="text-base sm:text-lg text-slate-600 mb-6 font-light leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 text-base font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-brand-primary font-bold text-base sm:text-lg">{service.price}</span>
                  <a href="/services" className="text-brand-primary hover:text-brand-dark font-medium text-sm sm:text-base flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services" 
              to="/services"
              className="btn-primary text-base sm:text-lg md:text-xl hover-glow inline-flex items-center space-x-3 mobile-full-width"
            >
              <span>View All Services</span>
              <ArrowRight className="h-6 w-6 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-slate-50" id="service-areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <h3 className="font-bold text-slate-800">Charlotte</h3>
              <p className="text-sm text-slate-600">Main service area</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Matthews</h3>
              <p className="text-sm text-slate-600">Full service coverage</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Mint Hill</h3>
              <p className="text-sm text-slate-600">Pickup & delivery</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Indian Trail</h3>
              <p className="text-sm text-slate-600">On-site service</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Pineville</h3>
              <p className="text-sm text-slate-600">Local support</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600">
              For more information about our service areas, visit our <a href="/locations" className="text-blue-600 hover:text-blue-800 font-medium">locations page</a>, 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">contact us directly</a>, or 
              or read about <a href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Charlotte, NC on Wikipedia</a> 
              and <a href="https://www.charlottenc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Charlotte city government</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      {/* Temporarily disabled for mobile performance debugging */}
      {/* <GooglePlacesAPI maxReviews={3} /> */}

      {/* Why Choose Us */}
      <section className="py-responsive bg-gradient-to-br from-slate-50 to-white tech-grid overflow-x-hidden" id="home-why-choose-us">
        <div className="max-w-7xl mx-auto px-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-responsive text-center lg:text-left mobile-text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base border border-green-200 tech-border">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-semibold text-sm sm:text-base">Why Choose Us</span>
                </div>
                <h2 className="text-responsive-lg font-bold leading-tight">
                  <span className="text-slate-800">
                    Charlotte's Most
                  </span>
                  <span className="text-gradient ml-0 sm:ml-3 block sm:inline">
                    Trusted Tech Experts
                  </span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                  For over 25 years, we've been Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne's go-to local computer repair and IT support provider with our convenient Sardis Road location.
                  Located at <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</a>
                  . Learn more about our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">comprehensive repair services</a> or 
                  <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">our 25+ year history</a> serving the Charlotte community.
                </p>
                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mt-4">
                  For additional tech resources, visit <a href="https://www.ftc.gov/tips-advice/business-center/guidance/computer-security-small-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">FTC Computer Security Guidelines</a> 
                  and <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">NIST Cybersecurity Framework</a>.
                </p>
              </div>

              <div className="grid-responsive-2">
                <div className="card p-6 hover-lift data-stream">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">Same-Day Service</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light">Quick turnaround for urgent repairs</p>
                </div>

                <div className="card p-6 hover-lift data-stream">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">Quality Guarantee</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light">All replaced parts used are of high quality</p>
                </div>

                <div className="card p-6 hover-lift data-stream">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">Expert Technicians</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light">Certified professionals with years of experience</p>
                </div>

                <div className="card p-6 hover-lift data-stream">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">Trusted Since 1998</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light">25+ years serving Charlotte & Matthews community</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 mobile-px-4">
              <div className="card p-8 hover-lift holographic">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg float">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">Serving Charlotte & Matthews Since 1998</h3>
                    <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
                      Located at 1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-xl">
                      <span className="text-sm sm:text-base text-slate-700 font-medium">Mon-Fri</span>
                      <span className="text-sm sm:text-base text-slate-600">9 AM - 6 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-xl">
                      <span className="text-sm sm:text-base text-slate-700 font-medium">Saturday</span>
                      <span className="text-sm sm:text-base text-slate-600">11 AM - 4 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-slate-50 rounded-xl">
                      <span className="text-sm sm:text-base text-slate-700 font-medium">Sunday</span>
                      <span className="text-sm sm:text-base text-slate-600">Closed</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                    <p className="text-green-800 text-sm sm:text-base flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <strong>Emergency Service Available:</strong> Call for urgent computer repairs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-responsive bg-brand-gradient relative overflow-hidden circuit-pattern mobile-safe" id="home-cta">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-responsive text-center relative z-10 text-white">
          <div className="space-responsive">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 float tech-border">
              <Gift className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium text-sm sm:text-base md:text-lg">Ready to Get Started? Free Diagnostic Available!</span>
            </div>

            <h2 className="text-responsive-lg font-bold leading-tight">
              <span className="text-white">
                Need Computer Repair
              </span>
              <span className="text-yellow-300 ml-0 sm:ml-3 block sm:inline">
                Charlotte & Matthews NC?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light">
              Visit our Charlotte location for expert computer repair service with transparent pricing and same-day turnaround. Serving Charlotte, Matthews, Pineville, Mint Hill, Ballantyne with walk-in availability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mobile-stack mobile-space-y-4">
              <a
                href="tel:704-246-7642?utm_source=site&utm_medium=cta&utm_campaign=phone_cta"
                className="bg-white text-brand-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg md:text-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[240px] sm:min-w-[260px] mobile-full-width"
              >
                <Phone className="h-6 w-6" />
                <span>704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300?utm_source=site&utm_medium=cta&utm_campaign=text_cta"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg md:text-xl flex items-center justify-center space-x-2 transition-all duration-300 min-w-[240px] sm:min-w-[260px] mobile-full-width"
              >
                <MessageSquare className="h-6 w-6" />
                <span>980-888-5300</span>
              </a>
              <a
                href="/contact?utm_source=site&utm_medium=cta&utm_campaign=contact_cta"
                className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-brand-dark px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg md:text-xl flex items-center justify-center space-x-2 transition-all duration-300 min-w-[240px] sm:min-w-[260px] mobile-full-width"
              >
                <Mail className="h-6 w-6" />
                <span>Get Quote</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Diagnostic</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100% Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}