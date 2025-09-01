// Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, parameters);
    } catch (error) {
      console.warn('Analytics event tracking failed:', error);
    }
  }
};

export const trackServiceRequest = (service: string, value: number = 150) => {
  try {
    trackEvent('generate_lead', {
      currency: 'USD',
      value,
      service_type: service,
      event_category: 'Service Request',
      event_label: service
    });
  } catch (error) {
    console.warn('Service request tracking failed:', error);
  }
};

export const trackPhoneCall = (source: string = 'unknown') => {
  try {
    trackEvent('phone_call', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      source
    });
  } catch (error) {
    console.warn('Phone call tracking failed:', error);
  }
};

export const trackTextMessage = (source: string = 'unknown') => {
  try {
    trackEvent('text_message', {
      event_category: 'Contact',
      event_label: 'Text Message',
      source
    });
  } catch (error) {
    console.warn('Text message tracking failed:', error);
  }
};

export const trackFormSubmission = (formType: string) => {
  try {
    trackEvent('form_submit', {
      event_category: 'Form',
      event_label: formType
    });
  } catch (error) {
    console.warn('Form submission tracking failed:', error);
  }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    try {
      window.gtag('config', measurementId, {
        page_path: pagePath,
        page_title: pageTitle
      });
    } catch (error) {
      console.warn('Page view tracking failed:', error);
    }
  }
};