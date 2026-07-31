import React from "react";
import "./Wave.css";

const Wave = () => {
  return (
    <div className="wave-container">
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
        className="wave-svg"
      >
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "#6C63FF" }}
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
