import React from "react";
import "./RatesFees.css";
import { CheckCircle } from "lucide-react";

const RatesFees = () => {
  return (
    <section className="rates-section">
      <div className="container rates-container">

        <div className="rates-left">
          <h2>
            Transparent <span>Rates & Fees</span>
          </h2>

          <p>
   SalaryFundNow is a trusted digital lending platform offering instant personal loans and Salary advances for salaried professionals. 
   Our fast, paperless application process, quick approvals, transparent pricing, and zero hidden charges make borrowing simple and stress-free.
    Fully compliant with RBI Digital Lending Guidelines, we ensure secure, reliable, and responsible lending to help you manage your financial needs with confidence.

          </p>

          <div className="fee-table">

            <div className="fee-row">
              <span><CheckCircle size={18}/> Loan Amount</span>
              <strong>₹1000 – ₹200000</strong>
            </div>

            <div className="fee-row">
              <span><CheckCircle size={18}/> Rate of Interest (ROI)</span>
              <strong>0.10% to 1.00% per day</strong>
            </div>

            <div className="fee-row">
              <span><CheckCircle size={18}/> Processing Fee</span>
              <strong>4.00% to 10.00% (Exclusive of 18% GST)</strong>
            </div>

            <div className="fee-row">
              <span><CheckCircle size={18}/> Prepayment Charges</span>
              <strong>₹0 (No charges on early repayment)</strong>
            </div>

            <div className="fee-row">
              <span><CheckCircle size={18}/> Penalty</span>
              <strong>₹100/- per day</strong>
            </div>

          </div>
        </div>

        <div className="rates-right">
          <div className="highlight-card">

            <h3>Quick Loan Highlights</h3>

            <ul>
              <li>✓ 100% Online Loan Process</li>
              <li>✓ No Collateral Required</li>
              <li>✓ Instant Approval</li>
              <li>✓ Flexible Repayment</li>
              <li>✓ No Pre-closure Charges</li>
            </ul>

            <button>Apply for Loan</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RatesFees;