type GtagConfigValue = string | number | boolean | undefined;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_path?: string;
        page_title?: string;
        currency?: string;
        value?: number;
        service_type?: string;
        event_category?: string;
        event_label?: string;
        source?: string;
        [key: string]: GtagConfigValue;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

export {};