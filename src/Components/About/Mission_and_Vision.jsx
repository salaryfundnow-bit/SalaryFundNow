import React from "react";
import "../../css/MissionVision.css";
import { FaBullseye, FaEye, FaUsers, FaChartLine, FaHandshake, FaLightbulb, FaShieldAlt, FaStar } from 'react-icons/fa';



const igniteValues = [
  { letter: "I", title: "Inclusion", desc: "Embracing diversity and ensuring equal opportunity for all.", icon: <FaUsers /> },
  { letter: "G", title: "Growth", desc: "Driving sustainable progress for clients, teams, and communities.", icon: <FaChartLine /> },
  { letter: "N", title: "Nurturing Relationships", desc: "Building trust-based partnerships that last and thrive.", icon: <FaHandshake /> },
  { letter: "I", title: "Innovation", desc: "Designing creative, tech-driven solutions to real challenges.", icon: <FaLightbulb /> },
  { letter: "T", title: "Trust", desc: "Upholding honesty, reliability, and integrity in everything we do.", icon: <FaShieldAlt /> },
  { letter: "E", title: "Excellence", desc: "Delivering quality and performance that exceeds expectations.", icon: <FaStar /> },
];
const MissionVisionIgnite = () => {
  return (
    <div className="mv-container">
      <h1 className="mv-heading">
        <span className="mv-blue">Mission – Vision</span>
        <span className="mv-orange"> & Core Values</span>
      </h1>

      {/* Mission & Vision */}
      <div className="mv-row">
        <div className="mv-card">
          <FaBullseye className="mv-icon" />
          <h2>Mission</h2>
          <p>Our mission is to empower businesses by providing innovative financial solutions that drive growth, efficiency, and sustainability.</p>
        </div>
        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h2>Vision</h2>
          <p>To become the most trusted financial partner for MSMEs, delivering seamless, tech-driven, and insight-led services.</p>
        </div>
      </div>

      {/* Core Values – IGNITE */}
      <div className="mv-card wide-card">
        <FaLightbulb className="mv-icon" />
        <h2>Core Values – IGNITE</h2>
        <p>Our core values are defined by <strong>IGNITE</strong>, symbolizing inclusion, innovation, and excellence that fuels everything we do.</p>
      </div>
 {/* IGNITE Boxes */}
      <div className="ignite-grid">
        {igniteValues.map((item, index) => (
          <div className="mv-card" key={index}>
            <div className="mv-icon">{item.icon}</div>
            <h3>{item.letter} – {item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default MissionVisionIgnite;