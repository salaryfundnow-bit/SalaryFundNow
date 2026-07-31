import React from "react";
import "./HowItWorks.css";

import { FaUserFriends, FaRocket, FaCheckSquare } from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaUserFriends />,
    title: "Fill out the Online Application Form.",
  },
  {
    id: "02",
    icon: <FaRocket />,
    title: "Submit the necessary documents and complete the KYC verification.",
  },
  {
    id: "03",
    icon: <FaCheckSquare />,
    title: "Get the loan amount disbursed to your account.",
  },
];

const HowItWorks = () => {
  return (
    <section className="works">

      <div className="container">

        <div className="heading">

          <span className="small-title">
            <span></span>
            How It Works
            <span></span>
          </span>

          <h2>
            Easy Online Application for Loan in <span>3 Steps</span>
          </h2>

          <p>
            Applying for a loan has never been easier. Our quick, secure, and fully digital application 
            process lets you access funds without lengthy paperwork or unnecessary delays. Simply complete a short
             online application, upload minimal documents, and receive a fast decision. Whether you're managing
            an emergency, covering monthly expenses, 
            or achieving personal goals, we're here to provide the financial support you need—anytime, anywhere.
          </p>

        </div>

        <div className="steps">

          {steps.map((step) => (
            <div className="step-card" key={step.id}>

              <div className="circle">

                <div className="icon">{step.icon}</div>

                <div className="number">{step.id}</div>

              </div>

              <h3>{step.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;