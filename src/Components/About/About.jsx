import React from "react";
import "./About.css";
import aboutImg from "../../assets/Aboutus.jpg"; // Your illustration

import {
  FaCheckCircle,
  FaShieldAlt,
  FaWallet,
  FaBolt,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">

      <div className="container">

        <div className="about-wrapper">

          {/* Left Image */}

          <div className="about-image">
            <img src={aboutImg} alt="SalaryFundNow" />
          </div>

          {/* Right Content */}

          <div className="about-content">

            <span className="sub-title">ABOUT US</span>

            <h2>
              Empowering Your Financial Journey with
              <span> SalaryFundNow</span>
            </h2>

            <p>
              SalaryFundNow is a trusted digital lending platform that provides
              quick, secure, and transparent short-term personal loans to
              salaried professionals across India.
            </p>

            <p>
              Our fully digital application process ensures fast approvals,
              minimal documentation, secure transactions, and direct
              disbursement to your bank account. We are committed to responsible
              lending while making financial assistance simple and accessible.
            </p>

            <div className="features">

              <div className="feature">
                <FaBolt />
                <span>Instant Loan Approval</span>
              </div>

              <div className="feature">
                <FaWallet />
                <span>100% Digital Process</span>
              </div>

              <div className="feature">
                <FaShieldAlt />
                <span>Safe & Secure Platform</span>
              </div>

              <div className="feature">
                <FaCheckCircle />
                <span>Minimal Documentation</span>
              </div>

            </div>

            <button className="about-btn">
              Learn More →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;