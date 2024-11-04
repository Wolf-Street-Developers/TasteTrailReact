import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import "./VenueTab.css";

const VenueTab = ({ index, venue, isActive, onClick, onEdit }) => {
  return (
    <div className="venue-tab-container">
      <button
        className={`venue-tab ${isActive ? "active" : ""}`}
        onClick={() => onClick(index)}
      >
        {venue.name}
        <div className="edit-tab-btn" onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}>
          <FaPencilAlt/>
        </div>
      </button>
    </div>
  );
};

export default VenueTab;
