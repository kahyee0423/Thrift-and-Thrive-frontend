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
      src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/1347b1c058ebf546dbcc4dbe6bec90b02a11857efdc7d15221b91daece9eca13?apiKey=904907665fd04df7b56e80ff4b56e284&"
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