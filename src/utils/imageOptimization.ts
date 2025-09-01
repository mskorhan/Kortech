// Image optimization utilities

export interface ImageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const generateSrcSet = (src: string, sizes: ImageSizes): string => {
  if (src.includes('pexels.com')) {
    // For Pexels images, use their URL parameters for different sizes
    const baseUrl = src.split('?')[0];
    return [
      `${baseUrl}?w=${sizes.mobile}&h=${Math.round(sizes.mobile * 0.75)} ${sizes.mobile}w`,
      `${baseUrl}?w=${sizes.tablet}&h=${Math.round(sizes.tablet * 0.75)} ${sizes.tablet}w`,
      `${baseUrl}?w=${sizes.desktop}&h=${Math.round(sizes.desktop * 0.75)} ${sizes.desktop}w`
    ].join(', ');
  }
  
  // For local images, return the original src
  return src;
};

export const generateWebPSrc = (src: string): string => {
  if (src.includes('pexels.com')) {
    return src + '&fm=webp';
  }
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};

export const generateAVIFSrc = (src: string): string => {
  if (src.includes('pexels.com')) {
    return src + '&fm=avif';
  }
  return src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif');
};

export const getOptimalSizes = (maxWidth: number): string => {
  return `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${maxWidth}px`;
};