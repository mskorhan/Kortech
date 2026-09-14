import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

/**
 * Service -> service-area internal links.
 *
 * Search Console (3 months to 2026-09-11) showed Google serving the HOMEPAGE
 * for queries containing "matthews" - 780 impressions against 2 for
 * /matthews-computer-repair/ itself. The location pages were reachable only
 * from the navbar, the footer and NearbyAreas, and every one of those anchors
 * is the bare city name ("Matthews"), which carries no topical signal. No
 * service page linked to a location page at all, so nothing on the site
 * connected "laptop screen repair" to the Matthews URL.
 *
 * This puts descriptive, service-specific anchors on the service pages - the
 * pages that already rank for the service term - pointing at the location
 * page that should own the local variant of that query.
 *
 * Deliberately NOT a routing change: no canonical, redirect, sitemap or 404
 * behaviour is touched, since GSC is still revalidating Soft 404 and
 * Page-with-redirect from the September 14 remediation.
 */

interface ServiceAreaLinksProps {
  /** Service name as it appears in a query, e.g. "Laptop Screen Repair". */
  serviceName: string;
  /**
   * Areas to link, in priority order. Defaults to the ones with real Search
   * Console demand; pass a subset when a service is genuinely area-specific.
   */
  areas?: Array<{ name: string; path: string }>;
}

// Ordered by measured local search demand, strongest first. Matthews leads
// because it is the only city cluster with page-1 positions and real (if
// small) click-through on the abbreviated "matthews nc" phrasing.
const DEFAULT_AREAS = [
  { name: 'Matthews', path: '/matthews-computer-repair/' },
  { name: 'Charlotte', path: '/charlotte-computer-repair/' },
  { name: 'Mint Hill', path: '/mint-hill-computer-repair/' },
  { name: 'Indian Trail', path: '/indian-trail-computer-repair/' },
  { name: 'Pineville', path: '/pineville-computer-repair/' },
  { name: 'Monroe', path: '/monroe-computer-repair/' },
];

const ServiceAreaLinks = ({ serviceName, areas = DEFAULT_AREAS }: ServiceAreaLinksProps) => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-brand-primary" />
          <span>{serviceName} Across the Charlotte Area</span>
        </h2>
        <p className="text-slate-600 mb-5">
          All work is carried out at our Charlotte shop on Sardis Rd N. These pages cover what
          getting here looks like from each area, including drop-off and pickup-and-delivery
          options.
        </p>
        <ul className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <li key={area.path}>
              <Link
                to={area.path}
                className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-primary hover:border-brand-primary transition-colors duration-200"
              >
                {serviceName} in {area.name}, NC
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceAreaLinks;
