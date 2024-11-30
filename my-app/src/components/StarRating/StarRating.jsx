import React from 'react';


export const StarRating = ({ rating }) => {
    const maxStars = 5; // Maximum number of stars
  
    return (
      <div style={{ display: "flex", gap: "5px" }}>
        {Array.from({ length: maxStars }, (_, index) => {
          if (index + 1 <= rating) {
            // Full star
            return (
              <span key={index} style={{ color: "#FFD700" }}>
                ★
              </span>
            );
          } else if (index + 0.5 < rating) {
            // Half star
            return (
              <span key={index} style={{ color: "#FFD700" }}>
                ☆
              </span>
            );
          } else {
            // Empty star
            return (
              <span key={index} style={{ color: "#E0E0E0" }}>
                ★
              </span>
            );
          }
        })}
      </div>
    );
  };