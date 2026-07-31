import React, { useState } from 'react';

const LoanApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    businessType: '',
    loanAmount: '',
    documents: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted:', formData);
    alert('Your Sabrimala Vyapar Loan application has been submitted. Our officer will contact you.');
  };

  return (
    <form onSubmit={handleSubmit} className='loan-apply-form'>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type='number' name='age' value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Business Type:</label>
        <input type='text' name='businessType' value={formData.businessType} onChange={handleChange} required />
      </div>
      <div>
        <label>Loan Amount:</label>
        <input type='number' name='loanAmount' value={formData.loanAmount} onChange={handleChange} required />
      </div>
      <div>
        <label>Upload Documents:</label>
        <input type='file' name='documents' onChange={handleChange} multiple required />
      </div>
      <button type='submit'>Submit Application</button>
    </form>
  );
}

export default LoanApply;
