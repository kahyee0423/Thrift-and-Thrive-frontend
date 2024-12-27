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
                <th className="customer-tableHeader" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-tableCell">{customer.id}</td>
                  <td className="customer-tableCell">{customer.username}</td>
                  <td className="customer-tableCell">{customer.email}</td>
                  <td className="customer-tableCell">{customer.contactNumber}</td>
                  <td className="customer-tableCell">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/03f9995205d36eb7bd0fe4ed2f2c557c582a1f623568adca74df6fbd9db42759?apiKey=904907665fd04df7b56e80ff4b56e284&"
                      className="customer-actionIcon"
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
      );
}

export default CustomerTable