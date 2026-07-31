import React from "react";
import "./service.css";

import loanImg from "../../assets/loan.jpg";

import insightImg from "../../assets/insight.jpg";
import fundImg from "../../assets/fund.jpg";

import approval from "../../assets/approval.png";
import interest from "../../assets/interest.png";
import repayment from "../../assets/repayment.png";

const services = [
    
  {
    image: loanImg,
    title: "Short-term Loan Services",
    desc: "Get the immediate cash you need when you urgently need it. Our short-term loans provide quick approval and instant bank transfers with flexible repayment options."
  },
  {
    image: insightImg,
    title: "Financial Insights",
    desc: "Our financial experts guide you in making smart borrowing decisions. We help you understand your financial needs and choose the right loan solution."
  },
  {
    image: fundImg,
    title: "Daily Fund Requirements",
    desc: "Manage your daily expenses with confidence. Whether it's an emergency or planned expense, we provide quick financial support whenever you need it."
  }
];

const features = [
  {
    icon: approval,
    title: "Quick Loan Approval",
    active: true,
  },
  {
    icon: interest,
    title: "Competitive Interest Rates",
  },
  {
    icon: repayment,
    title: "Easy Repayments",
  },
];

const Services = () => {
  return (
    <section className="services-section">

      <div className="container">

        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>

              <div className="image-box">
                <img src={item.image} alt={item.title} />

                <div className="green-box"></div>
              </div>

              <div className="content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            </div>
          ))}
        </div>

        <div className="features">

          {features.map((item, index) => (
            <div
              key={index}
              className={`feature-card ${item.active ? "active" : ""}`}
            >
              <img src={item.icon} alt="" />

              <span>{item.title}</span>

            </div>
          ))}

        </div>

      </div>

    </section>
    
  );
};

export default Services;
