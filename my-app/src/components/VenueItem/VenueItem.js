import React from "react";
import { useNavigate } from "react-router-dom";
import "./VenueItem.css";
import { StarRating } from "../StarRating/StarRating";

const VenueItem = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, address, logoUrlPath, rating } = item;

  return (
    <div className="venue-item-card" onClick={() => navigate(`/venue/${id}`)}>
      <img alt="Logo" className="venue-item-image" src={logoUrlPath} />
      <div className="venue-item-content">
        {/* <p className="venue-item-price">${averagePrice.toFixed(2)}</p> */}
        <h3 className="venue-item-name">{name}</h3>
        <div className="venue-item-footer">
          <p className="venue-item-address">{address}</p>
          <div className="venue-item-star-wrapper">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueItem;
