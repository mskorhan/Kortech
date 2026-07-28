import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import LinkValidator from './components/LinkValidator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { trackPageView, initDelegatedContactTracking } from './utils/analytics';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Recycling = lazy(() => import('./pages/Recycling'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const MailInForm = lazy(() => import('./pages/MailInForm'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Blog = lazy(() => import('./pages/Blog'));

// Service Pages
const GraphicDesign = lazy(() => import('./pages/services/GraphicDesign'));
const RemoteAssistance = lazy(() => import('./pages/services/RemoteAssistance'));

// Service Landing Pages
const PS5HDMIRepair = lazy(() => import('./pages/services/PS5HDMIRepair'));
const XboxHDMIRepair = lazy(() => import('./pages/services/XboxHDMIRepair'));
const LaptopScreenRepair = lazy(() => import('./pages/services/LaptopScreenRepair'));
const SSDUpgrades = lazy(() => import('./pages/services/SSDUpgrades'));
const VirusMalwareRemoval = lazy(() => import('./pages/services/VirusMalwareRemoval'));
const DataRecovery = lazy(() => import('./pages/services/DataRecovery'));
const CustomGamingPC = lazy(() => import('./pages/services/CustomGamingPC'));
const WaterDamageRepair = lazy(() => import('./pages/services/WaterDamageRepair'));
const SmartphoneRepair = lazy(() => import('./pages/services/SmartphoneRepair'));
const TabletIPadRepair = lazy(() => import('./pages/services/TabletIPadRepair'));
const SmartTVRepair = lazy(() => import('./pages/services/SmartTVRepair'));
const PrinterRouterRepair = lazy(() => import('./pages/services/PrinterRouterRepair'));
const PCBMicroSoldering = lazy(() => import('./pages/services/PCBMicroSoldering'));
const ApplianceElectronicsRepair = lazy(() => import('./pages/services/ApplianceElectronicsRepair'));
const BusinessITSupport = lazy(() => import('./pages/services/ITSupport'));
const NintendoSwitchRepair = lazy(() => import('./pages/services/NintendoSwitchRepair'));

// Location Pages
const Charlotte = lazy(() => import('./pages/locations/Charlotte'));
const Matthews = lazy(() => import('./pages/locations/Matthews'));
const IndianTrail = lazy(() => import('./pages/locations/IndianTrail'));
const MintHill = lazy(() => import('./pages/locations/MintHill'));
const Monroe = lazy(() => import('./pages/locations/Monroe'));
const Ballantyne = lazy(() => import('./pages/locations/Ballantyne'));
const Pineville = lazy(() => import('./pages/locations/Pineville'));
const Waxhaw = lazy(() => import('./pages/locations/Waxhaw'));
const Weddington = lazy(() => import('./pages/locations/Weddington'));
const Stallings = lazy(() => import('./pages/locations/Stallings'));
const Locations = lazy(() => import('./pages/locations/Locations'));
const HowToKnowWhenToReplacePhoneBattery = lazy(() => import('./pages/blog/HowToKnowWhenToReplacePhoneBattery'));
const WhatIsPCBMicroSoldering = lazy(() => import('./pages/blog/WhatIsPCBMicroSoldering'));
const Top5SignsSmartTVNeedsRepair = lazy(() => import('./pages/blog/Top5SignsSmartTVNeedsRepair'));
const SSDUpgradesForLaptops2025 = lazy(() => import('./pages/blog/SSDUpgradesForLaptops2025'));
const DataRecoveryCharlotte2025 = lazy(() => import('./pages/blog/DataRecoveryCharlotte2025'));
const StepsToRemoveVirusFromWindowsPC = lazy(() => import('./pages/blog/StepsToRemoveVirusFromWindowsPC'));
const HowToFixBrokenPS5HDMIPort = lazy(() => import('./pages/blog/HowToFixBrokenPS5HDMIPort'));
const CustomGamingPCBuildGuide2025 = lazy(() => import('./pages/blog/CustomGamingPCBuildGuide2025'));
const SignsHardDriveFailingDataRecoveryTips = lazy(() => import('./pages/blog/SignsHardDriveFailingDataRecoveryTips'));
const LaptopScreenRepairGuideCharlotte = lazy(() => import('./pages/blog/LaptopScreenRepairGuideCharlotte'));
const NintendoSwitchRepairGuide = lazy(() => import('./pages/blog/NintendoSwitchRepairGuide'));
const XboxHDMIRepairGuide = lazy(() => import('./pages/blog/XboxHDMIRepairGuide'));
const VirusRemovalGuideCharlotte = lazy(() => import('./pages/blog/VirusRemovalGuideCharlotte'));
const WhatToDoWhenDeviceGetsWetCharlotte = lazy(() => import('./pages/blog/WhatToDoWhenDeviceGetsWetCharlotte'));
const SignsYourBusinessNeedsITSupport = lazy(() => import('./pages/blog/SignsYourBusinessNeedsITSupport'));
const PrinterWontConnectToWifiFix = lazy(() => import('./pages/blog/PrinterWontConnectToWifiFix'));
const IPadScreenRepairCostGuide = lazy(() => import('./pages/blog/iPadScreenRepairCostGuide'));
const SmallBusinessLogoDesignChecklist = lazy(() => import('./pages/blog/SmallBusinessLogoDesignChecklist'));

// ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    // Only scroll to top if there's no hash and it's not a POP navigation (back/forward)
    // or if it's a POP navigation to a different pathname
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } else {
      // If there's a hash, scroll to the element with that id
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, navigationType]);

  React.useEffect(() => {
    // The initial pageview is already sent by the gtag snippet in index.html;
    // only track subsequent client-side route changes here.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
}

function App() {
  React.useEffect(() => {
    initDelegatedContactTracking();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <LinkValidator enabled={false} />
        <CookieConsent />
        <Navbar />
        <main id="main-content">
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/mail-in-form" element={<MailInForm />} />
          <Route path="/blog" element={<Blog />} />

          {/* Service Pages */}
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/remote-assistance" element={<RemoteAssistance />} />
          
          <Route path="/laptop-repair" element={<Navigate to="/laptop-screen-repair" replace />} />
          {/* Service Landing Pages */}
          <Route path="/ps5-hdmi-repair" element={<PS5HDMIRepair />} />
          <Route path="/xbox-hdmi-repair" element={<XboxHDMIRepair />} />
          <Route path="/laptop-screen-repair" element={<LaptopScreenRepair />} />
          <Route path="/ssd-upgrades" element={<SSDUpgrades />} />
          <Route path="/virus-malware-removal" element={<VirusMalwareRemoval />} />
          <Route path="/it-support" element={<Navigate to="/business-it-support" replace />} />
          <Route path="/business-it-support" element={<BusinessITSupport />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/custom-gaming-pc" element={<CustomGamingPC />} />
          <Route path="/water-damage-repair" element={<WaterDamageRepair />} />
          <Route path="/smartphone-screen-repair-charlotte" element={<SmartphoneRepair />} />
          <Route path="/tablet-ipad-repair" element={<TabletIPadRepair />} />
          <Route path="/smart-tv-repair" element={<SmartTVRepair />} />
          <Route path="/printer-router-repair" element={<PrinterRouterRepair />} />
          <Route path="/pcb-micro-soldering" element={<PCBMicroSoldering />} />
          <Route path="/appliance-electronics-repair" element={<ApplianceElectronicsRepair />} />
          <Route path="/nintendo-switch-repair" element={<NintendoSwitchRepair />} />
          
          {/* Location Pages */}
          <Route path="/charlotte-computer-repair" element={<Charlotte />} />
          <Route path="/matthews-computer-repair" element={<Matthews />} />
          <Route path="/indian-trail-computer-repair" element={<IndianTrail />} />
          <Route path="/mint-hill-computer-repair" element={<MintHill />} />
          <Route path="/monroe-computer-repair" element={<Monroe />} />
          <Route path="/ballantyne-computer-repair" element={<Ballantyne />} />
          <Route path="/pineville-computer-repair" element={<Pineville />} />
          <Route path="/waxhaw-computer-repair" element={<Waxhaw />} />
          <Route path="/weddington-computer-repair" element={<Weddington />} />
          <Route path="/stallings-computer-repair" element={<Stallings />} />
          <Route path="/locations" element={<Locations />} />
          
          {/* Blog Posts */}
          <Route path="/blog/how-to-know-when-to-replace-phone-battery" element={<HowToKnowWhenToReplacePhoneBattery />} />
          <Route path="/blog/what-is-pcb-micro-soldering" element={<WhatIsPCBMicroSoldering />} />
          <Route path="/blog/top-5-signs-smart-tv-needs-repair" element={<Top5SignsSmartTVNeedsRepair />} />
          <Route path="/blog/best-ssd-upgrade-old-laptop-2025" element={<SSDUpgradesForLaptops2025 />} />
          <Route path="/blog/data-recovery-charlotte-2025" element={<DataRecoveryCharlotte2025 />} />
          <Route path="/blog/steps-to-remove-virus-from-windows-pc" element={<StepsToRemoveVirusFromWindowsPC />} />
          <Route path="/blog/how-to-fix-broken-ps5-hdmi-port" element={<HowToFixBrokenPS5HDMIPort />} />
          <Route path="/blog/custom-gaming-pc-build-guide-2025" element={<CustomGamingPCBuildGuide2025 />} />
          <Route path="/blog/signs-hard-drive-failing-data-recovery-tips" element={<SignsHardDriveFailingDataRecoveryTips />} />
          <Route path="/blog/laptop-screen-repair-guide-charlotte" element={<LaptopScreenRepairGuideCharlotte />} />
          <Route path="/blog/nintendo-switch-repair-guide" element={<NintendoSwitchRepairGuide />} />
          <Route path="/blog/xbox-hdmi-repair-guide" element={<XboxHDMIRepairGuide />} />
          <Route path="/blog/virus-removal-guide-charlotte" element={<VirusRemovalGuideCharlotte />} />
          <Route path="/blog/what-to-do-when-device-gets-wet-charlotte" element={<WhatToDoWhenDeviceGetsWetCharlotte />} />
          <Route path="/blog/signs-your-business-needs-it-support" element={<SignsYourBusinessNeedsITSupport />} />
          <Route path="/blog/printer-wont-connect-to-wifi-fix" element={<PrinterWontConnectToWifiFix />} />
          <Route path="/blog/ipad-screen-repair-cost-guide" element={<IPadScreenRepairCostGuide />} />
          <Route path="/blog/small-business-logo-design-checklist" element={<SmallBusinessLogoDesignChecklist />} />
        </Routes>
        </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;