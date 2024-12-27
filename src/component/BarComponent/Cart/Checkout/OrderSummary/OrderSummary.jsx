import React from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
  return (
    <aside className="orderSummary">
      <h2 className="orderSummary-sectionTitle">Summary</h2>
      <div className="orderSummary-productItem">
        <img
          src="./asset/blank-pic.png"
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