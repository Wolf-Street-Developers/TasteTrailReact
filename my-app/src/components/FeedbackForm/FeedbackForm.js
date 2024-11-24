import React, { useState } from 'react';
import "./FeedbackForm.css"
import { postFeedback } from '../../api/menuService';

const FeedbackForm = ({venueId, updateFeedbacks}) => {
  const [formData, setFormData] = useState({ text: '', rating: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {...formData, venueId: venueId}
    postFeedback(feedback).then(updateFeedbacks)
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <label className="feedback-form-label">
          Feedback:
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Share your feedback..."
            className="feedback-form-input feedback-form-text"
            required
          />
        </label>
        <label className="feedback-form-label">
          Rating:
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            className="feedback-form-input feedback-form-rating"
            required
          />
        </label>
        <button type="submit" className="feedback-form-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
