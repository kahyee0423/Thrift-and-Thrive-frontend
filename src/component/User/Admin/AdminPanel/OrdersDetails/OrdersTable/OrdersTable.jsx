import React, { useState, useEffect } from 'react'
import { adminApi } from '../../../../../../services/adminApi';
import OrderCharts from '../OrderCharts/OrderCharts';
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

            </tr>
          ))}
        </tbody>
      </table>
      <OrderCharts orders={orders} />
    </section>
  )
}

export default OrdersTable 