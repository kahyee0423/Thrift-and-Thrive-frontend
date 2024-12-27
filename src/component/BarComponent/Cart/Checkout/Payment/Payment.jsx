import React from 'react'
import './Payment.css'

const Payment = () => {
  return (
    <section className="paymentSection">
    <h2 className="payment-sectionTitle">Payment</h2>
    <p className="payment-securityNote">
      All transactions are secure and encrypted.
    </p>
    <img
      src="./asset/payment-pic.png"
      alt="Payment methods"
      className="payment-paymentMethods"
    />
    <button type="submit" className="payment-payButton">
      Pay Now
    </button>
  </section>
  )
}

export default Payment