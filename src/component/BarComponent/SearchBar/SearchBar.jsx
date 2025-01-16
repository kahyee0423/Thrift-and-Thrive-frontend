import React, { useState, useCallback } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, toggleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useCallback(async (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            e.preventDefault();
            console.log('SearchBar - Initiating search for:', searchTerm);
            
            if (typeof onSearch === 'function') {
                try {
                    await onSearch(searchTerm);
                } catch (error) {
                    console.error('SearchBar - Search failed:', error);
                }
            }
        }
    }, [onSearch, searchTerm]);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setSearchTerm('');
        if (typeof toggleSearch === 'function') {
            toggleSearch();
        }
    }, [toggleSearch]);

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleSearch}
                placeholder="Search products..."
                autoFocus
            />
            <button onClick={handleClear}>Cancel</button>
        </div>
    );
};

export default SearchBar; 