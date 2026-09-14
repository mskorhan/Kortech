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

const Waxhaw = () => {

  const services = [
    {
      icon: Monitor,
      title: "Home Computer & Laptop Repair",
      description: "The family Mac or PC, plus gaming rigs that overheat, crash, or will not boot",
      price: "Call/Text For Quote",
      link: "/services/"
    },
    {
      icon: HardDrive,
      title: "Photo & File Recovery",
      description: "Family photos and documents off drives that died or stopped being readable",
      price: "Call/Text For Quote",
      link: "/data-recovery/"
    },
    {
      icon: Smartphone,
      title: "Kids' Phones & Tablets",
      description: "Cracked screens and worn-out batteries on the devices the whole family shares",
      price: "Call/Text For Quote",
      link: "/smartphone-screen-repair-charlotte/"
    },
    {
      icon: Wifi,
      title: "Home Wi-Fi Help",
      description: "Router setup, dead spots, and keeping the streaming and schoolwork devices online",
      price: "Call/Text For Quote",
      link: "/business-it-support/"
    }
  ];

  const faqs = [
    {
      question: "I would rather not drive to Charlotte. How does pickup and delivery work from Waxhaw?",
      answer: "Waxhaw is south of Charlotte in Union County, far enough that a round trip is a real errand, so pickup and delivery is usually the more practical option. Call or text to arrange it. We collect the machine, do the work at our Charlotte shop, and bring it back, so you are not making the drive twice."
    },
    {
      question: "Can you take several family devices at once, or is it one at a time?",
      answer: "Several at once is fine, and it is usually the sensible way to do it if we are already coming out. A laptop, a desktop, and a couple of tablets can go in together. Tell us what you are sending when you call so we can quote each item rather than surprising you at the end."
    },
    {
      question: "My son's gaming PC shuts off during games. Is that something you repair?",
      answer: "Yes. Shutdowns under load usually point to heat, power supply, or a failing component rather than the game itself, and custom-built PCs are welcome. We diagnose before quoting, and if the fix turns out to be a hardware replacement, the diagnostic fee is waived with hardware repair."
    },
    {
      question: "Do I need to back up the family photos before handing the computer over?",
      answer: "Back up first if the machine still boots and you have somewhere to copy to, since that is always the safer position. If it will not start or the drive is already failing, do not force it. Bring it as is and tell us the photos are the priority, and we will tell you what looks recoverable before any recovery work begins."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair in Waxhaw, NC",
      "description": "Home computer, laptop, gaming PC, and family device repair for Waxhaw, NC, in southern Union County. Repairs are carried out at the KorTech Service shop in Charlotte, with pickup and delivery available so Waxhaw households do not have to make the drive.",
      "url": "https://www.kortechservice.com/waxhaw-computer-repair/",
      "areaServed": [
        {
          "@type": "City",
          "name": "Waxhaw",
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
        title="Waxhaw NC Home & Gaming PC Repair | KorTech"
        description="Home computer, laptop, gaming PC, and family device repair for Waxhaw, NC. Pickup and delivery so you skip the drive to Charlotte. Call 704-246-7642."
        canonicalUrl="/waxhaw-computer-repair"
        location="Waxhaw, NC"
        service="Computer Repair"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-green-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-emerald-300" />
              <span className="text-white font-medium">Union County | Pickup & Delivery Available</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-emerald-300">Waxhaw, NC</span>
            </h1>

            <div className="bg-emerald-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-emerald-100 mb-4">
                <strong>Waxhaw Community:</strong> Waxhaw sits south of our Charlotte shop, in southern Union County near the Mecklenburg line. It is a largely residential community, and at that distance a round trip to Charlotte is a real errand, which is why pickup and delivery is the practical route here: family laptops, desktops, gaming PCs, and the tablets and phones that go with them, collected and returned rather than driven in.
              </p>
            </div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A slow laptop, a desktop that will not boot, a gaming rig that shuts off mid-game, a cracked
              phone screen. Send several at once if that is easier. We quote each item after diagnosis, and
              arrange pickup and delivery so a Waxhaw household never makes the trip to Charlotte twice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                data-track-source="location_waxhaw_hero"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="location_waxhaw_hero"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
              What We Fix for Waxhaw Families
            </h2>
            <p className="text-lg text-slate-600">
              The devices a household actually depends on, from the home office desk to the kids' rooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 block group">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-bold">{service.price}</span>
                  <span className="text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Learn More &rarr;</span>
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
              How This Works From Waxhaw
            </h2>
            <p className="text-lg text-slate-600">
              An independent Charlotte repair shop, operating since 1998, that comes to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">We Come to You</h3>
              <p className="text-slate-600">Given the distance from Charlotte, pickup and delivery is usually the sensible route for Waxhaw. Drop-off is still welcome if you prefer</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Send the Whole Pile</h3>
              <p className="text-slate-600">Laptops, desktops, gaming PCs, phones, and tablets can go in together, each quoted on its own after we diagnose it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Our overall Google rating across everyone the Charlotte shop serves</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Waxhaw Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Pickup logistics, multiple devices, and the questions families ask first
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
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have Us Pick It Up in Waxhaw
          </h2>
          <p className="text-xl text-emerald-200 mb-8">
            Call or text with what is wrong and how many devices, and we will arrange collection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              data-track-source="location_waxhaw_footer"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              data-track-source="location_waxhaw_footer"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-emerald-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-emerald-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-emerald-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-emerald-200">Our only location. Repairs happen here and come back to you</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-emerald-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-emerald-200">Pickup and delivery covers Waxhaw and southern Union County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas currentPath="/waxhaw-computer-repair/" />
    </div>
  );
};

export default Waxhaw;
