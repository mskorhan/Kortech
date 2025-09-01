import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before the image comes into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
  };

  // Generate WebP source if the original is not already WebP
  const webpSrc = src.includes('.webp') ? src : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.includes('.avif') ? src : src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
  const shouldShowImage = isInView || priority;

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {!isLoaded && shouldShowImage && (
        <div 
          className="absolute inset-0 bg-slate-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      {shouldShowImage && (
        <picture>
          {/* AVIF source for best compression */}
          <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
          
          {/* WebP source for modern browsers */}
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          
          {/* Fallback for older browsers */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            sizes={sizes}
          />
        </picture>
      )}
    </div>
  );
};

export default ImageOptimizer;