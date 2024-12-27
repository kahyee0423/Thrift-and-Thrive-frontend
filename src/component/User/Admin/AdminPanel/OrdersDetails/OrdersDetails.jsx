import React from 'react'
import './OrdersDetails.css'
import OrdersTable from './OrdersTable/OrdersTable'
import AdminSideBar from '../AdminSideBar/AdminSideBar'

const OrdersDetails = () => {
  return (
    <main className="order-adminContainer">
          <div className="order-contentWrapper">
            <div className="order-sidebarColumn">
              <AdminSideBar />
            </div>
            <div className="order-mainColumn">
              <OrdersTable />
            </div>
          </div>
        </main>
  )
}

export default OrdersDetails