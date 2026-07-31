import React from 'react'
import './Products.css'
import product_1 from '../../assets/Product1.png'
import product_2 from '../../assets/Product2.png'
import product_3 from '../../assets/Product3.png'
import protrom from'../../assets/pro-table-top.png'


const Products = () => {
  return (
    <div className='Products'>
        
        <div className="Product">
            <img src={product_1} alt=''/>
            <div className="caption">
                <img src='' alt='' />
                <h2>Unsecured Loan SFPL</h2>
                <p>Unsecured Loan up-to Rs.40,000 for People/Enterprises who have been operating micro or small businesses minimum of three years. Tenure: 2 to 3 years. Easy monthly repayment through NACH.</p>
            </div>
        </div>
        <div className="Product">
            <img src={product_2} alt=''/>
             <div className="caption">
                <img src='' alt='' />
                <h2>Unsecured Loan SFPL</h2>
                <p>Unsecured Loan up-to Rs.2 Lacs for People/Enterprises who have been operating micro or small businesses minimum of three years. Tenure: 2 to 3 years. Easy monthly repayment through NACH.</p>
            </div>
        </div>
        <div className="Product">
            <img src={product_3} alt=''/>
             <div className="caption">
                <img src='' alt='' />
                <h2>Secured Loan SFPL</h2>
                <p>Secured Loan of 2Lacs - 5 Lacs for People/Enterprises who have been operating micro or small businesses minimum of three years. Tenure: 2 to 5 years. Easy monthly repayment through NACH.</p>
            </div>
        </div>

    </div>
  )
}

export default Products