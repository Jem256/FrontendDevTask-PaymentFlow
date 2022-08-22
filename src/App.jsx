import React, {useState} from 'react';
import UserForm from './components/UserForm';
import PersonalInfo from './components/PersonalInfo';
import BillingCardInfo from './components/BillingCardInfo';
import PurchaseSuccess from './components/PurchaseConfirmed';
import PaymentInfo from './components/PaymentInfo';

function App() {
  const [personalInfo, setPersonalInfo] = useState(true)
  const [billingInfo, setBillingInfo] = useState(false)
  var [paymentInfo, setPaymentInfo] = useState(false)
  const [confirm, setConfirm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    state: ""

  })
  const [billFormData, setBillFormData] = useState({
    cardname: "",
    cardtype: "",
    details: "",
    exp: "",
    cvv: ""
  })

  const onClick = (id) => {
    if(id !== 1 ) {
      setPersonalInfo((prev) => prev !== personalInfo )
    } else if(id === 1) {
      setPersonalInfo((prev) => prev === personalInfo)
    } 

    if(id === 2) {
      setBillingInfo((prev) => prev === billingInfo)
    }else {
      setBillingInfo(prev => prev !== billingInfo)
    }
  }
  if(personalInfo) {
    paymentInfo = false
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setPersonalInfo(prev => prev = setBillingInfo(true))
  }

  const onChange = (e) => {
    const {name, value, type} = e.target
    setFormData(prev => {
      return {
        ...prev, [name]: type === "select" ? "selected" : value 
      }
    })
  }
  const handleBill = (e) => {
    const {name, value, type} = e.target
    setBillFormData(prev => {
      return {
        ...prev, [name]: type === "select" ? "selected" : value 
      }
    })
    
  }
  const onBillSubmit = (e) => {
    e.preventDefault()
    setBillingInfo(prev => prev = setPaymentInfo(true))
  }

  const home = () => {
    setPersonalInfo(prev => prev = true)
    setPersonalInfo(prev => prev = true)
    window.location.reload()
  }
 
  const pay = () => {
    setPaymentInfo(prev => prev = setConfirm(true))
  }

  const cancelPayment = (e) => {
    e.preventDefault()
    if(alert) {
      setFormData('')
      setBillFormData('')

      setPersonalInfo(true)
      setBillingInfo(false)
      setPaymentInfo(false)
    }
    window.location.reload()
    return
  }

  return (
    <div className='app'>
      <div className="app__container">
        {!confirm ? <UserForm onClick={onClick} 
          personalInfo={personalInfo} 
          billingInfo={billingInfo} 
          paymentInfo={paymentInfo}
          confirm={confirm} 
        /> : ''}
        {personalInfo && <PersonalInfo onChange={onChange} cancel={cancelPayment} onSubmit={onSubmit} formData={formData} />}

        {billingInfo && <BillingCardInfo handleBill={handleBill} cancel={cancelPayment} billFormData={billFormData} onBillSubmit={onBillSubmit} />}
        
        {paymentInfo && <PaymentInfo pay={() => pay()} cancel={cancelPayment} />}
        
        {confirm && <PurchaseSuccess home={() => home()} />}
      </div>
    </div>
  );
}

export default App;
