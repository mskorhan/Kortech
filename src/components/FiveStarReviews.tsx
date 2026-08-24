import type { FC } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import reviewsData from '../data/reviews.json';

interface FiveStarReview {
  author: string;
  text: string;
  time: number;
  relativeTime?: string;
}

interface ReviewsData {
  updatedAt: string | null;
  rating: number | null;
  totalReviews: number | null;
  googleMapsUrl: string;
  fiveStarReviews: FiveStarReview[];
}

interface FiveStarReviewsProps {
  maxReviews?: number;
  showInFooter?: boolean;
}

const FiveStarReviews: FC<FiveStarReviewsProps> = ({ maxReviews = 3, showInFooter = false }) => {
  const { rating, totalReviews, googleMapsUrl, fiveStarReviews } = reviewsData as ReviewsData;
  const reviewsToShow = fiveStarReviews.slice(0, maxReviews);

  if (showInFooter) {
    return (
      <div className="bg-slate-600/50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-3">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium">
              {rating ? `${rating}/5` : 'Rated on'} Google
              {totalReviews ? ` • ${totalReviews} reviews` : ''}
            </span>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 text-sm flex items-center space-x-1"
          >
            <span>Read Reviews</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-6 py-3 border border-yellow-200">
            <Star className="h-5 w-5 text-yellow-600 fill-current" aria-hidden="true" />
            <span className="text-yellow-800 font-semibold">5-Star Google Reviews</span>
          </div>

          {rating && totalReviews && (
            <div className="flex items-center justify-center space-x-2">
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-lg text-slate-700 font-medium">
                {rating}/5 from {totalReviews} Google reviews
              </span>
            </div>
          )}
        </div>

        {reviewsToShow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {reviewsToShow.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{review.author}</div>
                    <div className="flex" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {review.text.length > 200 ? `${review.text.substring(0, 200)}...` : review.text}
                </p>
                {review.relativeTime && (
                  <div className="text-xs text-slate-500">{review.relativeTime}</div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#071930] hover:bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>Read Our Google Reviews</span>
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FiveStarReviews;
