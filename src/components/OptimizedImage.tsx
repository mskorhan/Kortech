import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
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

  // Generate WebP and AVIF sources
  const webpSrc = src.includes('.webp') ? src : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.includes('.avif') ? src : src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
  
  // Generate srcset for different resolutions
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('pexels.com')) {
      // For Pexels images, use their URL parameters for different sizes
      const baseUrl = baseSrc.split('?')[0];
      return `${baseUrl}?w=${Math.round(width * 0.5)}&h=${Math.round(height * 0.5)} ${Math.round(width * 0.5)}w, ${baseUrl}?w=${width}&h=${height} ${width}w, ${baseUrl}?w=${Math.round(width * 1.5)}&h=${Math.round(height * 1.5)} ${Math.round(width * 1.5)}w`;
    }
    return baseSrc;
  };

  const shouldShowImage = isInView || priority;

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      ref={imgRef}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {!isLoaded && shouldShowImage && (
        <div 
          className="absolute inset-0 bg-slate-200 animate-pulse"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      
      {shouldShowImage && (
        <picture>
          {/* AVIF source for best compression */}
          <source 
            srcSet={generateSrcSet(avifSrc)} 
            type="image/avif" 
            sizes={sizes} 
          />
          
          {/* WebP source for modern browsers */}
          <source 
            srcSet={generateSrcSet(webpSrc)} 
            type="image/webp" 
            sizes={sizes} 
          />
          
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
            } w-full h-full object-cover`}
            sizes={sizes}
            srcSet={generateSrcSet(src)}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;