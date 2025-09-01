import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: any[];
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  location?: string;
  service?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schema,
  ogImage = "https://www.kortechservice.com/transparent-logo-1.png",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  location,
  service
}) => {
  const currentLocation = useLocation();
  // Clean canonical URL - remove parameters and ensure proper format
  const cleanCanonicalPath = canonicalUrl ? canonicalUrl.split('?')[0].split('#')[0] : currentLocation.pathname.split('?')[0].split('#')[0];
  const fullCanonicalUrl = `https://www.kortechservice.com${cleanCanonicalPath}`;
  const fullOgUrl = ogUrl || fullCanonicalUrl || `https://www.kortechservice.com${currentLocation.pathname}`;
  
  // Dynamic title and description based on page
  const dynamicTitle = title || 'KorTech Service • Computer Repair Charlotte NC';
  const dynamicDescription = description || 'Professional computer repair Charlotte NC. Mac & PC repair, virus removal, data recovery & IT support. Call 704-246-7642 for free quote!';

  // Generate breadcrumb schema for all pages
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kortechservice.com"
      }
    ]
  };

  // Add current page to breadcrumb if not home
  if (canonicalUrl && canonicalUrl !== '/') {
    const pathParts = canonicalUrl.split('/').filter(Boolean);
    pathParts.forEach((part, index) => {
      const position = index + 2;
      const name = part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const item = `https://www.kortechservice.com/${pathParts.slice(0, index + 1).join('/')}`;
      
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": position,
        "name": name,
        "item": item
      });
    });
  }

  const allSchemas = [breadcrumbSchema, ...(schema || [])];

  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="description" content={dynamicDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Viewport and mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      {fullOgUrl && <meta property="og:url" content={fullOgUrl} />}
      <meta property="og:title" content={dynamicTitle} />
      <meta property="og:description" content={dynamicDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KorTech Service" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={dynamicTitle} />
      <meta name="twitter:description" content={dynamicDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@kortechservice" />
      <meta name="twitter:creator" content="@kortechservice" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Local business specific */}
      {location && <meta name="geo.placename" content={location} />}
      {service && <meta name="service" content={service} />}

      {/* Schema.org JSON-LD */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;