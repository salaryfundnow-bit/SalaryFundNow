import React from "react";
import {
  IndianRupee,
  FileText,
  Search,
  FileCheck,
  DoorOpen,
} from "lucide-react";
import "./WhyChooseUs.css"; // Import the CSS

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-header">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-description">
          Our financial products are specially customized to fit the needs of
          people who have limited access to credit. We offer services that help
          customers scale their businesses to the next level.
        </p>
      </div>

      {/* Top row - 3 boxes */}
      <div className="why-row top-row">
        <div className="why-card">
          <div className="why-icon">
            <IndianRupee size={40} />
          </div>
          <h3>Customized Loan Products</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FileText size={40} />
          </div>
          <h3>Easy Application</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <Search size={40} />
          </div>
          <h3>Fast and Transparent Processes</h3>
        </div>
      </div>

      {/* Bottom row - 2 boxes */}
      <div className="why-row bottom-row">
        <div className="why-card">
          <div className="why-icon">
            <FileCheck size={40} />
          </div>
          <h3>Minimal Documentation</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <DoorOpen size={40} />
          </div>
          <h3>Doorstep Services</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
