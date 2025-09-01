import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImage = new Image();
      heroImage.src = 'https://images.pexels.com/photos/2838886/pexels-photo-2838886.jpeg?w=1200&h=900';
      
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      document.head.appendChild(fontLink);
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Load Google Fonts asynchronously
      const googleFontsLink = document.createElement('link');
      googleFontsLink.rel = 'stylesheet';
      googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      googleFontsLink.media = 'print';
      googleFontsLink.onload = () => {
        googleFontsLink.media = 'all';
      };
      document.head.appendChild(googleFontsLink);
    };

    // Optimize images for better loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('loading-placeholder');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Run optimizations
    preloadCriticalResources();
    
    // Defer non-critical operations
    requestIdleCallback(() => {
      deferNonCriticalJS();
      optimizeImages();
    });

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;