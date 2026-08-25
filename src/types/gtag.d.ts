type GtagConfigValue = string | number | boolean | undefined;
type ConsentStatus = 'granted' | 'denied';
type ConsentParams = {
  analytics_storage?: ConsentStatus;
  ad_storage?: ConsentStatus;
  ad_user_data?: ConsentStatus;
  ad_personalization?: ConsentStatus;
};

declare global {
  interface Window {
    gtag: {
      (command: 'consent', action: 'default' | 'update', params: ConsentParams): void;
      (
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
      ): void;
    };
    dataLayer: unknown[];
  }
}

export {};