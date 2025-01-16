import React from 'react';
import './SearchResults.css';
import { Link, useNavigate } from 'react-router-dom';

const SearchResults = ({ results, searchTerm = '', onClose }) => {
    const navigate = useNavigate();

    if (!results || !Array.isArray(results)) {
        return null;
    }

    // Filter results based on search term
    const filteredResults = results.filter(product => {
        if (!searchTerm) return false;
        
        const searchLower = searchTerm.toLowerCase().trim();
        
        // Check keywords
        if (Array.isArray(product.keywords)) {
            const keywordMatch = product.keywords.some(keyword => 
                keyword && keyword.toLowerCase().includes(searchLower)
            );
            if (keywordMatch) return true;
        }

        // Check name and description
        const nameMatch = product.name && 
            product.name.toLowerCase().includes(searchLower);
        const descMatch = product.description && 
            product.description.toLowerCase().includes(searchLower);

        return nameMatch || descMatch;
    });

    if (filteredResults.length === 0) {
        return (
            <div className="search-results">
                <div className="search-results-empty">
                    No products found {searchTerm ? `for "${searchTerm}"` : ''}
                </div>
            </div>
        );
    }

    const handleProductClick = (product, event) => {
        event.preventDefault();
        onClose();
        navigate(`/${product.category.toLowerCase()}`);
    };

    return (
        <div className="search-results">
            {filteredResults.map(product => (
                <Link 
                    to={`/${product.category.toLowerCase()}`}
                    key={product.id}
                    className="search-result-item"
                    onClick={(e) => handleProductClick(product, e)}
                >
                    <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="search-result-image"
                    />
                    <div className="search-result-details">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span className="search-result-category">
                            Category: {product.category}
                        </span>
                        <div className="search-result-keywords">
                            Keywords: {product.keywords.join(', ')}
                        </div>
                        <span className="search-result-price">
                            RM {product.price.toFixed(2)}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SearchResults; 