import React from "react";
import "./JoinUs.css";
import joinImage from "../assets/Hiring.png"; // Replace with your image path

const JoinUs = () => {
  return (
    <section className="join-us-section">
      {/* Left Side - Image */}
      <div className="join-us-image">
        <img src={joinImage} alt="Join Sabrimala" />
      </div>

      {/* Right Side - Content */}
      <div className="join-us-content">
        <h2>Join <span>SalaryFundNow</span> — Grow With Us!</h2>
        <p>
          Become a part of a dynamic team that values innovation, growth, and 
          excellence. Together, we create opportunities to make an impact 
          and achieve success.
        </p>
        <p className="caption">
          🌱 *Your career journey begins here. Let's grow together!*
        </p>

        <button className="hiring-btn">View Current Hiring</button>
      </div>
    </section>
  );
};

export default JoinUs;
