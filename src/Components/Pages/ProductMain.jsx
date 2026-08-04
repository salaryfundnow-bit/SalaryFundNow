import React from 'react'
import '../../css/ProductMain.css'

const ProductMain = () => {
  return (
    <div className="product-main-container">
      <header className="product-header">
        
        <h2 className="emi-heading">
        <span className="emi-orange">Loan</span>{" "}
        <span className="emi-blue">Product</span>
      </h2>
        <p>
        </p>
      </header>

      <section className="product-section">
        <Products />
      </section>
    </div>
  );
};

export default ProductMain;
