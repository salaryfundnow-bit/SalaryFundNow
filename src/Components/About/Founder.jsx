import React, { useState } from 'react';
import '../../css/Founder.css';
import ashutoshImg from '../../assets/Ashutosh_Mishra.jpg';
import ashishImg from '../../assets/ashish-n.png';
import ajitImg from '../../assets/ajit.jpg';

const founders = [
 
  {
    name: 'Ashutosh Mishra',
    designation: 'Co-Founder & CEO',
    image: ashutoshImg,
    note: `Every extraordinary journey starts with a single step—driven by vision, anchored in purpose, and propelled by determination. Sabrimala Fintech was never just an idea—it was born as a mission to build a smart, innovative, and future-ready financial platform that transforms how MSMEs access capital in India. From day one, we set out to create a technology-driven, insight-led ecosystem that goes beyond lending—it empowers entrepreneurs, fuels their growth, and stands as a reliable partner at every step.

Our commitment to a fully digital, seamless, and efficient experience, combined with intelligent credit processes and real-time analytics, has redefined business lending. Today, our focus is unwavering: to close the significant credit gap for underserved MSMEs and enable them to thrive with confidence.`
  },
  {
    name: 'Ashish Kumar',
    designation: 'Founder & MD',
    image: ashishImg,
    note: `Every extraordinary journey starts with a single step—driven by vision, anchored in purpose, and propelled by determination. Sabrimala Fintech was never just an idea—it was born as a mission to build a smart, innovative, and future-ready financial platform that transforms how MSMEs access capital in India. From day one, we set out to create a technology-driven, insight-led ecosystem that goes beyond lending—it empowers entrepreneurs, fuels their growth, and stands as a reliable partner at every step.

Our commitment to a fully digital, seamless, and efficient experience, combined with intelligent credit processes and real-time analytics, has redefined business lending. Today, our focus is unwavering: to close the significant credit gap for underserved MSMEs and enable them to thrive with confidence.`
  },
    {
    name: 'Ajit sabat',
    designation: 'Executive Director',
    image: ajitImg,
    note: `Every extraordinary journey starts with a single step—driven by vision, anchored in purpose, and propelled by determination. Sabrimala Fintech was never just an idea—it was born as a mission to build a smart, innovative, and future-ready financial platform that transforms how MSMEs access capital in India. From day one, we set out to create a technology-driven, insight-led ecosystem that goes beyond lending—it empowers entrepreneurs, fuels their growth, and stands as a reliable partner at every step.

Our commitment to a fully digital, seamless, and efficient experience, combined with intelligent credit processes and real-time analytics, has redefined business lending. Today, our focus is unwavering: to close the significant credit gap for underserved MSMEs and enable them to thrive with confidence.`
  },
];



const FounderCard = ({ name, designation, image, note }) => (
  <div className="founder-card-portrait">
    <div className="founder-img-wrapper">
      <img src={image} alt={name} />
    </div>
    <div className="founder-info">
      <h3>{name}</h3>
      <p className="designation">{designation}</p>
      <p className="founder-text">{note}</p>
    </div>
  </div>
);

const Founder = () => {
  return (
    
    
    
    <div className="founder-section-portrait">
      {/* Heading Section */}
      <div className="founder-heading">
        <h1>Meet Our Visionaries</h1>
        <p>"Leading with purpose, inspiring every entrepreneur."</p>
      </div>

      {/* Founder Cards */}
      {founders.map((f, i) => (
        <FounderCard key={i} {...f} />
      ))}
    </div>
   
  );
};

export default Founder;
