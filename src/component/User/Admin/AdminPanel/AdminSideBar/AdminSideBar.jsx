import React from 'react'
import './AdminSideBar.css'
import { useNavigate } from 'react-router-dom';

const AdminSideBar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <nav className="admin-sidebarNav" role="navigation" aria-label="Main navigation">
      <h1 className="admin-welcomeHeading">Welcome, Admin</h1>
      <button 
        onClick={handleBackToHome}
        className="admin-backButton"
        aria-label="Go back to home page"
      >
        ← Back to Home
      </button>
      <div className="admin-leftSide">
      <h1 className="admin-panelTitle">Admin Panel</h1>
      </div>
      
        <a href="/CustomerDetails" className="admin-navLink">
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
};

export default AdminSideBar; 