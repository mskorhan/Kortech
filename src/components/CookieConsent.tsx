import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getStoredConsent, setConsentChoice } from '../utils/consent';

export const OPEN_COOKIE_SETTINGS_EVENT = 'kortech:open-cookie-settings';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    setConsentChoice(choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p>
              This website uses cookies for analytics to help us understand site usage. Choose whether you're okay with that below — essential site functionality works either way.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/privacy-policy/"
              className="text-blue-300 hover:text-blue-100 text-sm underline"
            >
              Learn More
            </a>
            <button
              className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
              onClick={() => handleChoice('declined')}
            >
              Decline
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              onClick={() => handleChoice('accepted')}
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
