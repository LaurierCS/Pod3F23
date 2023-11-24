import React, { useState } from 'react';
import './ReviewCard.css'; 

const ReviewCard = () => {
  const [review, setReview] = useState('');

  return (
    <div className="card">
      <textarea
        className="input-box"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
      />
    </div>
  );
};

export default ReviewCard;
