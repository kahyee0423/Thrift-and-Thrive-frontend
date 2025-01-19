import React, { useState, useCallback } from 'react';
import './header.css';
import UserMenu from '../BarComponent/UserMenu/UserMenu';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../BarComponent/SearchBar/SearchBar';
import SearchResults from '../BarComponent/SearchResults/SearchResults.jsx';
import { api } from '../../services/api';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback(async (term) => {
    const searchText = term || '';
    console.log('Header - Searching for:', searchText);
    setSearchTerm(searchText);
    
    if (!searchText.trim()) {
      setSearchResults(null);
      return;
    }

    try {
      const results = await api.searchProducts(searchText);
      console.log('Header - Search results received:', results);
      
      if (Array.isArray(results)) {
        setSearchResults(results);
      } else {
        console.error('Invalid results format:', results);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    }
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchVisible(prev => !prev);
    setSearchResults(null);
    setSearchTerm('');
  }, []);

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
        <header className="header search-mode">
          <div className="search-container">
            <SearchBar 
              onSearch={handleSearch}
              toggleSearch={toggleSearch}
            />
            <SearchResults 
              results={searchResults}
              searchTerm={searchTerm}
              onClose={() => {
                setSearchResults(null);
                setIsSearchVisible(false);
                setSearchTerm('');
              }}
            />
          </div>
        </header>
      )}
    </>
  );
};

export default Header; 
