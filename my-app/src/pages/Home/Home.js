import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Best food for your taste</h1>
          <p className="home-description">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="home-buttons">
            <button className="home-btn" onClick={()=>{navigate('/venues')}}>Explore Venues</button>
          </div>
        </div>
      </div>
    <AboutUs/>
    <Footer />
  </>
  );
};

export default Home;
