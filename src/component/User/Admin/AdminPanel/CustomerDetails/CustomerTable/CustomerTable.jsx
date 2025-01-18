import React from 'react'
import './CustomerTable.css'

const customers = [
    {
      id: 1,
      username: 'Tan Tien Peng',
      email: 'ttp@gmail.com',
      contactNumber: '011-2345678'
    }
  ];

const CustomerTable = () => {
    return (
        <section className="customerSection">
          <h2 className="customer-sectionTitle">Customers</h2>
          <table className="customer-customerTable" role="grid">
            <thead>
              <tr>
                <th className="customer-tableHeader" scope="col">No</th>
                <th className="customer-tableHeader" scope="col">Username</th>
                <th className="customer-tableHeader" scope="col">Email address</th>
                <th className="customer-tableHeader" scope="col">Contact number</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-tableCell">{customer.id}</td>
                  <td className="customer-tableCell">{customer.username}</td>
                  <td className="customer-tableCell">{customer.email}</td>
                  <td className="customer-tableCell">{customer.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      );
}

export default CustomerTable