import React from 'react'
import './OrderHistory.css'

const OrderHistory = () => {
  return (
    <section className="orderHistory" aria-label="Order history">
      <h2 className="sectionTitle">Order History</h2>
      <p className="emptyState">You haven't placed any orders yet.</p>
    </section>
  );
};

export default OrderHistory;