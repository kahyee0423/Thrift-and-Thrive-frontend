import React from 'react'
import './AdminMainPage.css'
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminMainPage = () => {
    return (
        <main className="mainpage-adminContainer">
          <div className="mainpage-contentWrapper">
            <div className="mainpage-sidebarColumn">
              <AdminSideBar />
            </div>
            <div className="mainpage-main">
              Welcome, Admin!
            </div>
          </div>
        </main>
      );
}

export default AdminMainPage