import React from 'react';
import './CustomerDetails.css';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import CustomerTable from './CustomerTable/CustomerTable';

const CustomerDetails = () => {
    return (
        <main className="customer-adminContainer">
          <div className="customer-contentWrapper">
            <div className="customer-sidebarColumn">
              <AdminSideBar />
            </div>
            <div className="customer-mainColumn">
              <CustomerTable />
            </div>
          </div>
        </main>
      );
}

export default CustomerDetails;