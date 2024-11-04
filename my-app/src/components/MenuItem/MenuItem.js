import React, { useState } from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likes, setLikes] = useState(item.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="menu-item">
      <img src={item.imageUrlPath} alt={item.name} className="menu-item-image" />
      <div className="menu-item-details">
        <h2 className="menu-item-name">{item.name}</h2>
        <p className="menu-item-description">{item.description}</p>
        <p className="menu-item-price">${item.price.toFixed(2)}</p>
        <div className="menu-item-actions">
          <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={handleLike}>
            {isLiked ? "❤️" : "🤍"} {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
