import React from 'react'
import './AdminSideBar.css'
import { useNavigate } from 'react-router-dom';

const AdminSideBar = () => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <nav className="admin-sidebarNav" role="navigation" aria-label="Main navigation">
      <h1 className="admin-welcomeHeading">Welcome, Admin</h1>
      <a href="/CustomerDetails" className="admin-navLink" aria-current="page">
        Customer Details
      </a>
      <a href="/OrdersDetails" className="admin-navLink">
        Orders
      </a>
      <a href="/ProductAvailable" className="admin-navLink">
        Product List
      </a>
      <button 
        onClick={handleSignOut}
        className="admin-signOutButton"
        aria-label="Sign out of admin panel"
      >
        Sign out
      </button>
    </nav>
  );
}

export default AdminSideBar