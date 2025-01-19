import React from 'react';
import './MobileNav.css';
import { useNavigate } from 'react-router-dom';

const MobileNav = ({ isOpen, toggleMenu }) => {

  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate('/contact'); 
  };

  return(
    <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <img className='logo' src='./logo.png' alt="Logo"/>

        <ul>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/accessories">Accessories</a></li>
        </ul>
        <button className="contact-btn-1" onClick={goToContactUs}>Contact Us</button>
      </div>
    </div>
  );
};

export default MobileNav;