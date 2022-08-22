import React from 'react'

function PersonalInfo({onSubmit, onChange, formData, cancelPayment}) {
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Opara Linus Ahmed" name='name' onChange={onChange} value={formData.name} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address<span>*</span></label>
          <input type="email" className="form-control" id="email" placeholder="OparaLinusAhmed@devmail.com" name='email' onChange={onChange} value={formData.email} required />
        </div>
        <div className="form-group address1">
          <label htmlFor="address1">Address 1</label>
          <input type="text" className="form-control" id="address1" placeholder="The address of the user goes here" name='address1' onChange={onChange} value={formData.address1} required />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address 2</label>
          <input type="text" className="form-control" id="address2" placeholder="and here" name='address2' onChange={onChange} value={formData.address2} required />
        </div>
        <div className="form-group_location">
          <div className="form-group-flex1">
            <label htmlFor="localGovt">Local Government</label>
            <input type="text" className="form-control" id="localGovt" placeholder="Surulere" name='localGovt' onChange={onChange} value={formData.localGovt} required />
          </div>
          <div className="form-group-flex2">
            <label htmlFor="state">State</label>
            <select type="text" className="form-control" id="state"name='state' onChange={onChange} value={formData.state}>
              <option value="lagos">Lagos</option>
            </select>
          </div>
        </div>
        <button>Next</button>  
        <span className='cancelSpan' onClick={cancelPayment}>Cancel Payment</span>
      </form>
    </div>
  )
}

export default PersonalInfo