import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  Users,
  MessageSquare,
  Award,
  Target,
  Heart,
  Sparkles,
  MapPin
} from 'lucide-react';

const About = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About KorTech Service - Charlotte Computer Repair",
      "description": "Learn about KorTech Service, Charlotte's trusted computer repair company since 1998. Professional Mac & PC repair, data recovery, and IT support.",
      "url": "https://kortechservice.com/about",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "KorTech Service",
        "foundingDate": "1998",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1721 Sardis Rd N, Suite 7A",
          "addressLocality": "Charlotte",
          "addressRegion": "NC",
          "postalCode": "28270"
        }
      }
    }
  ];

  const achievements = [
    { 
      icon: Star,
      title: "4.8/5 Google Rating",
      description: "Based on 150+ verified customer reviews",
      color: "yellow"
    },
    {
      icon: Award,
      title: "Charlotte Chamber Member",
      description: "Trusted local business since 1998",
      color: "blue"
    },
    {
      icon: Users,
      title: "100,000+ Customers Served",
      description: "Helping Charlotte residents and businesses",
      color: "green"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Quick turnaround for urgent repairs",
      color: "purple"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest pricing, transparent communication, and ethical business practices in every interaction.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Continuous learning and improvement to provide the highest quality computer repair and IT services.",
      color: "green"
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting Charlotte businesses and residents with reliable technology solutions and local expertise.",
      color: "purple"
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Founded",
      description: "Started as a small computer repair shop in Charlotte"
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Added mobile device repair and IT support services"
    },
    {
      year: "2015",
      title: "Growth",
      description: "Reached 50,000+ satisfied customers milestone"
    },
    {
      year: "2024",
      title: "Today",
      description: "100,000+ customers served with 4.8★ Google rating"
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="about-page">
      <SEOHead
        title="About KorTech Service | Computer Repair Charlotte NC Since 1998 | Expert Technicians"
        description="Trusted Computer Repair Charlotte NC since 1998. Professional Mac & PC repair, data recovery & IT support. Call 704-246-7642 today!"
        keywords="about KorTech Service, computer repair Charlotte NC history, Charlotte computer repair company, trusted computer repair"
        canonicalUrl="/about"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 text-slate-800 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-slate-700 font-medium">Serving Charlotte Since 1998 - 25+ Years of Excellence</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight" itemProp="headline">
              About KorTech Service - Computer Repair Charlotte NC Experts Since 1998
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Professional computer repair and IT support serving Charlotte, NC since 1998. 
              We're your trusted local technology experts. Explore our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">complete services</a> or 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">visit our Charlotte location</a> today.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
              Learn about <a href="https://www.sba.gov/business-guide/manage-your-business/cybersecurity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">small business cybersecurity from the SBA</a> 
              and <a href="https://www.charlottechamber.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Charlotte Chamber of Commerce</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white" id="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-slate-800">
                    Our Story
                  </span>
                </h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                  Founded in 1998, KorTech Service has been Charlotte's trusted local computer repair 
                  and IT support provider for over 25 years. What started as a small computer 
                  repair shop has grown into a comprehensive technology service center serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  We've helped thousands of Charlotte area residents and businesses with everything 
                 from simple computer repairs to complex IT infrastructure setups at our convenient <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Sardis Road location</a>. Our commitment 
                  to honest pricing, quality service, and customer satisfaction has made us a 
                  cornerstone of the local Charlotte tech community.
                </p>
               <p className="text-lg text-slate-600 font-light leading-relaxed">
                 Learn more about our comprehensive <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">computer repair services</a> or discover why 
                 <a href="https://www.charlottechamber.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Charlotte's business community</a> 
                 trusts us with their technology needs. For industry insights, visit the 
                 <a href="https://www.comptia.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">CompTIA website</a>.
               </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-3xl shadow-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-slate-700 font-medium">Years in Business</div>
                </div>
                <div className="bg-green-50 p-6 rounded-3xl shadow-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">100,000+</div>
                  <div className="text-slate-700 font-medium">Customers Served</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#0099FF] rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  To provide Charlotte and surrounding areas with reliable, honest, and professional computer repair 
                  and IT support services at our local shop and through on-site service. We believe technology should work for you, not 
                  against you, and we're here to make that happen with personalized, local service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">Transparent, honest service quotes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">Expert technical knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-light">Exceptional customer service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50" id="our-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-slate-800">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              25+ years of serving the Charlotte community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-200">
                <div className="w-16 h-16 bg-[#0099FF] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white" id="achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-slate-800">
                Why Charlotte Trusts Us
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Our commitment to excellence has earned us recognition throughout the Charlotte community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-${achievement.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <achievement.icon className={`h-8 w-8 text-${achievement.color}-600`} />
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{achievement.title}</h3>
                <p className="text-sm text-slate-600 font-light">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50" id="core-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-slate-800">
                Our Core Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-200">
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-slate-800">
                  Visit Our Charlotte Location
                </span>
              </h2>
              <p className="text-xl text-slate-600 font-light">
                Conveniently located in Charlotte with easy access and free parking. 
                Stop by for a consultation or drop off your device for repair.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">1721 Sardis Rd N, Suite 7A</p>
                    <p className="text-slate-600">Charlotte, NC 28270</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Mon-Fri: 9 AM - 6 PM</p>
                    <p className="text-slate-600">Sat: 11 AM - 4 PM, Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200">
                <img 
                  src="https://images.pexels.com/photos/2838886/pexels-photo-2838886.jpeg" 
                  alt="KorTech Service Charlotte computer repair shop location" 
                  width={400}
                  height={225}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Easy to Find</h3>
                <p className="text-slate-600 font-light">
                  Located on Sardis Road with ample parking and wheelchair accessibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative text-slate-800">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-800">
                Ready to Experience KorTech Service?
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Join thousands of satisfied Charlotte customers who trust us with their technology needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:704-246-7642?utm_source=site&utm_medium=about&utm_campaign=phone_cta"
                className="bg-[#0099FF] hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
              <a
                href="sms:980-888-5300?utm_source=site&utm_medium=about&utm_campaign=text_cta"
                className="border-2 border-[#0099FF] text-[#0099FF] hover:bg-[#0099FF] hover:text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Send Text</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100,000+ Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>4.8★ Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;