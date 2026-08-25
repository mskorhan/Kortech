// Basic Consent Mode v2 state: gates GA4 (analytics_storage) only. This site has
// no Google Ads/remarketing tag installed, so ad_storage/ad_user_data/ad_personalization
// stay permanently denied rather than being tied to the same Accept/Decline choice.
const STORAGE_KEY = 'cookieConsent';
const GA_MEASUREMENT_ID = 'G-E7XS9FQ2E6';

export type ConsentChoice = 'accepted' | 'declined';

export const getStoredConsent = (): ConsentChoice | null => {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === 'accepted' || value === 'declined' ? value : null;
};

export const hasAnalyticsConsent = (): boolean => getStoredConsent() === 'accepted';

const ensureGtagShim = () => {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    } as Window['gtag'];
  }
};

let gtagScriptLoaded = false;

const loadGtagScript = () => {
  if (gtagScriptLoaded || document.getElementById('ga4-gtag-script')) {
    gtagScriptLoaded = true;
    return;
  }
  const script = document.createElement('script');
  script.id = 'ga4-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  gtagScriptLoaded = true;
};

// Grants analytics_storage and starts GA4 measurement (loads gtag.js if not already
// loaded, sends the consent update, then an initial config/pageview).
export const grantAnalyticsConsent = () => {
  if (typeof window === 'undefined') return;
  ensureGtagShim();
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  loadGtagScript();
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    page_title: document.title
  });
};

export const setConsentChoice = (choice: ConsentChoice) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, choice);
  if (choice === 'accepted') {
    grantAnalyticsConsent();
  }
};

// Runs once on app init. The Consent Mode v2 default (all denied) is already
// established by the inline script in index.html, which must run before this
// module loads — this only re-initializes measurement for a returning visitor
// who previously accepted.
export const initConsentMode = () => {
  if (typeof window === 'undefined') return;
  if (getStoredConsent() === 'accepted') {
    grantAnalyticsConsent();
  }
};
