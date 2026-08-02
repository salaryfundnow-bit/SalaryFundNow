import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Sabri_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li className="dropdown">
          {/* <span className="dropbtn">Products</span> */}
          {/* <div className="dropdown-content">
           
            <Link to="/weekly" onClick={() => setMenuOpen(false)}>SFPL Weekly Loan</Link>
            <Link to="/monthly" onClick={() => setMenuOpen(false)}>SFPL Monthly Loan</Link>
            <Link to="/wash" onClick={() => setMenuOpen(false)}>SFPL Wash Loan</Link>
          </div> */}
        </li>

        
 <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/Emi_Calculator" onClick={() => setMenuOpen(false)}>Emi_Calculator</Link>
        
        <li><Link to="/client-stories" onClick={() => setMenuOpen(false)}>Client Stories</Link></li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="btn">Contact Us</button>
            

          </Link>
          
        </li>
        <li>
          <Link to="/LoanApply" onClick={() => setMenuOpen(false)}>
            
            <button className="btn">
            Apply Now
          </button>

          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
