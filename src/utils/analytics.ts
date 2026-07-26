// Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackServiceRequest = (service: string, value: number = 150) => {
  trackEvent('generate_lead', {
    currency: 'USD',
    value,
    service_type: service,
    event_category: 'Service Request',
    event_label: service
  });
};

export const trackPhoneCall = (source: string = 'unknown') => {
  trackEvent('phone_call', {
    event_category: 'Contact',
    event_label: 'Phone Call',
    source
  });
};

export const trackTextMessage = (source: string = 'unknown') => {
  trackEvent('text_message', {
    event_category: 'Contact',
    event_label: 'Text Message',
    source
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: formType
  });
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};