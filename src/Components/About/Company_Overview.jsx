import React from "react";
import "../../css/Company_Overview.css"; // make sure this path is correct

// Import strength icons/images
import customerService from "../../assets/customer-service.avif";
import employeeStrength from "../../assets/employee-strength.avif";
import extensiveKnowledge from "../../assets/extensive-knowledge.avif";
import approach from "../../assets/approach.avif";

const CompanyOverview = () => {
  const roadmap = [
    {
      year: "Aug 2024",
      title: "Company Founded",
      description:
        "The journey of Sabrimala Fintech began with a vision to empower dreams and enable growth.",
    },
    {
      year: "Oct 2024",
      title: "RBI Certificate",
      description:
        "Received the RBI certification, marking a major milestone in building trust and compliance.",
    },
    {
      year: "Aug 2025",
      title: "Head Office in Gurugram",
      description:
        "Opened our state-of-the-art headquarters in Gurugram to expand operations and serve better.",
    },
  ];

  const strengths = [
    {
      img: customerService,
      title: "Customer Service",
      description:
        "Our priority is to keep our customers happy and loyal to us. Our loan disbursement process is quick and flexible with minimal documentation. Our customers no longer have to wait to avail financial assistance that will make their dreams turn into reality.",
    },
    {
      img: employeeStrength,
      title: "Employee Strength",
      description:
        "Our employees are our pride and we ensure that we hire people with appropriate knowledge about the market and the whole working environment. Our employees are empathetic, capable and aware of their roles and responsibilities making CSL the success it is today.",
    },
    {
      img: extensiveKnowledge,
      title: "Extensive Knowledge",
      description:
        "With our skin in the business for more than two decades, we have in-depth knowledge about SMEs and their struggles to get financial assistance from financial institutions in record time. Using our experience and knowledge, we design our work flow in a way that caters to every need of the customer.",
    },
    {
      img: approach,
      title: "Structured Approach",
      description:
        "We conduct comprehensive research about the market and hence, have excellent understanding of the market dynamics and the risks associated. Our team works in unison to reduce project risks by walking an extra mile to finance projects. We ensure to build a structured approach for every deal on the basis of requirements of each project.",
    },
  ];

  return (
    <div className="overview-container">
      {/* Story Section */}
      <div className="overview-header">
        <h2>Our Company Timeline</h2>
        <p>
          An illustrated reflection on the progress, experiences, and evolution
          spanning more than ten years
        </p>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>
                {item.year} – {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Strengths Section */}
      <div className="strengths-section">
        <h2>Our Strengths</h2>
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <img src={strength.img} alt={strength.title} />
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
