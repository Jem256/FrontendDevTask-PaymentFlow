import React from 'react'

function BillingCardInfo({onBillSubmit, handleBill, billFormData, cancelPayment}) {
  return (
    <div className='container'>
      <form onSubmit={onBillSubmit}>
        <div className="form-group bill">
          <label htmlFor="cardName">Name on Card<span>*</span></label>
          <input type="text" className="form-control" id="cardName" placeholder="Opara Linus Ahmed" name='cardName' onChange={handleBill} value={billFormData.cardName} required />
        </div>

        <div className="form-group bill">
          <label htmlFor="cardType">Card Type<span>*</span></label>
          <select onChange={handleBill} value={billFormData.cardtype} type="select" id='cardType' name="cardType" className="form-control" >
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
          </select>
        </div>
        
        <div className="form-group_location">
          <div className="form-group-bill-flex1">
            <label htmlFor="cardDetails">Card details<span>*</span></label>
            <input type="text" className="form-control" id="cardDetails" placeholder='4456 9876 6890 4657' name='cardDetails' onChange={handleBill} value={billFormData.cardDetails} required />
          </div>
          <div className="form-group-bill-flex2 first">
            <label htmlFor="expiryDate">Expiry date<span>*</span></label>
            <input type="text" className="form-control" id="expiryDate" placeholder='04 / 23' name='expiryDate' onChange={handleBill} value={billFormData.expiryDate} required />
          </div>
          <div className="form-group-bill-flex2">
            <label htmlFor="cvv">CVV<span>*</span></label>
            <input type="text" className="form-control" id="cvv" placeholder='923' name='cvv' onChange={handleBill} value={billFormData.cvv} required />
          </div>
        </div>
        <button>Next</button>  
        <span className='cancelSpan' onClick={cancelPayment}>Cancel Payment</span>
      </form>
    </div>
  )
}

export default BillingCardInfo