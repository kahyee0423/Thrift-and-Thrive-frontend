import React from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
  return (
    <aside className="orderSummary">
      <h2 className="orderSummary-sectionTitle">Summary</h2>
      <div className="orderSummary-productItem">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/e2732a6fd59834681d260d9c81aa05c874bbc32f202138f7d5ca86710ca0a466?apiKey=904907665fd04df7b56e80ff4b56e284&"
          alt="Product thumbnail"
          className="orderSummary-productImage"
        />
        <span className="orderSummary-productName">product name</span>
        <span className="orderSummary-productPrice">RM</span>
        </div>
        <div className="orderSummary-summaryRow">
          <ul>Subtotal</ul>
          <ul>Shipping Fee</ul>
        </div>
        <div className="orderSummary-summaryTotal">Total</div>
    </aside>
  )
}

export default OrderSummary