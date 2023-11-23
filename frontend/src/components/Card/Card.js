import React from 'react';
import './Card.css'; // Make sure to create a CSS file with this name

const Card = () => {
  return (
    <div className="review-card">
      <div className="avatar-section">
        <div className="avatar-icon">👤</div>
      </div>
      <div className="content-section">
        <p className="review-text">
          This course is a major step-up from previous course CP 104. This course is not a piece of cake and need constant practice.
        </p>
        <div className="rating">
          <span className="rating-title">Bird</span>
          <span className="rating-value">🔵🔵🔵⚪⚪</span>
          <span className="rating-title">Useful</span>
          <span className="rating-value">🔵🔵🔵🔵⚪</span>
          <span className="rating-title">Enjoyed</span>
          <span className="rating-value">🔵🔵🔵⚪⚪</span>
        </div>
        <div className="review-footer">
          <span className="grade-received">Grade Received: A*</span>
          <span className="review-time">student 24 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
