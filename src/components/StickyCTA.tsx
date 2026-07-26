import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

interface StickyCTAProps {
  showOnMobile?: boolean;
  showOnDesktop?: boolean; 
}

const StickyCTA: React.FC<StickyCTAProps> = ({ 
  showOnMobile = true, 
  showOnDesktop = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      if (scrolled && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-500 shadow-2xl transform transition-transform duration-300 ${
      showOnMobile ? 'block' : 'hidden'
    } ${showOnDesktop ? 'lg:block' : 'lg:hidden'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800 mb-1">
              Need Computer Repair?
            </p>
            <p className="text-xs text-slate-600">
              Same-day Service Available • Call/Text Now!
            </p>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <a
              href="tel:704-246-7642"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center space-x-1 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
            <a
              href="sms:980-888-5300"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center space-x-1 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Text</span>
            </a>
            <button
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;