import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, MapPin, Clock, Loader } from 'lucide-react';

interface GoogleReviewsProps {
  maxReviews?: number;
}

interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  formatted_address: string;
  opening_hours: { open_now: boolean };
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url?: string;
  }>;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ maxReviews = 5 }) => {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback data in case API is not available
  const fallbackData: PlaceDetails = {
    name: 'KorTech Service',
    rating: 4.8,
    user_ratings_total: 96,
    formatted_address: '1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270',
    opening_hours: { open_now: true }
  };

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // This would be your API endpoint that calls Google Places API
        // For now, we'll simulate an API call and use fallback data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real implementation, you would:
        // const response = await fetch('/api/google-reviews');
        // const data = await response.json();
        // setPlaceDetails(data);
        
        // For now, use fallback data
        setPlaceDetails(fallbackData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Failed to load reviews');
        setPlaceDetails(fallbackData); // Use fallback on error
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="h-8 w-8 animate-spin mx-auto text-blue-600" />
            <p className="mt-2 text-slate-600">Loading Google Reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !placeDetails) {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600">Unable to load reviews at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <h2 className="text-2xl lg:text-3xl font-light text-slate-800">
              Google <span className="text-[#0099FF] font-medium">Reviews</span>
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-1">
            <div className="flex">
              {renderStars(placeDetails.rating)}
            </div>
            <span className="text-lg text-slate-700 font-medium ml-2">
              {placeDetails.rating}/5
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-800">
            {placeDetails.user_ratings_total} Verified Google Reviews
          </h3>
          
          <p className="text-sm text-slate-600 font-light max-w-xl mx-auto">
            Authentic reviews from Charlotte customers who trust KorTech Service
          </p>
        </div>

        {/* Business Info */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 mb-6 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">{placeDetails.name}</div>
                <div className="text-sm text-slate-600">{placeDetails.formatted_address}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">{placeDetails.rating} Star Rating</div>
                <div className="text-sm text-slate-600">{placeDetails.user_ratings_total} total reviews</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-5 w-5 text-green-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">
                  {placeDetails.opening_hours.open_now ? 'Open Now' : 'Currently Closed'}
                </div>
                <div className="text-sm text-slate-600">Mon-Fri: 9AM-6PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        {placeDetails.reviews && placeDetails.reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {placeDetails.reviews.slice(0, maxReviews).map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  {review.profile_photo_url ? (
                    <img 
                      src={review.profile_photo_url} 
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {review.author_name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-slate-800">{review.author_name}</div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {review.text.length > 150 
                    ? `${review.text.substring(0, 150)}...` 
                    : review.text
                  }
                </p>
                <div className="text-xs text-slate-500 mt-3">
                  {new Date(review.time * 1000).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href="https://g.page/kortechservice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>★ Read All {placeDetails.user_ratings_total} Google Reviews</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;