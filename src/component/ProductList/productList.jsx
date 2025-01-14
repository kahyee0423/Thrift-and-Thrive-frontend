import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './productList.css';

const ProductList = ({ category, currentPage, productsPerPage }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartQuantities, setCartQuantities] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Fetch products
                const productsData = await api.getAllProducts(category, currentPage, productsPerPage);
                setProducts(Array.isArray(productsData) ? productsData : []);

                // Fetch cart to get current quantities
                const userId = 1; // Replace with actual user ID
                const cartData = await api.getCart(userId);
                
                // Create a map of productId to quantity
                const quantities = {};
                if (cartData && cartData.items) {
                    cartData.items.forEach(item => {
                        quantities[item.productId] = item.quantity;
                    });
                }
                setCartQuantities(quantities);

            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category, currentPage, productsPerPage]);

    const handleAddToCart = async (productId) => {
        try {
            const userId = 1; // Replace with actual user ID
            const currentQuantity = cartQuantities[productId] || 0;
            const newQuantity = currentQuantity + 1;
            
            // Update cart in backend
            await api.addToCart(userId, productId, newQuantity);
            
            // Fetch updated cart to ensure sync with backend
            const updatedCart = await api.getCart(userId);
            if (updatedCart && updatedCart.items) {
                const newQuantities = {};
                updatedCart.items.forEach(item => {
                    newQuantities[item.productId] = item.quantity;
                });
                setCartQuantities(newQuantities);
            }
            
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
                    <div className="addToCartSection">
                        <span className="quantity">
                            {cartQuantities[product.id] || 0} in cart
                        </span>
                        <button 
                            className="addToCartButton"
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;