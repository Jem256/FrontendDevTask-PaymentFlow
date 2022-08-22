import React from 'react'

function BillingPayInfo({ cancelPayment, pay }) {
  return (
    <div className='container'>
      <div className='paymentContainer'>
          <div className='paymentContainer__top'>
            <p>Item Name</p> <p><span>N</span>Price</p>
          </div>
          <div className='paymentContainer__bottom'>
            <div className='data1'>
              <p>Data science and usability</p>
              <p>50,000.00</p>
            </div>
            <div className='data2'>
              <p>Shipping</p>
              <p><span>0.00</span></p>
            </div>
          </div>
          <div className='cartContainer'>
            <p className='total'>Total</p>
            <p className='value'>50,000.00</p>
          </div>
        </div>
      <button onClick={pay}>Pay</button>  
      <span className='cancelSpan' onClick={cancelPayment}>Cancel Payment</span>
    </div>
  )
}

export default BillingPayInfo