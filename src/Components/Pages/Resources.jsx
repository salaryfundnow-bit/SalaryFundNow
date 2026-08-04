import React, { useState } from "react";
import '../../css/Resources.css'
import fin1920 from "../../Pdf/Financial_19-20.pdf";
import dlg2025 from "../../Pdf/Financial_19-20.pdf";
import dlg2026 from "../../Pdf/Financial_19-20.pdf";
import banner from "../../assets/finance-banner.jpg";

const Resources = () => {
  const [activeSection, setActiveSection] = useState("financials");
  const [selectedDlg, setSelectedDlg] = useState(null);

  return (
    <div>
      {/* ===== BANNER ===== */}
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

      {/* ===== CONTENT ===== */}
      <div style={{ display: "flex", gap: "40px", padding: "20px" }}>

        {/* ===== LEFT MENU ===== */}
        <div style={{ width: "250px" }}>

          {/* Financials */}
          <div
            style={menuStyle(activeSection === "financials")}
            onClick={() => setActiveSection("financials")}
          >
            Financials
          </div>

          {/* DLG */}
          <div style={{ marginTop: "15px" }}>
            <div
              style={menuStyle(activeSection === "dlg")}
              onClick={() => {
                setActiveSection("dlg");
                setSelectedDlg(null);
              }}
            >
              Annual Reports
            </div>

            {activeSection === "dlg" && (
              <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                <div
                  style={subMenuStyle}
                  onClick={() =>
                    setSelectedDlg({ title: "Annual Report 2025", pdf: dlg2025 })
                  }
                >
                  Annual Report 2025
                </div>

                <div
                  style={subMenuStyle}
                  onClick={() =>
                    setSelectedDlg({ title: "Annual Report 2026", pdf: dlg2026 })
                  }
                >
                  Annual Report 2026
                </div>
              </div>
            )}
          </div>

          {/* Other Policies */}
          {[
            { key: "fairPractice", label: "Fair Practice Code" },
            { key: "grievance", label: "Customer Grievance" },
            { key: "posh", label: "POSH Policy" },
            { key: "nach", label: "NACH Cancellation" },
            { key: "codeOfConduct", label: "Code of Conduct" }
          ].map(item => (
            <div
              key={item.key}
              style={{ ...menuStyle(activeSection === item.key), marginTop: "15px" }}
              onClick={() => setActiveSection(item.key)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div style={{ flex: 1 }}>

          {/* Financials */}
          {activeSection === "financials" && (
            <>
              <h2>Financials</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Financial 2019–20
              </a>
            </>
          )}

          {/* Annual Reports */}
          {activeSection === "dlg" && (
            <>
              <h2>Annual Reports</h2>
              {selectedDlg ? (
                <a href={selectedDlg.pdf} target="_blank" rel="noreferrer">
                  👉 Open {selectedDlg.title}
                </a>
              ) : (
                <p>Select a report from the left menu</p>
              )}
            </>
          )}

          {/* Fair Practice */}
          {activeSection === "fairPractice" && (
            <>
              <h2>Fair Practice Code</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Open Fair Practice Code PDF
              </a>
            </>
          )}

          {/* Customer Grievance */}
          {activeSection === "grievance" && (
            <>
              <h2>Customer Grievance</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Open Customer Grievance PDF
              </a>
            </>
          )}

          {/* POSH */}
          {activeSection === "posh" && (
            <>
              <h2>POSH Policy</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Open POSH Policy PDF
              </a>
            </>
          )}

          {/* NACH */}
          {activeSection === "nach" && (
            <>
              <h2>NACH Cancellation</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Open NACH Cancellation PDF
              </a>
            </>
          )}

          {/* Code of Conduct */}
          {activeSection === "codeOfConduct" && (
            <>
              <h2>Code of Conduct</h2>
              <a href={fin1920} target="_blank" rel="noreferrer">
                👉 Open Code of Conduct PDF
              </a>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

/* ===== STYLES ===== */
const menuStyle = active => ({
  cursor: "pointer",
  padding: "12px",
  background: active ? "#dbeafe" : "#eee",
  borderRadius: "6px",
  fontWeight: "600"
});

const subMenuStyle = {
  cursor: "pointer",
  padding: "8px",
  background: "#f5f5f5",
  borderRadius: "4px",
  marginBottom: "6px",
  fontSize: "14px"
};

export default Resources;
