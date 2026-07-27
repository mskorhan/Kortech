import FiveStarReviews from './FiveStarReviews';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, MessageSquare, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white relative overflow-hidden circuit-pattern">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Google Reviews in Footer */}
        <FiveStarReviews showInFooter />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* KorTech Service Logo */}
              <div className="w-12 h-12 bg-[#0099FF] rounded-xl flex items-center justify-center relative overflow-hidden tech-glow">
                <div className="relative z-10 text-white font-bold text-base">KT</div>
              </div>
              <span className="text-2xl font-medium text-white">
                KorTech Service
              </span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed font-light">
              Professional Mac & PC repair, data recovery, mobile device repair,
             and IT support in Charlotte, NC since 1998. Serving 100,000+ customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/about" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </a></li>
              <li><a href="/services" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Services
              </a></li>
              <li><a href="/pricing" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Plans
              </a></li>
              <li><a href="/contact" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
              <li><a href="/blog" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Tech Blog
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/laptop-screen-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Laptop Repair
              </a></li>
              <li><a href="/data-recovery" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Data Recovery
              </a></li>
              <li><a href="/smartphone-screen-repair-charlotte" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Mobile Repair
              </a></li>
              <li><a href="/business-it-support" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Business IT Support
              </a></li>
              <li><a href="/virus-malware-removal" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Virus Removal
              </a></li>
              <li><a href="/printer-router-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Network Setup
              </a></li>
              <li><a href="/services" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                All Services
              </a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Service Areas</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/charlotte-computer-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Charlotte
              </a></li>
              <li><a href="/matthews-computer-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Matthews
              </a></li>
              <li><a href="/indian-trail-computer-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Indian Trail
              </a></li>
              <li><a href="/mint-hill-computer-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Mint Hill
              </a></li>
              <li><a href="/monroe-computer-repair" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Monroe
              </a></li>
              <li><a href="/locations" className="text-slate-200 hover:text-blue-300 transition-colors duration-200 flex items-center group font-light">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                All Service Areas
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-400/40 transition-colors">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-slate-200 font-light">704-246-7642</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-400/40 transition-colors">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-slate-200 font-light">980-888-5300 (Text/Mobile)</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-400/40 transition-colors">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-slate-200 font-light">info@kortechservice.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-400/40 transition-colors mt-0.5">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-slate-200 leading-relaxed font-light">
                  1721 Sardis Rd N, Suite 7A<br />
                  Charlotte, NC 28270
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-blue-400/40 transition-colors mt-0.5">
                  <Clock className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-slate-200 leading-relaxed font-light">
                  <div>Mon-Fri: 9 AM-6 PM</div>
                  <div>Sat: 11 AM-4 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-md font-medium text-white mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.facebook.com/KortechService/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-blue-300 hover:bg-blue-400/30 transition-all duration-200"
                  title="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/kortechservices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-pink-300 hover:bg-pink-400/30 transition-all duration-200"
                  title="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/kortechservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-blue-300 hover:bg-blue-400/30 transition-all duration-200"
                  title="Follow us on Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/kortechservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-blue-300 hover:bg-blue-400/30 transition-all duration-200"
                  title="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@kortechservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-red-300 hover:bg-red-400/30 transition-all duration-200"
                  title="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@kortechservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-purple-300 hover:bg-purple-400/30 transition-all duration-200"
                  title="Follow us on TikTok"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section for Mobile */}

        <div className="border-t border-slate-600/50 mt-12 pt-8 text-center text-sm text-slate-300">
          <div className="space-y-2">
            <p className="font-light">&copy; {new Date().getFullYear()} KorTech Service. All rights reserved. Professional Tech Support in Charlotte, NC.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <a href="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-slate-200 transition-colors">Terms & Conditions</a>
              <span>•</span>
              <span>Follow us on social media for tech tips and updates!</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;