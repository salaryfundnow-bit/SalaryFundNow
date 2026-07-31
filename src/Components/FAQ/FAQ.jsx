import React, { useState } from "react";
import "./FAQ.css";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Who is eligible to apply for a SalaryFundNow loan?",
    answer:
      "Any salaried employee meeting our eligibility criteria can apply online with minimal documentation."
  },
  {
    question: "How does SalaryFundNow work?",
    answer:
      "Simply apply online, complete KYC verification, receive approval, and get the loan directly into your bank account."
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Most eligible applications are approved within a few minutes."
  },
  {
    question: "What documents are required?",
    answer:
      "PAN Card, Aadhaar Card, Bank Statement, Salary Slip and employment details."
  },
  {
    question: "Can I repay my loan early?",
    answer:
      "Yes. There are no pre-closure charges for early repayment."
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We use bank-grade encryption and follow RBI Digital Lending Guidelines."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Call us, email us or submit your query through the Contact Us page."
  },
  {
    question: "What is the loan amount available?",
    answer:
      "Loan amounts range from ₹1,000 to ₹1,00,000 depending on eligibility."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <span className="faq-small-title">
          GOT QUESTIONS?
        </span>

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <p className="faq-subtitle">
          If you have any further questions, please don't hesitate to reach out
          to our customer support team for assistance.
        </p>

        <div className="faq-grid">

          {faqData.map((faq, index) => (
            <div
              className={`faq-card ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{faq.question}</h4>

                <span>
                  {activeIndex === index ? <Minus /> : <Plus />}
                </span>
              </div>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

        <div className="faq-cta">

          <h3>Need Quick Financial Assistance?</h3>

          <p>
            Apply online in just a few minutes and get quick, transparent,
            and hassle-free personal loans with SalaryFundNow.
          </p>

          <button className="apply-btn">
            Apply Now
          </button>

        </div>

      </div>
    </section>
  );
}