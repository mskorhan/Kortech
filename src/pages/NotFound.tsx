import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, Phone, Wrench } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | KorTech Service"
        description="The page you're looking for doesn't exist. Browse our computer repair services in Charlotte, NC or head back to the homepage."
        noindex
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">404 Error</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/services/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              <Wrench className="w-5 h-5" />
              View Services
            </Link>
            <a
              href="tel:704-246-7642"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              704-246-7642
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
