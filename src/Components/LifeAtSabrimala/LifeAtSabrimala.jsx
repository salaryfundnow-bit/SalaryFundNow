import React from "react";
import "./LifeAtSabrimala.css";
import image1 from "../../assets/lifeAt1.jpeg"; // Replace with your uploaded image path
import image2 from "../../assets/lifeAt2.jpeg"; // Example for the second image
import image3 from "../../assets/lifeAt3.jpeg";

const LifeAtSabrimala = () => {
  return (
    <section className="life-section">
      <div className="life-header">
        <h2>Life At SABRIMALA</h2>
        <p>Empowering MSMEs. Building careers.</p>
        <p className="life-description">
          Company culture is a sum total of all our formal and informal systems along with
          the behaviours and values, all of which come together to contribute to the experience
          for the employees as well as the customers. We give our 100% and make sure that we
          build around a beautiful culture. “People” are an integral part of the business. Their
          happiness is of prime importance. Our policies and practices are structured to foster
          an open culture. We at SABRIMALA ensure that the working culture is conducive to the
          personal and professional growth of our employees. Our company culture includes a
          variety of elements, including work environment, ethics, mission, value, and goals.
        </p>
      </div>

      {/* Priority Section */}
      <div className="life-priority">
        <div className="priority-text">
          <h3>Priority: Employees First, Customer Always</h3>
          <p>
            We believe that when employees are given the right work atmosphere, it automatically
            leads to the happiness of our customers.
          </p>
        </div>
        <div className="priority-image">
          <img src={image1} alt="Employees" />
        </div>
      </div>

      {/* Work Life Balance Section */}
      <div className="life-balance">
        <div className="balance-image">
          <img src={image2} alt="Work Life Balance" />
        </div>
        <div className="balance-text">
          <h3>Work Life Balance</h3>
          <p>
            SABRIMALA employees experience the right balance of work mixed with ample fun activities.
          </p>
        </div>
      </div>

      <div className="Growth">
        
        <div className="Growth-text">
          <h3>Opportunities for
Professional Growth</h3>
          <p>
           The right motivation through regular rewards and recognition goes a long way to ensure a sustainable growth for employees as well as the organization.
          </p>
        </div>
        <div className="Growth-image">
          <img src={image3} alt="Opportunities for
Professional Growth" />
        </div>
      </div>
    </section>
  );
};

export default LifeAtSabrimala;
