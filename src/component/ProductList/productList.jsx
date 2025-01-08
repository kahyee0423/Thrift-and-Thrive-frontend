import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './productList.css';

const ProductList = ({ category, currentPage, productsPerPage }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, [category, currentPage, productsPerPage]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await api.getProducts(category, currentPage, productsPerPage);
            setProducts(data);
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async (productId) => {
        try {
            console.log('Adding product to cart:', productId); // Debug log
            const userId = 1; // Using default user for testing
            const response = await api.addToCart(userId, productId, 1);
            console.log('Cart response:', response); // Debug log
            alert('Product added to cart!');
        } catch (err) {
            console.error('Error details:', err); // Debug log
            alert(`Failed to add product to cart: ${err.message}`);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="productsGrid">
            {products.map(product => (
                <div key={product.id} className="productCard">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>RM {product.price}</p>
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