import React, { useState, useEffect } from "react";
import "./Hero.css";
import HeroImg from "../../assets/Hero-1.png";

const points = [
  "Fast Salary Advances",
  "Simple Application Process",
  "Reliable Financial Support",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % points.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero container">
      <div className="hero-text">

        <div className="animated-point">
  <span className="bullet">●</span>
  <div className="text-slider">
    <span key={current} className="slide-text">
      {points[current]}
    </span>
  </div>
</div>

        <h1>
          Welcome to <b>SalaryFundNow</b>
        </h1>

        <p>
          SalaryFundNow is a digital financial platform that provides quick and
          hassle-free salary advances to working professionals. We help
          employees access a portion of their earned salary before payday,
          offering a smarter alternative to expensive loans and financial
          stress.
        </p>

        <button className="btn">Explore More</button>
      </div>

      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;