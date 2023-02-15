import React,{useState} from 'react'

const paymentPage = () => {
    const [payment, setpayment] = useState(0)
  return (
    <div>
      <h1>Payment Page!</h1>
<p onClick={()=> setpayment(payment+1)}> payment done!-{payment}</p>
    </div>
  )
}

export default paymentPage
