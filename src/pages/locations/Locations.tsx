import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { 
  MapPin, 
  Phone, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Truck,
  Clock,
  Star
} from 'lucide-react';

const Locations = () => {
  const locations = [
    { 
      city: "Charlotte",
      description: "Our main location serving all of Charlotte and surrounding areas.",
      address: "1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270",
      services: ["Computer Repair", "Data Recovery", "Smartphone Repair", "Gaming Console Repair"],
      path: "/charlotte-computer-repair",
      image: "https://images.pexels.com/photos/2838886/pexels-photo-2838886.jpeg"
    },
    {
      city: "Matthews",
      description: "Serving Matthews with pickup and delivery services.",
      services: ["Computer Repair", "Laptop Screen Repair", "Virus Removal", "IT Support"],
      path: "/matthews-computer-repair",
      image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg"
    },
    {
      city: "Indian Trail",
      description: "Serving Indian Trail with pickup and delivery services.",
      services: ["Computer Repair", "Data Recovery", "Smartphone Repair", "Network Setup"],
      path: "/indian-trail-computer-repair",
      image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg"
    },
    {
      city: "Mint Hill",
      description: "Serving Mint Hill with pickup and delivery services.",
      services: ["Computer Repair", "Laptop Screen Repair", "Gaming Console Repair", "IT Support"],
      path: "/mint-hill-computer-repair",
      image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg"
    },
    {
      city: "Monroe",
      description: "Serving Monroe with pickup and delivery services.",
      services: ["Computer Repair", "Data Recovery", "Smartphone Repair", "Virus Removal"],
      path: "/monroe-computer-repair",
      image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg"
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KorTech Service",
      "url": "https://kortechservice.com",
      "logo": "https://kortechservice.com/transparent-logo-1.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "704-246-7642",
        "contactType": "customer service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
      },
      "location": [
        {
          "@type": "Place",
          "name": "KorTech Service - Charlotte",
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
            "latitude": "35.2271",
            "longitude": "-80.8431"
          }
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Charlotte",
          "addressRegion": "NC"
        },
        {
          "@type": "City",
          "name": "Matthews",
          "addressRegion": "NC"
        },
        {
          "@type": "City",
          "name": "Indian Trail",
          "addressRegion": "NC"
        },
        {
          "@type": "City",
          "name": "Mint Hill",
          "addressRegion": "NC"
        },
        {
          "@type": "City",
          "name": "Monroe",
          "addressRegion": "NC"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white" id="locations-page">
      <SEOHead
        title="Service Locations | Computer Repair Charlotte Area"
        description="KorTech Service provides professional computer repair, data recovery, IT support throughout Charlotte, Matthews, Indian Trail, Mint Hill, Monroe, NC. Call 704-246-7642!"
        canonicalUrl="/locations"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden" id="locations-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Serving Charlotte & Surrounding Areas</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Service Locations
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair, data recovery, and IT support services throughout Charlotte, Matthews, Indian Trail, Mint Hill, and Monroe, NC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Text 980-888-5300</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Location */}
      <section className="py-16 bg-white" id="main-location">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Main Location</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Charlotte, NC
              </h2>
              
              <p className="text-lg text-slate-600 mb-6">
                Our main service center is located in Charlotte, NC. We provide comprehensive computer repair, data recovery, and IT support services to Charlotte residents and businesses.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">KorTech Service</p>
                    <p className="text-slate-600">1721 Sardis Rd N, Suite 7A</p>
                    <p className="text-slate-600">Charlotte, NC 28270</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Business Hours</p>
                    <p className="text-slate-600">Mon-Fri: 9 AM - 6 PM</p>
                    <p className="text-slate-600">Sat: 11 AM - 4 PM</p>
                    <p className="text-slate-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/charlotte-computer-repair"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>Charlotte Services</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Kortech+Service/@35.14047,-80.7400749,17z/data=!4m15!1m8!3m7!1s0x88542143faefb7af:0x9541d45ffcb5daa0!2s1721+Sardis+Rd+N+%237a,+Charlotte,+NC+28270!3b1!8m2!3d35.14047!4d-80.7375!16s%2Fg%2F11n_z1fxk6!3m5!1s0x885426acd2c33ca7:0x24292ff6e9c5f155!8m2!3d35.140474!4d-80.737464!16s%2Fg%2F1v_w31h1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8234567890123!2d-80.7400749!3d35.14047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426acd2c33ca7%3A0x24292ff6e9c5f155!2sKortech%20Service!5e0!3m2!1sen!2sus!4v1640995200000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KorTech Service Location - Charlotte computer repair shop serving Matthews Mint Hill Indian Trail Monroe NC"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50" id="service-areas">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We provide computer repair and IT support services throughout Charlotte and surrounding areas with convenient pickup and delivery options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link 
                key={index} 
                to={location.path}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <img 
                  src={location.image} 
                  alt={`${location.city} North Carolina computer repair services - Professional Mac PC laptop smartphone repair and IT support`} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {location.city}, NC
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {location.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {location.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="font-medium text-sm">View Details</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup & Delivery */}
      <section className="py-16 bg-white" id="pickup-delivery">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Pickup & Delivery Service
              </h2>
              <p className="text-slate-600">
                Can't make it to our Charlotte location? We offer convenient pickup and delivery!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <Truck className="h-5 w-5 text-blue-600 mr-2" />
                  Pickup Service
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  We'll pick up your device from your home or business in Charlotte, Matthews, Indian Trail, Mint Hill, or Monroe.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Convenient scheduled pickup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Professional handling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Call/text for availability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <Truck className="h-5 w-5 text-blue-600 mr-2" />
                  Delivery Service
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Once your repair is complete, we'll deliver your device back to your location.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Flexible delivery scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Contactless options available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Service area: 30-mile radius</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a
                href="tel:704-246-7642"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                <span>Call to Schedule: 704-246-7642</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50" id="location-testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted by customers throughout Charlotte and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-slate-600 mb-4">
                "KorTech Service saved my laptop when no one else could. They picked it up from my home in Charlotte and returned it good as new the next day. Excellent service!"
              </p>
              <div className="font-semibold text-slate-800">Sarah M. - Charlotte, NC</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-slate-600 mb-4">
                "As a Matthews resident, I was thrilled to find out KorTech offers pickup service. They fixed my gaming PC quickly and their prices were very reasonable."
              </p>
              <div className="font-semibold text-slate-800">James K. - Matthews, NC</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-slate-600 mb-4">
                "I live in Indian Trail and was worried about finding quality computer repair. KorTech's pickup service was a lifesaver! Professional and fast service."
              </p>
              <div className="font-semibold text-slate-800">Michael T. - Indian Trail, NC</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white" id="locations-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Expert Tech Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for professional computer repair services in your area
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:704-246-7642"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;