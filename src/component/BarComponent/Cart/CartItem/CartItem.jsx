import React from 'react';
import './CartItem.css';

// Same placeholder as ProductList
const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="100%25" height="100%25" fill="%23eee"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23aaa" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    // Add default values using destructuring
    const {
        productId,
        quantity = 0,
        price = 0,
        productName = 'Unknown Product',
        imageUrl = PLACEHOLDER_IMAGE
    } = item || {};

    // Calculate subtotal with null check
    const subtotal = (price * quantity) || 0;

    const handleQuantityChange = (newQuantity) => {
        if (onUpdateQuantity && newQuantity >= 0) {
            onUpdateQuantity(productId, newQuantity);
        }
    };

    return (
        <div className="cartItem">
            <div className="cartItemImage">
                <img 
                    src={imageUrl.startsWith('./') ? `${process.env.PUBLIC_URL}${imageUrl}` : imageUrl}
                    alt={productName}
                    onError={(e) => {
                        e.target.src = PLACEHOLDER_IMAGE;
                    }}
                />
            </div>
            <div className="cartItemDetails">
                <h3>{productName}</h3>
                <p className="price">RM {price?.toFixed(2) || '0.00'}</p>
                <div className="quantityControls">
                    <button 
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button 
                        onClick={() => handleQuantityChange(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <p className="subtotal">Subtotal: RM {subtotal.toFixed(2)}</p>
                <button 
                    className="removeButton"
                    onClick={() => onRemove && onRemove(productId)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;