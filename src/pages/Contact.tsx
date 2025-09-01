import React, { useState } from 'react';
import { reviewCount, getRotatingReview } from '../utils/reviews';
import SEOHead from '../components/SEOHead';
// import GooglePlacesAPI from '../components/GooglePlacesAPI';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Navigation,
  Sparkles,
  FileText,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact KorTech Service - Charlotte Computer Repair",
      "description": "Contact KorTech Service for professional computer repair in Charlotte, NC. Visit our shop, call, or text for same-day service.",
      "url": "https://kortechservice.com/contact"
    }
  ];

  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Service Request: ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:info@kortechservice.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call",
      value: "704-246-7642",
      description: "Main line",
      action: "tel:704-246-7642",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Text",
      value: "980-888-5300",
      description: "Mobile/SMS",
      action: "sms:980-888-5300",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info&#64;kortechservice&#46;com",
      description: "General inquiries",
      action: "mailto:info&#64;kortechservice&#46;com",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="contact-page">
      <SEOHead
        title="Contact KorTech Service | Computer Repair Charlotte NC | Call 704-246-7642 Today"
        description="Contact us for Computer Repair Charlotte NC. Visit our Sardis Road location or call 704-246-7642. Same-day service available - call today!"
        keywords="contact KorTech Service, computer repair Charlotte NC contact, Charlotte computer repair phone, computer repair near me"
        canonicalUrl="/contact"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 text-slate-800 py-32 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-slate-700 font-medium">Get In Touch - Free Consultation Available</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight" itemProp="headline">
              Contact KorTech Service - Computer Repair Charlotte NC
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Ready to fix your computer? Visit our Charlotte shop or contact Charlotte's most trusted local tech experts. 
              Browse our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">complete service offerings</a>, 
              learn <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about our 25+ year history</a>, or 
              check our <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">transparent pricing</a>. 
              Serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
              For local resources, visit the <a href="https://www.charlottenc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">City of Charlotte website</a> 
              and <a href="https://www.ftc.gov/tips-advice/business-center/guidance/computer-security-small-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">FTC Computer Security Guidelines</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white" id="contact-methods">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`group bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${method.color}-200 transform hover:-translate-y-1`}
              >
                <div className={`w-20 h-20 bg-${method.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${method.color}-100 transition-colors`}>
                  <method.icon className={`h-10 w-10 text-${method.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{method.title}</h3>
                <p className={`text-xl text-${method.color}-600 font-semibold mb-2`}>{method.value}</p>
                <p className="text-slate-600 font-light">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50" id="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Business Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Location */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#0099FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Visit Our Location</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-slate-800 font-medium">KorTech Service</p>
                  <p className="text-slate-600">1721 Sardis Rd N, Suite 7A</p>
                  <p className="text-slate-600">Charlotte, NC 28270</p>
                  <p className="text-slate-600">Walk-in service available</p>
                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/place/Kortech+Service/@35.14047,-80.7400749,17z/data=!4m15!1m8!3m7!1s0x88542143faefb7af:0x9541d45ffcb5daa0!2s1721+Sardis+Rd+N+%237a,+Charlotte,+NC+28270!3b1!8m2!3d35.14047!4d-80.7375!16s%2Fg%2F11n_z1fxk6!3m5!1s0x885426acd2c33ca7:0x24292ff6e9c5f155!8m2!3d35.140474!4d-80.737464!16s%2Fg%2F1v_w31h1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#0099FF] hover:text-blue-600 font-medium transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm sm:text-base text-slate-700 font-medium">Mon-Fri</span>
                    <span className="text-sm sm:text-base text-slate-600">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm sm:text-base text-slate-700 font-medium">Saturday</span>
                    <span className="text-sm sm:text-base text-slate-600">11 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 sm:p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm sm:text-base text-slate-700 font-medium">Sunday</span>
                    <span className="text-sm sm:text-base text-slate-600">Closed</span>
                  </div>
                  <p className="text-slate-600">Same-day service available</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                  <p className="text-green-800 text-sm sm:text-base flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <strong>Emergency Service Available:</strong> Call for urgent computer repairs and quotes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white" id="contact-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-slate-800">
                Find Us in Charlotte
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Conveniently located on Sardis Road with easy access and free parking. Serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="relative">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px] rounded-t-3xl"
                title="KorTech Service Charlotte computer repair shop location map - 1721 Sardis Rd N Suite 7A Charlotte NC 28270"
              />
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">KorTech Service</h4>
                      <p className="text-slate-600 text-sm">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                      <p className="text-slate-600 text-sm">Walk-in service • Same-day repairs available</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://www.google.com/maps/place/Kortech+Service/@35.14047,-80.7400749,17z/data=!4m15!1m8!3m7!1s0x88542143faefb7af:0x9541d45ffcb5daa0!2s1721+Sardis+Rd+N+%237a,+Charlotte,+NC+28270!3b1!8m2!3d35.14047!4d-80.7375!16s%2Fg%2F11n_z1fxk6!3m5!1s0x885426acd2c33ca7:0x24292ff6e9c5f155!8m2!3d35.140474!4d-80.737464!16s%2Fg%2F1v_w31h1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 bg-[#0099FF] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Directions</span>
                      </a>
                      <a
                        href="https://g.page/kortechservice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 border border-[#0099FF] text-[#0099FF] px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                      >
                        <Star className="h-4 w-4" />
                        <span>Reviews</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      {/* Temporarily disabled for mobile performance debugging */}
      {/* <GooglePlacesAPI maxReviews={3} /> */}

      {/* Google Reviews Widget */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {reviewCount} Google Reviews
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.8/5</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
            {(() => {
              const review = getRotatingReview();
              return (
                <div className="text-center">
                  <p className="text-slate-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold text-slate-800">- {review.author}</p>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
              );
            })()}
          </div>
          
          <div className="text-center mt-6">
            <a
              href="https://g.page/kortechservice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <span>Read All {reviewCount} Reviews</span>
              <ExternalLink className="h-5 w-5" />
            </a>
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
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Join 100,000+ satisfied Charlotte area customers who trust us with their technology needs at our local shop
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
               href="tel:704-246-7642?utm_source=site&utm_medium=contact&utm_campaign=phone_cta"
                className="bg-[#0099FF] hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
              >
                <Phone className="h-6 w-6" />
                <span>704-246-7642</span>
              </a>
              <a
               href="sms:980-888-5300?utm_source=site&utm_medium=contact&utm_campaign=text_cta"
                className="border-2 border-[#0099FF] text-[#0099FF] hover:bg-[#0099FF] hover:text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 bg-white/80 backdrop-blur-sm min-w-[180px]"
              >
                <MessageSquare className="h-6 w-6" />
                <span>980-888-5300</span>
              </a>
              <a
               href="/mail-in-form?utm_source=site&utm_medium=contact&utm_campaign=mailin_cta"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 bg-white/80 backdrop-blur-sm min-w-[180px]"
              >
                <FileText className="h-6 w-6" />
                <span>Mail-In Form</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Local Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;