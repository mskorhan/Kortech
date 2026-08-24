import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import FiveStarReviews from '../components/FiveStarReviews';
import { trackFormSubmission } from '../utils/analytics';
import { NOTIFY_ENDPOINT } from '../utils/notifyEndpoint';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Star,
  Navigation,
  Sparkles,
  FileText,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(NOTIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...formData })
      });

      if (!response.ok) throw new Error('Contact form request failed');

      trackFormSubmission('contact_page_form');
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact KorTech Service - Charlotte Computer Repair",
      "description": "Contact KorTech Service for professional computer repair in Charlotte, NC. Visit our shop, call, or text for same-day service.",
      "url": "https://www.kortechservice.com/contact/"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service",
      "telephone": "704-246-7642",
      "email": "info@kortechservice.com",
      "url": "https://www.kortechservice.com/contact/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
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
      ]
    }
  ];

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
      value: "info@kortechservice.com",
      description: "General inquiries",
      action: "mailto:info@kortechservice.com",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="contact-page">
      <SEOHead
        title="Contact • Charlotte Computer Repair • KorTech Service"
        description="Contact KorTech Service for computer repair in Charlotte, NC. Visit our Sardis Road location or call 704-246-7642!"
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
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-800">
                Contact KorTech Service Charlotte
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Ready to fix your computer? Visit our Charlotte shop or contact Charlotte's most trusted local tech experts. Serving Charlotte, Matthews, Mint Hill, Pineville, and Ballantyne.
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
                data-track-source="contact_page_methods"
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

      {/* Contact Form */}
      <section className="py-24 bg-slate-50" id="contact-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Send Us a Message</h2>
            <p className="text-lg text-slate-600">
              Prefer to write it out? Send us the details and we'll get back to you.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-8" role="status">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6" noValidate>
                {submitStatus === 'error' && (
                  <div role="alert" className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                    We couldn't send your message automatically. Please call or text us instead, or try again in a moment.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                      className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p id="contact-fullName-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(704) 246-7642"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Tell us what's going on with your device..."
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="inline-flex items-center space-x-2 bg-[#071930] hover:bg-slate-900 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
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
                        className="inline-flex items-center space-x-1 bg-[#071930] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors"
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
      <FiveStarReviews maxReviews={3} />

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
                className="bg-[#071930] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
                data-track-source="contact_page_cta"
              >
                <Phone className="h-6 w-6" />
                <span>704-246-7642</span>
              </a>
              <a
               href="sms:980-888-5300?utm_source=site&utm_medium=contact&utm_campaign=text_cta"
                className="border-2 border-[#0099FF] text-[#0099FF] hover:bg-[#0099FF] hover:text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 bg-white/80 backdrop-blur-sm min-w-[180px]"
                data-track-source="contact_page_cta"
              >
                <MessageSquare className="h-6 w-6" />
                <span>980-888-5300</span>
              </a>
              <a
               href="/mail-in-form/?utm_source=site&utm_medium=contact&utm_campaign=mailin_cta"
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