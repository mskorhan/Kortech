import React from 'react';

// Critical CSS component for above-the-fold content
const CriticalCSS: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical above-the-fold styles */
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }
        
        /* Hero section critical styles */
        .hero-section {
          background: linear-gradient(135deg, #f1f5f9 0%, #dbeafe 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: clamp(1.125rem, 4vw, 1.5rem);
          color: #475569;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .btn-primary {
          background: #0099FF;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: #071930;
          transform: scale(1.05);
        }
        
        /* Prevent layout shift */
        img {
          height: auto;
          max-width: 100%;
        }
        
        /* Loading state */
        .loading-placeholder {
          background: #e2e8f0;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `
    }} />
  );
};

export default CriticalCSS;