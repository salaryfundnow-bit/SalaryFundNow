import React from 'react'
import '../../css/footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'   // <-- add this


const Footer = () => {
  return (
    <footer className="footer">
  
      <div className="footer-container">
        
        {/* Left: Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">SalaryFundNow</h2>
          <p>
            Take control of your finances with smart and flexible funding solutions. From unexpected expenses to important life goals, we provide fast, reliable financial support with easy repayment options and exceptional customer service.
          </p>
        </div>

        {/* Center: Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductMain">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/Emi_Calculator">Emi_Calculator</a></li>
          </ul>
        </div>

        {/* Right: Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SalaryFundNow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
