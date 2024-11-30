import React, {useState} from 'react';
import "./FeedbackItem.css"

const FeedbackItem = ({ feedback }) => {
  const [isLiked, setIsLiked] = useState(feedback.isLiked);
  const [likes, setLikes] = useState(feedback.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const formattedDate = new Date(feedback.creationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="feedback-item-container">
      <div className="feedback-item-header">
        <span className="feedback-item-username">{feedback.username}</span>
        <span className="feedback-item-date">{formattedDate}</span>
      </div>
      <div className="feedback-item-text">{feedback.text}</div>
      <div className="feedback-item-rating">Rating: {feedback.rating}/5</div>
      <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={handleLike}>
        {isLiked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
};

export default FeedbackItem;
