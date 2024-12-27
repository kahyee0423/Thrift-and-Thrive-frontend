import React, { useState } from 'react';
import './header.css';
import UserMenu from '../BarComponent/UserMenu/UserMenu';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../BarComponent/SearchBar/SearchBar';

const Header = () => {
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
      {!isSearchVisible ? (
        <header className="header">
          <nav className="navigation">
            <div className="links">
              <a href="/" className="link">Home</a>
              <a href="/contact" className="link">Contact Us</a>
            </div>
            <h1 className="brand">Thrift & Thrive</h1>
            <div className="socialIcons">
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
                    className="icon"
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
          <nav className="categoryNav">
            <ul className="categories">
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </nav>
        </header>
      ) : (
        <SearchBar toggleSearch={toggleSearch} />
      )}
    </>
  );
};

export default Header;