import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        stockQuantity: '',
        category: '',
        subcategory: '',
        imageUrl: '',
        keywords: ''  // Will be split into array on submit
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert keywords string to array and clean up any empty spaces
        const keywordsArray = formData.keywords
            .split(',')
            .map(keyword => keyword.trim())
            .filter(keyword => keyword !== '');

        onSubmit({
            ...formData,
            price: parseFloat(formData.price),
            stockQuantity: parseInt(formData.stockQuantity),
            keywords: keywordsArray
        });
    };

    return (
        <div className="add-product-modal">
            <div className="add-product-content">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price (RM)</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stockQuantity">Stock Quantity</label>
                        <input
                            type="number"
                            id="stockQuantity"
                            name="stockQuantity"
                            value={formData.stockQuantity}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subcategory">Subcategory</label>
                        <input
                            type="text"
                            id="subcategory"
                            name="subcategory"
                            value={formData.subcategory}
                            onChange={handleChange}
                            placeholder="e.g., Hoodie, T-Shirt, Jeans"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="asset/product-image.jpg"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="keywords">Keywords</label>
                        <input
                            type="text"
                            id="keywords"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleChange}
                            placeholder="blue, cotton, hoodie (comma-separated)"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-button">Add Product</button>
                        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm; 