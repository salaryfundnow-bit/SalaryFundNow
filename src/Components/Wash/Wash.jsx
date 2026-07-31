import React from 'react'
import LoanApply from '../LoanApply/LoanApply';
import './Wash.css';
import headerImage from '../../assets/Le-pa-salon.jpg';
const Wash = () => {
 return (
     <div className='product-main-container'>
      
       <div className='header-image-container'>
        <h2 className="emi-heading">
        <span className="emi-orange">SFPL</span>{" "}
        <span className="emi-blue">WASH LOAN</span>
      </h2>
         <img src={headerImage} alt="Sabrimala Vyapar Loan" className='header-image' />
       </div>
       <h1>Empowering Growth: Unlocking Potential Through “Sabrimala Vyapar Loan - Secured”</h1>
       <p>
         Sabrimala proudly introduces Sabrimala Vyapar Loan, an innovative secured financial solution designed for self-employed non-professionals (SENP), proprietors, and individuals. 
         It is crafted to meet the working capital needs of small businesses operating in Trading, Manufacturing, Services, and Livestock sectors.
       </p>
       <p>
         Through Sabrimala Vyapar Loan, we aim to empower MSME businesses, helping them thrive and contribute meaningfully to the socio-economic development of our nation.
       </p>
 
       <h2>Product Features and Eligibility</h2>
       <table>
         <tbody>
           <tr>
             <td>Loan Amount</td>
             <td>₹ 2,00,000 to 15,00,000</td>
           </tr>
           <tr>
             <td>Tenure</td>
             <td>12 to 96 Months</td>
           </tr>
           <tr>
             <td>Repayment Frequency</td>
             <td>Monthly</td>
           </tr>
           <tr>
             <td>Foreclosure Charges</td>
             <td>As applicable</td>
           </tr>
           <tr>
             <td>Loan Type</td>
             <td>Individuals</td>
           </tr>
           <tr>
             <td>Collateral Type</td>
             <td>Property (LAP)</td>
           </tr>
           <tr>
             <td>Eligibility</td>
             <td>Indian, SENP/Proprietorship, ≥3 years business vintage, Age 18-60, Residential/Business ownership</td>
           </tr>
           <tr>
             <td>Industry Type</td>
             <td>Manufacturing, Trading & Services</td>
           </tr>
         </tbody>
       </table>
 
       <h2>How to Apply</h2>
       <ul>
         <li>Visit the nearest Sabrimala Finance branch and our Relationship Officer will assist you.</li>
         <li>Call us on 1800-569-8899 for doorstep service assistance.</li>
         <li>Loan approval is at the sole discretion of Sabrimala Finance Private Limited.</li>
         <li>Complete KYC process is required to avail the loan.</li>
       </ul>
 
       <h2>Required Documents</h2>
       <ul>
         <li><strong>Primary ID:</strong> Aadhaar</li>
         <li><strong>Secondary ID:</strong> Voter ID, PAN, Passport, Driving Licence, MGNREGA Card, Government-issued letters, Bank Passbook</li>
         <li>Life Insurance Policy / Latest Premium Receipt</li>
         <li>Rent Agreement / Consumer Gas Connection Card / Utility Bills (not older than 90 days)</li>
       </ul>
 
       <h2>Apply Now</h2>
       <LoanApply />
     </div>
   )
 }

export default Wash