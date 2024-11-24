import React from "react";
import "./PopularSection.css";
import popularImage1 from "../../assets/images/popular-1.png";
import popularImage2 from "./../../assets/images/popular-2.png";
import popularImage3 from "./../../assets/images/popular-3.png";

const PopularSection = () => {
  return (
    <div className="popular-section">
      <div className="popular-item">
        <img src={popularImage1} alt="Most Popular Venues" className="popular-image" />
        <div className="popular-text">MOST POPULAR VENUES</div>
      </div>
      <div className="popular-item">
        <img src={popularImage2} alt="More Fun More Taste" className="popular-image" />
        <div className="popular-text">MORE FUN<br />MORE TASTE</div>
      </div>
      <div className="popular-item">
        <img src={popularImage3} alt="Fresh & Chili" className="popular-image" />
        <div className="popular-text">TRY IT OUT TODAY<br />FRESH & CHILI</div>
      </div>
    </div>
  );
};

export default PopularSection;
