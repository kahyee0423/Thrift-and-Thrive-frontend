import React from 'react';
import './SearchBar.css';

const SearchBar = ({ toggleSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button onClick={toggleSearch}>X</button>
    </div>
  );
};

export default SearchBar;