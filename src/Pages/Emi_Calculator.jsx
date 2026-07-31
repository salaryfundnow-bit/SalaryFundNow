import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./../css/Emi_Calculator.css";

const Emi_Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emiData, setEmiData] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(loanTenure);

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
      setEmiData(null);
      alert("⚠️ Please enter valid values.");
      return;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setEmiData({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      principal: P.toFixed(2),
    });
  };

  const COLORS = ["#005acd", "#ff9800"];

  const chartData = emiData
    ? [
        { name: "Principal Amount", value: parseFloat(emiData.principal) },
        { name: "Total Interest", value: parseFloat(emiData.totalInterest) },
      ]
    : [];

  return (
    <div className="emi-container">
      <h2 className="emi-heading">
        <span className="emi-orange">EMI</span>{" "}
        <span className="emi-blue">Calculator</span>
      </h2>

      <div className="emi-form">
        <label>Loan Amount (₹):</label>
        <input
          type="number"
          placeholder="Enter loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <label>Interest Rate (% per year):</label>
        <input
          type="number"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        <label>Loan Tenure (months):</label>
        <input
          type="number"
          placeholder="Enter tenure in months"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />

        <button onClick={calculateEMI}>Calculate EMI</button>
      </div>

      {emiData && (
        <div className="emi-result-container">
          <div className="emi-results">
            <p><strong>Loan EMI:</strong> ₹{emiData.emi}</p>
            <p><strong>Total Interest Payable:</strong> ₹{emiData.totalInterest}</p>
            <p><strong>Total Payment (Principal + Interest):</strong> ₹{emiData.totalPayment}</p>
          </div>

          <div className="emi-chart">
            <h4>Break-up of Total Payment</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emi_Calculator;
