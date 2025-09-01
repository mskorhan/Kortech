import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isServicesDropdownClicked, setIsServicesDropdownClicked] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsServicesDropdownClicked(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(open => !open);
    setIsServicesDropdownClicked(true);
  };

  const servicePages = [
    { name: 'PS5 HDMI Repair', path: '/ps5-hdmi-repair' },
    { name: 'Xbox HDMI Repair', path: '/xbox-hdmi-repair' },
    { name: 'Nintendo Switch Repair', path: '/nintendo-switch-repair' },
    { name: 'Laptop Screen Repair', path: '/laptop-screen-repair' },
    { name: 'SSD Upgrades', path: '/ssd-upgrades' },
    { name: 'Virus & Malware Removal', path: '/virus-malware-removal' },
    { name: 'IT Support', path: '/it-support' },
    { name: 'Data Recovery', path: '/data-recovery' },
    { name: 'Custom Gaming PC', path: '/custom-gaming-pc' },
    { name: 'Water Damage Repair', path: '/water-damage-repair' },
    { name: 'Smartphone Repair', path: '/smartphone-screen-repair-charlotte' },
    { name: 'Tablet & iPad Repair', path: '/tablet-ipad-repair' },
    { name: 'Smart TV Repair', path: '/smart-tv-repair' },
    { name: 'Printer & Router Repair', path: '/printer-router-repair' },
    { name: 'PCB Micro-Soldering', path: '/pcb-micro-soldering' },
    { name: 'Appliance Electronics', path: '/appliance-electronics-repair' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Remote Assistance', path: '/remote-assistance' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isServicesDropdownOpen &&
        isServicesDropdownClicked &&
        servicesDropdownRef.current &&
        servicesButtonRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
        setIsServicesDropdownClicked(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen, isServicesDropdownClicked]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/transparent-logo-1.png"
                alt="KorTech Service Logo"
                className="h-12 w-auto object-contain flex-shrink-0"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            {/* Desktop */}
            <div className="hidden xl:flex items-center space-x-1">
              <button
                onClick={() => handleNavigation('/')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              <div className="relative">
                <button
                  ref={servicesButtonRef}
                  onClick={toggleServicesDropdown}
                  onMouseDown={(e) => e.stopPropagation()}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-1 ${
                    isActive('/services') || servicePages.some(s => isActive(s.path))
                      ? 'text-brand-primary bg-blue-50'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesDropdownOpen && (
                  <div
                    ref={servicesDropdownRef}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="services-dropdown absolute top-full left-0 mt-1 w-64 max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 backdrop-blur-sm scrollbar-visible"
                  >
                    <div className="px-6 py-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-slate-50 rounded-t-2xl">
                      <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={() => handleNavigation('/services')}
                        className="block text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors duration-200"
                      >
                        📋 All Services Overview
                      </button>
                      <p className="text-xs text-slate-500 mt-1">Complete service catalog</p>
                    </div>
                    <div className="py-2 relative">
                      {servicePages.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesDropdownOpen(false);
                            setIsServicesDropdownClicked(false);
                          }}
                          className="block w-full text-left px-6 py-3 text-sm text-slate-700 hover:text-brand-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 transition-all duration-200 flex items-center space-x-3 group"
                        >
                          <div className="w-2 h-2 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* rest of your desktop links/buttons */}
              <button
                onClick={() => handleNavigation('/pricing')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/pricing') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Plans
              </button>
              <button
                onClick={() => handleNavigation('/recycling')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/recycling') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Recycling
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/contact') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/about') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/blog')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/blog') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation('/mail-in-form')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/mail-in-form') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Shipping Form
              </button>

              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-slate-200">
                <a
                  href="tel:704-246-7642"
                  className="bg-brand-primary hover:bg-brand-dark text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-1 whitespace-nowrap tech-glow"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-1 whitespace-nowrap tech-border"
                >
                  <MessageSquare className="h-3 w-3" />
                  <span>Text 980-888-5300</span>
                </a>
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(o => !o)}
                className="text-slate-600 hover:text-brand-primary focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 overflow-y-auto max-h-[calc(100vh-8rem)] fixed top-16 left-0 right-0 z-40 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 border-t border-slate-200">
            <button
              onClick={() => handleNavigation('/')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              About
            </button>

            <div className="relative mb-2">
              <button
                onClick={() => setIsMobileServicesDropdownOpen(o => !o)}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesDropdownOpen && (
                <div className="bg-slate-50 rounded-lg ml-4 mt-2 mb-4 max-h-[30vh] overflow-y-auto scrollbar-visible relative">
                  {/* All Services Overview Link */}
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="block w-full text-left px-4 py-3 text-sm font-bold text-brand-primary hover:text-brand-dark hover:bg-slate-100 transition-all rounded-lg border-b border-slate-200 mb-2"
                  >
                    📋 All Services Overview
                    <div className="text-xs text-slate-500 mt-1">Complete service catalog</div>
                  </button>
                  
                  {servicePages.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesDropdownOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-brand-primary hover:bg-slate-100 transition-all rounded-lg flex items-center"
                    >
                      {service.name}
                      <ChevronRight className="h-4 w-4 ml-auto text-slate-400" />
                    </Link>
                  ))}
                  
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/pricing')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Plans
            </button>
            <button
              onClick={() => handleNavigation('/recycling')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Free Recycling
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('/blog')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation('/mail-in-form')}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50"
            >
              Shipping Form
            </button>

            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
              <a
                href="tel:704-246-7642"
                className="bg-brand-primary hover:bg-brand-dark text-white py-3 rounded-xl font-semibold text-base text-center flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white py-3 rounded-xl font-semibold text-base text-center flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Text 980-888-5300</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
