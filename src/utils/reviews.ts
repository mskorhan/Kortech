export const reviewCount = 96;

export const topReviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Excellent service! They fixed my laptop screen the same day and the price was very reasonable. Highly recommend KorTech Service for computer repair in Charlotte.",
    date: "2025-06-10"
  },
  {
    author: "James K.",
    rating: 5,
    text: "Professional and fast service. My gaming PC was running slow and they diagnosed the issue quickly. Great computer repair shop in Matthews area.",
    date: "2025-06-05"
  },
  {
    author: "Michael T.",
    rating: 5,
    text: "KorTech Service saved my business data when our server crashed. Their data recovery service is top-notch. Best IT support in Charlotte!",
    date: "2025-05-28"
  }
];

export const getRandomReview = () => {
  return topReviews[Math.floor(Math.random() * topReviews.length)];
};

export const getRotatingReview = () => {
  const index = Math.floor(Date.now() / 10000) % topReviews.length;
  return topReviews[index];
};