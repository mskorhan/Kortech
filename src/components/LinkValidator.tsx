import React, { useEffect, useState } from 'react';
import { checkInternalLinks, validateImageSources, LinkCheckResult } from '../utils/linkChecker';

interface LinkValidatorProps {
  enabled?: boolean;
}

const LinkValidator: React.FC<LinkValidatorProps> = ({ enabled = false }) => {
  const [results, setResults] = useState<LinkCheckResult[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!enabled || process.env.NODE_ENV === 'production') return;

    const validateLinks = async () => {
      setIsChecking(true);
      
      // Extract all links from the current page
      const links = Array.from(document.querySelectorAll('a[href]'))
        .map(a => (a as HTMLAnchorElement).href)
        .filter(href => href.startsWith('/') || href.includes('kortechservice.com'));
      
      // Extract all image sources
      const images = Array.from(document.querySelectorAll('img[src]'))
        .map(img => (img as HTMLImageElement).src);
      
      const linkResults = await checkInternalLinks(links);
      const imageResults = validateImageSources(images);
      
      setResults([...linkResults, ...imageResults]);
      setIsChecking(false);
    };

    // Run validation after a delay to allow page to fully load
    const timer = setTimeout(validateLinks, 2000);
    return () => clearTimeout(timer);
  }, [enabled]);

  if (!enabled || process.env.NODE_ENV === 'production') return null;

  const brokenLinks = results.filter(r => r.status === 'broken');
  const warnings = results.filter(r => r.status === 'warning');

  if (results.length === 0 && !isChecking) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h4 className="font-bold text-sm mb-2">Link Validation</h4>
      {isChecking ? (
        <p className="text-sm text-gray-600">Checking links...</p>
      ) : (
        <div className="text-sm">
          <p className="text-green-600">{results.filter(r => r.status === 'valid').length} valid</p>
          {warnings.length > 0 && (
            <p className="text-yellow-600">{warnings.length} warnings</p>
          )}
          {brokenLinks.length > 0 && (
            <p className="text-red-600">{brokenLinks.length} broken</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkValidator;