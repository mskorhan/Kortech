import React, { useEffect } from 'react';

interface LazyLoadCSSProps {
  href: string;
  media?: string;
}

const LazyLoadCSS: React.FC<LazyLoadCSSProps> = ({ href, media = 'all' }) => {
  useEffect(() => {
    // Load CSS asynchronously after page load
    const loadCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = media;
      document.head.appendChild(link);
    };

    // Load after page is fully loaded
    if (document.readyState === 'complete') {
      loadCSS();
    } else {
      window.addEventListener('load', loadCSS);
      return () => window.removeEventListener('load', loadCSS);
    }
  }, [href, media]);

  return null;
};

export default LazyLoadCSS;