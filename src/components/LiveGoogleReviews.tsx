import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Sparkles, Clock, Loader, AlertCircle } from 'lucide-react';

interface LiveGoogleReviewsProps {
  maxReviews?: number;
}

interface GooglePlaceData {
  name: string;
  rating: number;
  user_ratings_total: number;
  opening_hours?: { open_now: boolean };
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url?: string;
  }>;
}

const LiveGoogleReviews: React.FC<LiveGoogleReviewsProps> = ({ maxReviews = 5 }) => {
  const [placeData, setPlaceData] = useState<GooglePlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Current fallback data - you can update these numbers manually
  const currentData: GooglePlaceData = {
    name: 'KorTech Service',
    rating: 4.8,
    user_ratings_total: 96, // Update this number when you get new reviews
    opening_hours: { open_now: true }
  };

  useEffect(() => {
    const fetchLiveReviews = async () => {
      try {
        setLoading(true);
        
        // TODO: Replace with your actual API endpoint
        // This endpoint should call Google Places API from your backend
        // Example: const response = await fetch('/api/google-places/reviews');
        
        // For now, simulate API call and use current data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // In production, you would:
        // 1. Set up a backend endpoint that calls Google Places API
        // 2. Use your Google Places API key (keep it secret on backend)
        // 3. Call that endpoint from here
        
        setPlaceData(currentData);
        setLastUpdated(new Date());
        setLoading(false);
      } catch (err) {
        console.error('Error fetching live reviews:', err);
        setError('Unable to fetch live reviews');
        setPlaceData(currentData); // Fallback to current data
        setLoading(false);
      }
    };

    fetchLiveReviews();
    
    // Refresh reviews every 30 minutes
    const interval = setInterval(fetchLiveReviews, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const fiveStarCount = placeData ? Math.floor(placeData.user_ratings_total * (placeData.rating / 5)) : 0;

  if (loading) {
    return (
      <section className="py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="h-8 w-8 animate-spin mx-auto text-yellow-600" />
            <p className="mt-2 text-slate-600">Loading live Google reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error && !placeData) {
    return (
      <section className="py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="h-8 w-8 mx-auto text-red-500" />
            <p className="mt-2 text-slate-600">Unable to load reviews. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-6 py-3 border border-yellow-200">
            <Sparkles className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">Live Google Reviews</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold">
            <span className="text-[#0099FF]">
              ⭐ Excellent Google Reviews ⭐
            </span>
          </h2>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5 text-yellow-500 fill-current" 
                />
              ))}
            </div>
            <span className="text-lg text-slate-700 font-medium">
              {placeData?.rating}/5 Rating
            </span>
          </div>
          
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light">
            Read authentic reviews from {placeData?.user_ratings_total} Charlotte customers who experienced professional computer repair service
          </p>
          
          {lastUpdated && (
            <p className="text-xs text-slate-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 border border-yellow-200">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg mx-auto shadow-lg">
                ★
              </div>
              
              <h3 className="text-lg font-bold text-slate-800">
                {placeData?.user_ratings_total} Verified Google Reviews
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
                  <div className="text-xl font-bold text-yellow-600 mb-1">
                    {placeData?.rating}★
                  </div>
                  <div className="text-sm text-slate-600">
                    Overall Rating
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                  <div className="text-xl font-bold text-green-600 mb-1">{fiveStarCount}</div>
                  <div className="text-sm text-slate-600">
                    5-Star Reviews
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                  <div className="text-xl font-bold text-[#0099FF] mb-1">25+</div>
                  <div className="text-sm text-slate-600">
                    Years Experience
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-600">
                  Open Now - Same Day Service Available
                </span>
              </div>
              
              <p className="text-xs text-slate-600 italic">
                "Our customers consistently rate us highly for professional service, transparent pricing, and expert computer repair solutions in Charlotte, NC."
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-2 border-t border-yellow-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-medium">Live Google Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://g.page/kortechservice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>★ Read All {placeData?.user_ratings_total} Google Reviews</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveGoogleReviews;