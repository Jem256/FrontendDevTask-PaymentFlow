import React from 'react';

export default function UserForm({ onClick, personalInfo, billingInfo, paymentInfo }) {
  
  return (
    <div className='userForm'>
      <h3>Complete Your Purchase</h3>
      <div className='linkSlide'>
        <h4 
          className={personalInfo ? 'personalInfo active' : 'personalInfo'} 
          onClick={() => onClick(1)}
        >
          Personal Info 
          {personalInfo && <hr style={{ display: 'block' }} />}
        </h4>
        <h4 className={billingInfo ? 'billingInfo active' : 'billingInfo' } 
          onClick={() => onClick(2)}> Billing Info
          {billingInfo && <hr style={{ display: 'block' }} />}
          {paymentInfo && <hr style={{ display: 'block' }} />}
        </h4>
        <h4 className='confirmPayment'>Confirm Payment
          <hr />
        </h4> 
      </div>
    </div>
  );
}
