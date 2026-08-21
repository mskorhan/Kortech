import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: Record<string, unknown>[];
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  location?: string;
  service?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schema,
  ogImage = "https://www.kortechservice.com/og-image.png",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  location,
  service,
  noindex = false
}) => {
  const currentLocation = useLocation();
  const fullCanonicalUrl = canonicalUrl ? `https://www.kortechservice.com${canonicalUrl}` : undefined;
  const fullOgUrl = ogUrl || fullCanonicalUrl || `https://www.kortechservice.com${currentLocation.pathname}`;
  
  // Dynamic title and description based on page
  const dynamicTitle = title || 'KorTech Service • Computer Repair Charlotte NC';
  const dynamicDescription = description || 'Professional computer repair, Mac & PC repair, virus removal, data recovery & IT support in Charlotte, Matthews, Indian Trail, Mint Hill & surrounding areas. Call 704-246-7642 for free diagnostics!';

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

  // Sitewide LocalBusiness/Service facts every page should carry. Pages that
  // pass their own schema (e.g. Home's richer LocalBusiness with live review
  // data) supply it via the `schema` prop instead - only fall back to these
  // defaults when the page doesn't already declare that @type, so no page
  // ships zero or two entities of the same type.
  const pageSchemaTypes = new Set((schema || []).map((s) => s['@type']));

  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KorTech Service",
    "description": "Professional computer repair, Mac & PC repair, virus removal, data recovery & IT support in Charlotte, Matthews, Indian Trail, Mint Hill & surrounding areas. Call 704-246-7642 for free diagnostics!",
    "url": "https://www.kortechservice.com",
    "telephone": "704-246-7642",
    "foundingDate": "1998",
    "hasMap": "https://www.google.com/maps/place/Kortech+Service/@35.14047,-80.7400749,17z/data=!4m15!1m8!3m7!1s0x88542143faefb7af:0x9541d45ffcb5daa0!2s1721+Sardis+Rd+N+%237a,+Charlotte,+NC+28270!3b1!8m2!3d35.14047!4d-80.7375!16s%2Fg%2F11n_z1fxk6!3m5!1s0x885426acd2c33ca7:0x24292ff6e9c5f155!8m2!3d35.140474!4d-80.737464!16s%2Fg%2F1v_w31h1",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1721 Sardis Rd N, Suite 7A",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "postalCode": "28270",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.1495",
      "longitude": "-80.8414"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/KortechService/",
      "https://www.instagram.com/kortechservices",
      "https://twitter.com/kortechservice",
      "https://www.linkedin.com/company/kortechservice",
      "https://www.youtube.com/@kortechservice",
      "https://g.page/kortechservice"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "35.2271",
        "longitude": "-80.8431"
      },
      "geoRadius": "50000",
      "addressLocality": [
        "Charlotte",
        "Matthews",
        "Indian Trail",
        "Pineville",
        "Mint Hill",
        "Ballantyne",
        "South Charlotte"
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer Repair",
            "description": "Mac and PC repair services including hardware and software troubleshooting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Recovery",
            "description": "Professional data recovery from failed hard drives and corrupted devices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Support",
            "description": "Comprehensive IT support for businesses and individuals"
          }
        }
      ]
    }
  };

  const defaultServiceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Computer Repair Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "KorTech Service"
    },
    "areaServed": [
      { "@type": "City", "name": "Charlotte", "addressRegion": "NC" },
      { "@type": "City", "name": "Matthews", "addressRegion": "NC" },
      { "@type": "City", "name": "Pineville", "addressRegion": "NC" },
      { "@type": "City", "name": "Mint Hill", "addressRegion": "NC" },
      { "@type": "Place", "name": "Ballantyne", "addressRegion": "NC" },
      { "@type": "Place", "name": "South Charlotte", "addressRegion": "NC" }
    ]
  };

  const allSchemas = [
    breadcrumbSchema,
    ...(pageSchemaTypes.has('LocalBusiness') ? [] : [defaultLocalBusinessSchema]),
    ...(pageSchemaTypes.has('Service') ? [] : [defaultServiceAreaSchema]),
    ...(schema || [])
  ];

  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="description" content={dynamicDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
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
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />
      <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, follow" : "index, follow"} />
      
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