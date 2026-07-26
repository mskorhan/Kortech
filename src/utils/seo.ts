// SEO utility functions
export const generatePageTitle = (pageTitle: string, includeCompany = true): string => {
  const companyName = 'KorTech Service';
  const location = 'Charlotte NC';
  
  if (!includeCompany) return pageTitle;
  
  return `${pageTitle} • ${companyName} • ${location}`;
};

export const generateMetaDescription = (
  service: string,
  location: string = 'Charlotte, Matthews, Indian Trail, Mint Hill',
  callToAction: string = 'Call 704-246-7642'
): string => {
  return `Professional ${service} in ${location} & surrounding areas. Expert technicians, transparent pricing, same-day service available. ${callToAction} or Text/Call 980-888-5300.`;
};

export const generateStructuredData = (type: string, data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return baseData;
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://kortechservice.com${crumb.url}`
    }))
  };
};