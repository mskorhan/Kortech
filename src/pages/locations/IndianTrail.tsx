import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import StickyCTA from '../../components/StickyCTA';
import NearbyAreas from '../../components/NearbyAreas';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  Monitor,
  HardDrive,
  Smartphone,
  Wifi,
  Users,
  Truck
} from 'lucide-react';

const IndianTrail = () => {

  const services = [
    {
      icon: Monitor,
      title: "Family Laptop & Gaming PC Repair",
      description: "School laptops, household desktops and gaming rigs: overheating, crashes, power faults and failed upgrades",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Recovering Family Photos & Files",
      description: "Photos, schoolwork and saved games retrieved from failed drives and computers that will not start",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Screen Repair",
      description: "Cracked screens and worn batteries on the family iPhones, iPads and Android tablets",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Home Wi-Fi & Console Networking",
      description: "Whole-house Wi-Fi, wired runs for gaming and streaming, and networking for a home-based business",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "Indian Trail is in Union County. Do I have to drive into Charlotte?",
      answer: "Not necessarily. Indian Trail sits south-east of our shop along the US-74 corridor, so it is the furthest of our regular service areas, and pickup and delivery is the option most Union County customers take. You are also welcome to drop the machine at 1721 Sardis Rd N, Suite 7A in Charlotte if you are already heading that way."
    },
    {
      question: "How does pickup and delivery work for a household with several devices?",
      answer: "Call or text a list of what is wrong with each device and we will arrange a single collection rather than several trips. Everything is repaired at the Charlotte workshop and returned together, which usually makes more sense than driving a laptop back and forth up the corridor."
    },
    {
      question: "Do you work on gaming PCs and custom-built desktops?",
      answer: "Yes. Overheating and thermal throttling, noisy or failed fans, power supply faults, graphics cards that have stopped being detected, memory errors and builds that will not post are all routine here, including custom and self-built systems."
    },
    {
      question: "Our kids' school laptops keep breaking. Can those be repaired affordably?",
      answer: "Usually yes. Hinges, cracked screens, charging ports, keyboards and dead batteries are the common failures on school and family laptops, and repairing one is normally far cheaper than replacing it. We quote the part and labor before starting so you can decide."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Indian Trail, NC",
      "description": "Repair for family laptops, household desktops and gaming PCs for Indian Trail, NC in Union County, with pickup and delivery along the US-74 corridor to the KorTech workshop in south-east Charlotte.",
      "url": "https://www.kortechservice.com/indian-trail-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Indian Trail",
          "addressRegion": "NC"
        }
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "KorTech Service",
        "priceRange": "$$",
        "url": "https://www.kortechservice.com/",
        "telephone": "704-246-7642",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1721 Sardis Rd N, Suite 7A",
          "addressLocality": "Charlotte",
          "addressRegion": "NC",
          "postalCode": "28270",
          "addressCountry": "US"
        }
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
        title="Indian Trail NC PC &amp; Laptop Repair | KorTech"
        description="Family laptops, home desktops and gaming PCs repaired for Indian Trail, NC. Pickup and delivery from Union County to our Charlotte workshop. Call 704-246-7642."
        canonicalUrl="/indian-trail-computer-repair"
        location="Indian Trail, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-orange-300" />
              <span className="text-white font-medium">Serving Indian Trail With Pickup &amp; Delivery</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-orange-300">Indian Trail, NC</span>
            </h1>
            
            <div className="bg-orange-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-orange-100 mb-4">
                <strong>Indian Trail Community:</strong> Indian Trail is an incorporated town in Union County, south-east of our shop along the US-74 corridor, and largely a commuter community. KorTech Service has no Indian Trail branch: our Charlotte workshop has operated since 1998, and because Indian Trail is the furthest area we regularly serve, pickup and delivery is usually the practical choice.
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Repairs for the devices a whole household depends on: school and work laptops, the family
              desktop, and gaming PCs that overheat, crash or refuse to start. We can collect from Indian
              Trail, repair at our Charlotte workshop, and bring everything back when it is done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_indian_trail_hero"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_indian_trail_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Text 980-888-5300</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Ask About Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Diagnostic Fee Waived With Hardware Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Pickup & Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Household and Gaming PC Services for Indian Trail
            </h2>
            <p className="text-lg text-slate-600">
              Collected from Union County, repaired in Charlotte, and returned to your door
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              How We Handle Repairs for Indian Trail Households
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte workshop, running since 1998, that comes to you when the drive is long
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Indian Trail is the furthest area we regularly serve, so we can collect several household devices in one visit instead of asking you to make the trip</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Family &amp; Gaming Machines</h3>
              <p className="text-slate-600">School laptops, shared family desktops and custom gaming builds, quoted before work starts so repair-or-replace is your call</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across the repairs completed at the Charlotte workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Indian Trail Pickup &amp; Delivery Questions
            </h2>
            <p className="text-lg text-slate-600">
              Getting devices from Union County to the workshop, and what we repair once they arrive
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

      {/* Contact Section */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want a Device Collected From Indian Trail?
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            Call or text a list of what is wrong and we will arrange one pickup for the whole household
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_indian_trail_footer"
              className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_indian_trail_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-orange-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-orange-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-orange-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-orange-200">Pickup & Delivery Available in Indian Trail</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-orange-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-orange-200">Indian Trail is a service area; repairs are carried out at the Charlotte workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/indian-trail-computer-repair/" />
    </div>
  );
};

export default IndianTrail;