import React, { useState, useEffect } from 'react'
import { adminApi } from '../../../../../../services/adminApi';
import './ProductTable.css'

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await adminApi.getProducts();
            console.log('Loaded products:', data); // Debug log
            setProducts(data);
        } catch (error) {
            console.error('Failed to load products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (productData) => {
        try {
            await adminApi.addProduct(productData);
            loadProducts(); // Reload the list after adding
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    };

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <main className="product-productListContainer" role="main">
            <div className="product-header">
                <h2 className="product-title">Product list</h2>
                <button 
                    className="product-addButton" 
                    aria-label="Add new item"
                    onClick={() => handleAddProduct(/* Add product form data */)}
                >
                    <img src="./asset/add.png" alt="" className="addIcon" />
                    <span>Add item</span>
                </button>
            </div>
            
            <div className="product-productGrid">
                <div className="product-gridHeader">
                    <span>No</span>
                    <span>Items</span>
                    <span>Category</span>
                    <span>Price (RM)</span>
                    <span>Condition</span>
                    <span>Measurement</span>
                    <span>Materials</span>
                    <span>Actions</span>
                </div>
                
                {products.map(product => (
                    <div key={product.id} className="product-productItem">
                        <span>{product.id}</span>
                        <span>{product.name}</span>
                        <span>{product.category}</span>
                        <span>{product.price}</span>
                        <span>{product.condition}</span>
                        <div className="product-measurements">
                            {Object.entries(product.measurements || {}).map(([key, value]) => (
                                <div key={key}>{value}</div>
                            ))}
                        </div>
                        <span className="product-materials">{product.materials}</span>
                        <span className="product-actions">
                            <img
                                src="./asset/action-button.png"
                                className="customer-actionIcon"
                                alt="Edit product"
                                role="button"
                                tabIndex="0"
                                onClick={() => console.log('Edit product:', product.id)}
                            />
                        </span>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ProductTable 