import { refreshAccessToken } from "../api/authService";

const Home = () => {
    return (
      <div className="container">
      <header className="header">
        <h1 className="title">Foodie's Haven</h1>
        <p className="tagline">Discover, Taste, and Review Your Favorite Restaurants</p>
      </header>

      <section className="heroSection">
        <div className="heroContent">
          <h2 className="heroTitle">Your Next Favorite Spot Awaits</h2>
          <p className="heroText">Find honest reviews and ratings from food enthusiasts like you!</p>
          <button className="exploreButton" onClick={refreshAccessToken}>Explore Restaurants</button>
        </div>
      </section>

      <section className="featuresSection">
        <div className="feature">
          <h3 className="featureTitle">Authentic Reviews</h3>
          <p className="featureText">Read real reviews from verified users.</p>
        </div>
        <div className="feature">
          <h3 className="featureTitle">Top-Rated Spots</h3>
          <p className="featureText">Discover the top-rated places in your area.</p>
        </div>
        <div className="feature">
          <h3 className="featureTitle">Share Your Experience</h3>
          <p className="featureText">Leave a review and let others know your thoughts!</p>
        </div>
      </section>

      <footer className="footer">
        <p className="footerText">© 2024 Foodie's Haven. All Rights Reserved.</p>
      </footer>
    </div>
    );
  };
  
  
export default Home
  