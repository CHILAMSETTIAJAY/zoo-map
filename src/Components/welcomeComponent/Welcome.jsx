import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-body">
        <div className="welcome-title">Welcome to OwlTrek Hyderabad Zoo!</div>
        <div className="welcome-text">
          Explore the wonders of wildlife with live navigation and ticket
          booking.
        </div>
        <Link to="/Home" className="home-btn">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
