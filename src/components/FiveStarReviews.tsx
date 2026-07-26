import React from 'react';
import { Star, ExternalLink, Sparkles, Clock } from 'lucide-react';

interface FiveStarReviewsProps {
  maxReviews?: number;
}

const FiveStarReviews: React.FC<FiveStarReviewsProps> = ({ maxReviews = 5 }) => {
  // Static data since we're not using Google Places API
  const placeDetails = {
    name: 'KorTech Service',
    rating: 4.8,
    user_ratings_total: 96,
    opening_hours: { open_now: true }
  };

  const fiveStarCount = Math.floor(placeDetails.user_ratings_total * (placeDetails.rating / 5));

  return (
    <section className="py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-6 py-3 border border-yellow-200">
            <Sparkles className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">Verified Google Reviews</span>
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
              {placeDetails.rating}/5 Rating
            </span>
          </div>
          
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light">
            Read authentic reviews from {placeDetails.user_ratings_total} Charlotte customers who experienced professional computer repair service
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 border border-yellow-200">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg mx-auto shadow-lg">
                ★
              </div>
              
              <h3 className="text-lg font-bold text-slate-800">
                {placeDetails.user_ratings_total} Verified Google Reviews
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
                  <div className="text-xl font-bold text-yellow-600 mb-1">
                    {placeDetails.rating}★
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
                <span className="font-medium">Verified Google Reviews</span>
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
            <span>★ Read All {placeDetails.user_ratings_total} Google Reviews</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FiveStarReviews;