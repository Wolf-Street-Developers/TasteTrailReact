import React from "react";
import { useNavigate } from "react-router-dom";
import "./VenueItem.css";

const VenueItem = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, address, description, logoUrlPath, averagePrice, rating } = item;

  return (
    <div className="venue-item-card" onClick={() => navigate(`/venue/${id}`)}>
      <img alt="Logo" className="venue-item-image" src={logoUrlPath} />
      <div className="venue-item-content">
        <p className="venue-item-price">${averagePrice.toFixed(2)}</p>
        <h3 className="venue-item-name">{name}</h3>
        <p className="venue-item-description">{description}</p>
        <div className="venue-item-footer">
          <p className="venue-item-address">{address}</p>
          <p className="venue-item-rating">{rating} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default VenueItem;
