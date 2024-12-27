import React from 'react'
import './OrdersTable.css'

const orders = [
    {
      id: 1,
      username: 'Tan Tien Peng',
      itemorder: 'Shoes',
      invoiceNo: '2356320',
      dateorder: '23-2-2024',
      status: 'pending'
    }
  ];

const OrdersTable = () => {
  return (
    <section className="orderSection">
          <h2 className="order-sectionTitle">Orders</h2>
          <table className="order-customerTable" role="grid">
            <thead>
              <tr>
                <th className="order-tableHeader" scope="col">No</th>
                <th className="order-tableHeader" scope="col">Username</th>
                <th className="order-tableHeader" scope="col">Item Order</th>
                <th className="order-tableHeader" scope="col">Invoice No</th>
                <th className="order-tableHeader" scope="col">Date Order</th>
                <th className="order-tableHeader" scope="col">Status</th>
                <th className="order-tableHeader" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((orders) => (
                <tr key={orders.id}>
                  <td className="order-tableCell">{orders.id}</td>
                  <td className="order-tableCell">{orders.username}</td>
                  <td className="order-tableCell">{orders.itemorder}</td>
                  <td className="order-tableCell">{orders.invoiceNo}</td>
                  <td className="order-tableCell">{orders.dateorder}</td>
                  <td className="order-tableCell">{orders.status}</td>
                  <td className="order-tableCell">
                    <img
                      src="./asset/action-button.png"
                      className="order-actionIcon"
                      alt="Edit customer"
                      role="button"
                      tabIndex="0"
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