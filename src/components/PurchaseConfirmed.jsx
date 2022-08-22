import React from 'react'

function PurchaseSuccess({home}) {
  return (
    <div className='confirmContainer'>
      <div className='confirmContainer__div'>
        <div className='confirmContainer__heading'>
          <div className='confirmContainer__icon'></div>
          <h2>Purchase Completed</h2>
        </div>
        <p><small className='confirmSmall'>Please check your email for details concerning <br/> the transaction</small></p>
        <span className='confirmSpan' onClick={home}>Return Home</span>
      </div>
    </div>
  )
}

export default PurchaseSuccess