import React, { useState, useCallback } from 'react';
import './NavigationBar.css';
import UserMenu from '../BarComponent/UserMenu/UserMenu';
import NavigationLink from './NavLink/NavLink.jsx';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../BarComponent/SearchBar/SearchBar.jsx';
import SearchResults from '../BarComponent/SearchResults/SearchResults.jsx';
import { api } from '../../services/api';

const navigationLinks = [
  { label: 'Men', href: '/men' },
  { label: 'Women', href: '/women' },
  { label: 'Kids', href: '/kids' },
  { label: 'Accessories', href: '/accessories' },
];

const NavigationBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback(async (term) => {
    console.log('Searching for:', term);
    setSearchTerm(term);

    if (!term?.trim()) {
      setSearchResults(null);
      return;
    }

    try {
      const results = await api.searchProducts(term);
      console.log('Search results:', results);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    }
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchVisible(prev => !prev);
    setSearchResults(null);
  }, []);

  const goToCart = () => {
    navigate('/Cart');
  };

  return (
    <>
      {isSearchVisible ? (
        <div className="search-bar-container">
          <div className="search-container">
            <SearchBar 
              onSearch={handleSearch}
              toggleSearch={toggleSearch}
            />
            {searchResults && (
              <SearchResults 
                results={searchResults}
                searchTerm={searchTerm}
                onClose={() => {
                  setSearchResults(null);
                  setIsSearchVisible(false);
                  setSearchTerm('');
                }}
              />
            )}
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
