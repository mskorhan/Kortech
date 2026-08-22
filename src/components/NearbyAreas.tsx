import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface Area {
  name: string;
  path: string;
}

const ALL_AREAS: Area[] = [
  { name: 'Charlotte', path: '/charlotte-computer-repair/' },
  { name: 'Matthews', path: '/matthews-computer-repair/' },
  { name: 'Indian Trail', path: '/indian-trail-computer-repair/' },
  { name: 'Mint Hill', path: '/mint-hill-computer-repair/' },
  { name: 'Monroe', path: '/monroe-computer-repair/' },
  { name: 'Ballantyne', path: '/ballantyne-computer-repair/' },
  { name: 'Pineville', path: '/pineville-computer-repair/' },
  { name: 'Waxhaw', path: '/waxhaw-computer-repair/' },
  { name: 'Weddington', path: '/weddington-computer-repair/' },
  { name: 'Stallings', path: '/stallings-computer-repair/' }
];

interface NearbyAreasProps {
  currentPath: string;
}

const NearbyAreas = ({ currentPath }: NearbyAreasProps) => {
  const otherAreas = ALL_AREAS.filter(area => area.path !== currentPath);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center justify-center space-x-2">
          <MapPin className="h-5 w-5 text-brand-primary" />
          <span>Also Serving Nearby Areas</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {otherAreas.map((area) => (
            <Link
              key={area.path}
              to={area.path}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-primary hover:border-brand-primary transition-colors duration-200"
            >
              {area.name}
            </Link>
          ))}
          <Link
            to="/locations/"
            className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors duration-200"
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NearbyAreas;
