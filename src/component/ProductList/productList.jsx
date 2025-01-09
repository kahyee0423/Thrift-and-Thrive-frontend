import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './productList.css';

const ProductList = ({ category, currentPage, productsPerPage }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                console.log('Fetching products with:', { category, currentPage, productsPerPage });
                const data = await api.getAllProducts(category, currentPage, productsPerPage);
                console.log('Received products:', data);
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err.message || 'Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, currentPage, productsPerPage]);

    const handleAddToCart = async (productId) => {
        try {
            const userId = 1; // Replace with actual user ID
            await api.addToCart(userId, productId, 1);
            alert('Product added to cart!');
        } catch (err) {
            console.error('Error adding to cart:', err);
            alert('Failed to add product to cart');
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!products.length) return (
        <div className="empty-state">
            <h2>No products available</h2>
            <p>Check back later for new products!</p>
        </div>
    );

    return (
        <div className="productsGrid">
            {products.map(product => (
                <div key={product.id} className="productCard">
                    <img 
                        src={process.env.PUBLIC_URL + product.imageUrl} 
                        alt={product.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = process.env.PUBLIC_URL + '/placeholder.jpg';
                        }}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>RM {product.price?.toFixed(2) || '0.00'}</p>
                    <p className="subcategory">{product.subcategory}</p>
                    <button 
                        className="addToCartButton"
                        onClick={() => handleAddToCart(product.id)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList; 