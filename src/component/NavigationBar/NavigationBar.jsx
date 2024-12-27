import React, { useState } from 'react';
import './NavigationBar.css';
import UserMenu from '../BarComponent/UserMenu/UserMenu';
import NavigationLink from './NavLink/NavLink.jsx';
import { useNavigate } from 'react-router-dom';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Men', href: '/men' },
  { label: 'Women', href: '/women' },
  { label: 'Kids', href: '/kids' },
  { label: 'Accessories', href: '/accessories' },
];

const icons = [
  {
    src: './asset/search-icon.png',
    alt: 'Search',
    isCart: false,
  },
  {
    src: './asset/cart-icon.png',
    alt: 'Shopping Cart',
    isCart: false,
  },
  {
    src: './asset/profile-icon.png',
    alt: 'User Account',
    isCart: false,
    isUser: true, 
  },
];

const NavigationBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const goToCart = () => {
    navigate('/Cart');
  };

  return (
    <>
      {isSearchVisible ? (
        <div className="search-bar-container">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button onClick={toggleSearch}>X</button>
          </div>
        </div>
      ) : (
        <nav className="navigationContainer" role="navigation" aria-label="Main navigation">
          <h1 className="brandName" onClick={() => navigate('/')}>
            Thrift & Thrive
          </h1>
          <div className="navigationLinks">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.href} text={link.label} href={link.href} />
            ))}
          </div>
          <div className="iconContainer">
            <img
              src="./asset/search-icon.png"
              alt="Search Icon"
              className="icon"
              onClick={toggleSearch}
            />
            <div className="profileIconContainer">
              <UserMenu>
                <img
                  src="./asset/profile-icon.png"
                  alt="Profile Icon"
                  className="icon profileIcon"
                />
              </UserMenu>
            </div>
            <img
              src="./asset/cart-icon.png"
              alt="Cart Icon"
              className="icon"
              onClick={goToCart}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
