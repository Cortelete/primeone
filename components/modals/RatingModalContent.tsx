import React, { useState } from 'react';

interface RatingModalContentProps {
  onLowRating: () => void;
  closeModal: () => void;
}

const RatingModalContent: React.FC<RatingModalContentProps> = ({ onLowRating, closeModal }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const googleReviewLink = "https://www.google.com"; // In construction: Replace with actual Google review link

  const handleRatingClick = (rate: number) => {
    setRating(rate);
    if (rate === 5) {
      window.open(googleReviewLink, '_blank');
      closeModal();
    } else {
      onLowRating();
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">How did we do?</h2>
      <p className="text-gray-400 mb-6">Your feedback helps us shine.</p>

      <div className="flex justify-center space-x-2 sm:space-x-4 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="text-4xl sm:text-5xl transition-all duration-200 transform hover:scale-125"
          >
            <span className={(hoverRating >= star || rating >= star) ? 'text-yellow-400' : 'text-gray-600'}>★</span>
          </button>
        ))}
      </div>
      
      <p className="text-sm text-gray-500 h-5">
        {rating === 5 ? "Thank you! We're redirecting you..." : "Select your rating"}
      </p>
    </div>
  );
};

export default RatingModalContent;