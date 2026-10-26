import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown, ChevronRight } from 'lucide-react';

// Shared visible focus style. The hamburger previously used
// `focus:outline-none` with no replacement, which removes the only
// keyboard affordance (WCAG 2.4.7).
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isServicesDropdownClicked, setIsServicesDropdownClicked] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [isMobileLocationsDropdownOpen, setIsMobileLocationsDropdownOpen] = useState(false);
  const [isLocationsDropdownClicked, setIsLocationsDropdownClicked] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const locationsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const navRootRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsServicesDropdownClicked(false);
    setIsLocationsDropdownOpen(false);
    setIsLocationsDropdownClicked(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeAllMenus();
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(open => !open);
    setIsServicesDropdownClicked(true);
  };

  const toggleLocationsDropdown = () => {
    setIsLocationsDropdownOpen(open => !open);
    setIsLocationsDropdownClicked(true);
  };

  const servicePages = [
    { name: 'PS5 HDMI Repair', path: '/ps5-hdmi-repair/' },
    { name: 'Xbox HDMI Repair', path: '/xbox-hdmi-repair/' },
    { name: 'Nintendo Switch Repair', path: '/nintendo-switch-repair/' },
    { name: 'Laptop Screen Repair', path: '/laptop-screen-repair/' },
    { name: 'Mac & MacBook Repair', path: '/macbook-repair/' },
    { name: 'SSD Upgrades', path: '/ssd-upgrades/' },
    { name: 'Virus & Malware Removal', path: '/virus-malware-removal/' },
    { name: 'IT Support', path: '/business-it-support/' },
    { name: 'Data Recovery', path: '/data-recovery/' },
    { name: 'Custom Gaming PC', path: '/custom-gaming-pc/' },
    { name: 'Water Damage Repair', path: '/water-damage-repair/' },
    { name: 'Smartphone Repair', path: '/smartphone-screen-repair-charlotte/' },
    { name: 'Tablet & iPad Repair', path: '/tablet-ipad-repair/' },
    { name: 'Smart TV Repair', path: '/smart-tv-repair/' },
    { name: 'Printer & Router Repair', path: '/printer-router-repair/' },
    { name: 'PCB Micro-Soldering', path: '/pcb-micro-soldering/' },
    { name: 'Appliance Electronics', path: '/appliance-electronics-repair/' },
    { name: 'Graphic Design', path: '/graphic-design/' },
    { name: 'Remote Assistance', path: '/remote-assistance/' }
  ];

  const locationPages = [
    { name: 'Charlotte', path: '/charlotte-computer-repair/' },
    { name: 'Matthews', path: '/matthews-computer-repair/' },
    { name: 'Indian Trail', path: '/indian-trail-computer-repair/' },
    { name: 'Mint Hill', path: '/mint-hill-computer-repair/' },
    { name: 'Monroe', path: '/monroe-computer-repair/' },
    { name: 'Ballantyne', path: '/ballantyne-computer-repair/' },
    { name: 'Pineville', path: '/pineville-computer-repair/' },
    { name: 'Waxhaw', path: '/waxhaw-computer-repair/' },
    { name: 'Weddington', path: '/weddington-computer-repair/' },
    { name: 'Stallings', path: '/stallings-computer-repair/' }
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
      if (
        isLocationsDropdownOpen &&
        isLocationsDropdownClicked &&
        locationsDropdownRef.current &&
        locationsButtonRef.current &&
        !locationsDropdownRef.current.contains(event.target as Node) &&
        !locationsButtonRef.current.contains(event.target as Node)
      ) {
        setIsLocationsDropdownOpen(false);
        setIsLocationsDropdownClicked(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen, isServicesDropdownClicked, isLocationsDropdownOpen, isLocationsDropdownClicked]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Keep `isOpen` in sync with the breakpoint. Without this, opening the menu
  // and then widening the window leaves the panel display:none while the body
  // stays scroll-locked and every sibling stays `inert`.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1180px)');
    const sync = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    sync(mq);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Isolate background content from keyboard/AT interaction while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const navRoot = navRootRef.current;
    const parent = navRoot?.parentElement;
    if (!navRoot || !parent) return;

    const siblings = Array.from(parent.children).filter(
      (el) => el !== navRoot && !el.hasAttribute('data-mobile-menu-exempt')
    ) as HTMLElement[];

    siblings.forEach((el) => el.setAttribute('inert', ''));

    return () => {
      siblings.forEach((el) => el.removeAttribute('inert'));
    };
  }, [isOpen]);

  // Trap Tab/Shift+Tab within the open mobile menu (defense-in-depth alongside `inert`).
  useEffect(() => {
    if (!isOpen) return;
    const menu = mobileMenuRef.current;
    if (!menu) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Tab' || !menu) return;
      const focusable = menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first || !menu.contains(document.activeElement)) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !menu.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (!isOpen) return;
    const menu = mobileMenuRef.current;
    if (!menu) return;
    const firstFocusable = menu.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;

      if (isServicesDropdownOpen) {
        setIsServicesDropdownOpen(false);
        setIsServicesDropdownClicked(false);
        servicesButtonRef.current?.focus();
      } else if (isLocationsDropdownOpen) {
        setIsLocationsDropdownOpen(false);
        setIsLocationsDropdownClicked(false);
        locationsButtonRef.current?.focus();
      } else if (isOpen) {
        setIsOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isServicesDropdownOpen, isLocationsDropdownOpen, isOpen]);

  return (
    <div ref={navRootRef}>
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center gap-2 h-16">
            {/* The logo is sized by HEIGHT so it can never overhang the h-16 bar.
                It previously rendered a 160px box inside a 64px header, which
                overflowed 48px above and below and made the home link cover the
                top of the hero (elementFromPoint 100px down hit this img).
                The source PNG is 4000x4000 and is also referenced by JSON-LD on
                every blog post, so it is resized here, never replaced. */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              aria-label="KorTech Service - home"
            >
              {/* The source PNG is 4000x4000 but its visible mark fills only
                  ~59% of the width and ~29.5% of the height - the rest is
                  transparent padding. Scaling the image to ~3.4x the wrapper
                  and clipping with overflow-hidden renders a ~40px-tall mark
                  in a 64px bar, without the old 160px box that overhung the
                  header by 48px and made the home link cover the hero. */}
              <span className="block h-14 w-[132px] overflow-hidden flex-shrink-0">
                <img
                  src="/transparent-logo-1.png"
                  alt="KorTech Service Logo - Professional Computer Repair Charlotte NC Since 1998"
                  width={160}
                  height={160}
                  className="w-[200px] h-[200px] max-w-none object-contain -ml-[34px] -mt-[64px]"
                />
              </span>
            </Link>

            {/* Desktop */}
            <div className="hidden nav:flex items-center gap-0.5 min-w-0">
              <Link
                to="/"
                onClick={closeAllMenus}
                aria-current={isActive('/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  ref={servicesButtonRef}
                  onClick={toggleServicesDropdown}
                  onMouseDown={(e) => e.stopPropagation()}
                  aria-expanded={isServicesDropdownOpen}
                  aria-controls="desktop-services-menu"
                  aria-haspopup="true"
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                    isActive('/services/') || servicePages.some(s => isActive(s.path))
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

                {/* Always rendered (hidden while closed) so the service links are in the
                    prerendered HTML for crawlers; `hidden` keeps them out of the tab order. */}
                <div
                    id="desktop-services-menu"
                    hidden={!isServicesDropdownOpen}
                    ref={servicesDropdownRef}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="services-dropdown absolute top-full left-0 mt-1 w-64 max-w-[calc(100vw-2rem)] max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 backdrop-blur-sm"
                  >
                    <div className="px-6 py-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-slate-50 rounded-t-2xl">
                      <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={() => handleNavigation('/services/')}
                        className="block text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors duration-200"
                      >
                        📋 All Services Overview
                      </button>
                      <p className="text-xs text-slate-500 mt-1">Complete service catalog</p>
                    </div>
                    <div className="py-2">
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
              </div>

              <div className="relative">
                <button
                  ref={locationsButtonRef}
                  onClick={toggleLocationsDropdown}
                  onMouseDown={(e) => e.stopPropagation()}
                  aria-expanded={isLocationsDropdownOpen}
                  aria-controls="desktop-locations-menu"
                  aria-haspopup="true"
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                    isActive('/locations/') || locationPages.some(l => isActive(l.path))
                      ? 'text-brand-primary bg-blue-50'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                >
                  <span>Locations</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isLocationsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Always rendered (hidden while closed) — see services menu above. */}
                <div
                    id="desktop-locations-menu"
                    hidden={!isLocationsDropdownOpen}
                    ref={locationsDropdownRef}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="services-dropdown absolute top-full right-0 mt-1 w-64 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 backdrop-blur-sm"
                  >
                    <div className="px-6 py-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-slate-50 rounded-t-2xl">
                      <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={() => handleNavigation('/locations/')}
                        className="block text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors duration-200"
                      >
                        📍 All Service Areas
                      </button>
                      <p className="text-xs text-slate-500 mt-1">Charlotte & surrounding areas</p>
                    </div>
                    <div className="py-2 max-h-[60vh] overflow-y-auto">
                      {locationPages.map((loc, idx) => (
                        <Link
                          key={idx}
                          to={loc.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsLocationsDropdownOpen(false);
                            setIsLocationsDropdownClicked(false);
                          }}
                          className="block w-full text-left px-6 py-3 text-sm text-slate-700 hover:text-brand-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 transition-all duration-200 flex items-center space-x-3 group"
                        >
                          <div className="w-2 h-2 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="font-medium">{loc.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
              </div>

              {/* rest of your desktop links/buttons */}
              <Link
                to="/pricing/"
                onClick={closeAllMenus}
                aria-current={isActive('/pricing/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/pricing/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Plans
              </Link>
              <Link
                to="/recycling/"
                onClick={() => {
                  setIsOpen(false);
                  setIsServicesDropdownOpen(false);
                  setIsServicesDropdownClicked(false);
                }}
                aria-current={isActive('/recycling/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/recycling/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Recycling
              </Link>
              <Link
                to="/contact/"
                onClick={closeAllMenus}
                aria-current={isActive('/contact/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/contact/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/about/"
                onClick={closeAllMenus}
                aria-current={isActive('/about/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/about/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/blog/"
                onClick={closeAllMenus}
                aria-current={isActive('/blog/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/blog/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/mail-in-form/"
                onClick={closeAllMenus}
                aria-current={isActive('/mail-in-form/') ? 'page' : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  isActive('/mail-in-form/') ? 'text-brand-primary bg-blue-50' : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                Mail-In Repair Form
              </Link>

              {/* The full phone numbers need 360px, which does not fit beside the
                  links until ~1440px. Below that the numbers are hidden VISUALLY
                  only - they stay in the accessible name via aria-label and in
                  the DOM via sr-only, so screen readers and crawlers still read
                  them. href and data-track-source are unchanged: analytics.ts
                  tracks tel:/sms: clicks by those exact attributes. */}
              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-200 flex-shrink-0">
                <a
                  href="tel:704-246-7642"
                  data-track-source="navbar_desktop"
                  aria-label="Call KorTech Service at 704-246-7642"
                  className={`bg-brand-dark hover:bg-slate-900 text-white px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-1 whitespace-nowrap flex-shrink-0 tech-glow ${FOCUS_RING}`}
                >
                  <Phone className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  <span>Call</span>
                  <span className="hidden 2xl:inline">&nbsp;704-246-7642</span>
                  <span className="sr-only 2xl:hidden">704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  data-track-source="navbar_desktop"
                  aria-label="Text KorTech Service at 980-888-5300"
                  className={`border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center gap-1 whitespace-nowrap flex-shrink-0 tech-border ${FOCUS_RING}`}
                >
                  <MessageSquare className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  <span>Text</span>
                  <span className="hidden 2xl:inline">&nbsp;980-888-5300</span>
                  <span className="sr-only 2xl:hidden">980-888-5300</span>
                </a>
              </div>
            </div>

            {/* Mobile toggle - MUST use the same `nav:` breakpoint as the
                desktop nav and the panel below, or a width range renders
                neither. */}
            <div className="nav:hidden flex-shrink-0">
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsOpen(o => !o)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className={`text-slate-600 hover:text-brand-primary p-2.5 -mr-1 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center ${FOCUS_RING}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="nav:hidden fixed top-16 right-0 bottom-0 left-0 z-40 bg-white overflow-y-auto overscroll-contain"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 border-t border-slate-200">
            <button
              onClick={() => handleNavigation('/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              About
            </button>

            <div className="relative mb-2">
              <button
                onClick={() => setIsMobileServicesDropdownOpen(o => !o)}
                aria-expanded={isMobileServicesDropdownOpen}
                aria-controls="mobile-services-menu"
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesDropdownOpen && (
                <div id="mobile-services-menu" className="bg-slate-50 rounded-lg ml-4 mt-2 mb-4 max-h-[30vh] overflow-y-auto">
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

            <div className="relative mb-2">
              <button
                onClick={() => setIsMobileLocationsDropdownOpen(o => !o)}
                aria-expanded={isMobileLocationsDropdownOpen}
                aria-controls="mobile-locations-menu"
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-brand-primary hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Locations</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileLocationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileLocationsDropdownOpen && (
                <div id="mobile-locations-menu" className="bg-slate-50 rounded-lg ml-4 mt-2 mb-4 max-h-[30vh] overflow-y-auto">
                  <Link
                    to="/locations/"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileLocationsDropdownOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-slate-100 transition-all rounded-lg flex items-center"
                  >
                    All Service Areas
                    <ChevronRight className="h-4 w-4 ml-auto text-slate-400" />
                  </Link>
                  {locationPages.map((loc, idx) => (
                    <Link
                      key={idx}
                      to={loc.path}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileLocationsDropdownOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block px-4 py-2 text-sm text-slate-600 hover:text-brand-primary hover:bg-slate-100 transition-all rounded-lg flex items-center"
                    >
                      {loc.name}
                      <ChevronRight className="h-4 w-4 ml-auto text-slate-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/pricing/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Plans
            </button>
            <Link
              to="/recycling/"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Free Recycling
            </Link>
            <button
              onClick={() => handleNavigation('/contact/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('/blog/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation('/mail-in-form/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium min-h-[44px] text-slate-600 hover:text-brand-primary hover:bg-slate-50 ${FOCUS_RING}`}
            >
              Mail-In Repair Form
            </button>

            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
              <a
                href="tel:704-246-7642"
                data-track-source="navbar_mobile"
                className="bg-brand-dark hover:bg-slate-900 text-white py-3 rounded-xl font-semibold text-base text-center flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                data-track-source="navbar_mobile"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white py-3 rounded-xl font-semibold text-base text-center flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Text 980-888-5300</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;