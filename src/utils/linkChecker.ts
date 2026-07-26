// Link checker utility to validate internal and external links
export interface LinkCheckResult {
  url: string;
  status: 'valid' | 'broken' | 'warning';
  message?: string;
}

export const checkInternalLinks = async (links: string[]): Promise<LinkCheckResult[]> => {
  const results: LinkCheckResult[] = [];
  
  for (const link of links) {
    try {
      // Check if it's an internal route
      if (link.startsWith('/') && !link.startsWith('//')) {
        // For internal routes, we'll assume they're valid if they match our route patterns
        const validRoutes = [
          '/', '/about', '/services', '/pricing', '/contact', '/recycling', 
          '/terms', '/privacy-policy', '/mail-in-form', '/blog',
          '/ps5-hdmi-repair', '/xbox-hdmi-repair', '/laptop-screen-repair',
          '/ssd-upgrades', '/virus-malware-removal', '/it-support',
          '/data-recovery', '/custom-gaming-pc', '/water-damage-repair',
          '/smartphone-screen-repair-charlotte', '/tablet-ipad-repair',
          '/smart-tv-repair', '/printer-router-repair', '/pcb-micro-soldering',
          '/appliance-electronics-repair', '/nintendo-switch-repair',
          '/charlotte-computer-repair', '/matthews-computer-repair',
          '/indian-trail-computer-repair', '/mint-hill-computer-repair',
          '/monroe-computer-repair', '/locations', '/graphic-design',
          '/remote-assistance', '/business-it-support'
        ];
        
        const isValidRoute = validRoutes.includes(link) || 
                           link.startsWith('/blog/') ||
                           link.includes('computer-repair');
        
        results.push({
          url: link,
          status: isValidRoute ? 'valid' : 'warning',
          message: isValidRoute ? undefined : 'Route may not exist'
        });
      } else {
        results.push({
          url: link,
          status: 'valid',
          message: 'External link - manual verification recommended'
        });
      }
    } catch (error) {
      results.push({
        url: link,
        status: 'broken',
        message: `Error checking link: ${error}`
      });
    }
  }
  
  return results;
};

export const validateImageSources = (imageSources: string[]): LinkCheckResult[] => {
  const results: LinkCheckResult[] = [];
  
  for (const src of imageSources) {
    if (src.startsWith('http')) {
      // External image - assume valid for Pexels URLs
      if (src.includes('pexels.com')) {
        results.push({
          url: src,
          status: 'valid',
          message: 'Pexels image source'
        });
      } else {
        results.push({
          url: src,
          status: 'warning',
          message: 'External image - verify availability'
        });
      }
    } else if (src.startsWith('/')) {
      // Local image - check if it exists in public folder
      const publicImages = [
        '/transparent-logo-1.png',
        '/Electronics recycling image.png',
        '/favicon.ico',
        '/favicon-16x16.png',
        '/favicon-32x32.png',
        '/apple-touch-icon.png',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png'
      ];
      
      const exists = publicImages.includes(src);
      results.push({
        url: src,
        status: exists ? 'valid' : 'broken',
        message: exists ? undefined : 'Image file not found in public folder'
      });
    }
  }
  
  return results;
};