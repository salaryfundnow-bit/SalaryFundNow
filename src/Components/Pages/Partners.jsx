import React from "react";
import '../css/Partners.css'
import banner from "../assets/finance-banner.jpg";
// Lenders images
const lenders = [
  "Partners/13.png",
  "Partners/14.png",
  "Partners/15.png",
  "Partners/16.png",
  "Partners/17.png",
  "Partners/18.png",
  "Partners/19.png",
  "Partners/20.png",
  "Partners/21.png",
  "Partners/22.png",
  "Partners/5.png",
  "Partners/4.png",
  "Partners/3.png",
  "Partners/2.png",
  "Partners/1.png"
];

// IT Partners images
const itPartners = [
  "Partners/ai.png",
  "Partners/Scaf.png",
  "Partners/sg.png",
  "Partners/rf.png",
  "Partners/tl.png"
];

const Partners = () => {
  return (
    <section style={{ padding: "60px 0 40px" }}>

       <div
              style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                marginBottom: "30px"
              }}
            >
              <img
                src={banner}
                alt="Banner"
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
            </div>

      <div className="container-fluid">
        <div
          className="row"
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                {/* ===== LENDERS ===== */}
                <div id="partners">
                  <div id="partnerheading">
                    <h3>Lenders</h3>
                  </div>

                  <p
                    style={{
                      paddingLeft: "73px",
                      paddingRight: "60px",
                      paddingBottom: "27px"
                    }}
                  >
                    Sabrimala Fintech Pvt Ltd is a Delhi based Non-Banking
                    Financial Company – Non-Deposit Company (NBFC-ND)
                    incorporated in 2019. The company received its Certificate
                    of Registration in March 2021 and focuses on lending to
                    entrepreneurs engaged in income-generating activities.
                  </p>

                  <ul className="partners-list">
                    {lenders.map((img, index) => (
                      <li key={index} style={{ position: "relative" }}>
                        <img src={img} alt={`Lender ${index + 1}`} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ===== GAP ===== */}
                <div style={{ height: "60px" }} />

                {/* ===== IT PARTNERS ===== */}
                <div id="partners">
                  <div id="partnerheading">
                    <h3>IT Partner</h3>
                  </div>

                  <ul className="partners-list">
                    {itPartners.map((img, index) => (
                      <li key={index} style={{ position: "relative" }}>
                        <img src={img} alt={`IT Partner ${index + 1}`} />
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
