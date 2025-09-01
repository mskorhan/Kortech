import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  Home, 
  Search, 
  Phone, 
  MessageSquare,
  ArrowRight,
  MapPin,
  Settings,
  FileText,
  AlertTriangle
} from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Computer Repair Services', path: '/services', icon: Settings },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Pricing & Plans', path: '/pricing', icon: FileText },
    { name: 'PS5 HDMI Repair', path: '/ps5-hdmi-repair', icon: Settings },
    { name: 'Laptop Screen Repair', path: '/laptop-screen-repair', icon: Settings },
    { name: 'Data Recovery', path: '/data-recovery', icon: Settings },
    { name: 'SSD Upgrades', path: '/ssd-upgrades', icon: Settings }
  ];

  const serviceAreas = [
    { name: 'Charlotte Computer Repair', path: '/charlotte-computer-repair' },
    { name: 'Matthews Computer Repair', path: '/matthews-computer-repair' },
    { name: 'Mint Hill Computer Repair', path: '/mint-hill-computer-repair' },
    { name: 'Indian Trail Computer Repair', path: '/indian-trail-computer-repair' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Page Not Found (404) | Computer Repair Charlotte NC | KorTech Service"
        description="Page not found. Find Computer Repair Charlotte NC services, contact info & more at KorTech Service. Call 704-246-7642 for help today!"
        canonicalUrl="/404"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span className="text-slate-700 font-medium">Page Not Found</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-800">404</span>
              <span className="block text-4xl lg:text-5xl text-blue-600 mt-4">Computer Repair Charlotte NC - Page Not Found</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Sorry, we couldn't find the page you're looking for. But don't worry - 
              we're here to help you find what you need! Visit our <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">services page</a>, 
              learn <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">about our company</a>, or 
              <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">contact us directly</a>.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mt-4">
              For local resources, visit <a href="https://www.charlottenc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">City of Charlotte</a> 
              and <a href="https://www.charlottechamber.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Charlotte Chamber of Commerce</a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Home className="h-6 w-6" />
                <span>Go Home</span>
              </Link>
              <a
                href="tel:704-246-7642"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Popular Pages
            </h2>
            <p className="text-lg text-slate-600">
              Find what you're looking for with these popular destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <page.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {page.name}
                </h3>
                <div className="flex items-center justify-center text-blue-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-slate-600">
              Computer repair services throughout the Charlotte metro area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                to={area.path}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                  {area.name}
                </h3>
                <div className="flex items-center justify-center text-green-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our Charlotte computer repair experts directly
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

          <div className="mt-8 bg-blue-700 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-blue-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-blue-200">Mon-Fri: 9AM-6PM, Sat: 11AM-4PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;