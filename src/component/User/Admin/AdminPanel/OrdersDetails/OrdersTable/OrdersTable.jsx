import React, { useState, useEffect } from 'react'
import { adminApi } from '../../../../../../services/adminApi';
import './OrdersTable.css'

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await adminApi.getOrders();
      console.log('Loaded orders:', data); // Debug log
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to load orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <section className="orderSection">
      <h2 className="order-sectionTitle">Orders</h2>
      <table className="order-customerTable" role="grid">
        <thead>
          <tr>
            <th className="order-tableHeader" scope="col">Order ID</th>
            <th className="order-tableHeader" scope="col">User ID</th>
            <th className="order-tableHeader" scope="col">Date</th>
            <th className="order-tableHeader" scope="col">Total (RM)</th>
            <th className="order-tableHeader" scope="col">Status</th>
            <th className="order-tableHeader" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="order-tableCell">{order.id}</td>
              <td className="order-tableCell">{order.userId}</td>
              <td className="order-tableCell">{order.orderDate}</td>
              <td className="order-tableCell">{order.total}</td>
              <td className="order-tableCell">{order.status}</td>
              <td className="order-tableCell">
                <img
                  src="./asset/action-button.png"
                  className="order-actionIcon"
                  alt="View order details"
                  role="button"
                  tabIndex="0"
                  onClick={() => console.log('View order:', order.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default OrdersTable 