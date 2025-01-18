import React from 'react';
import './CartItem.css';

// Placeholder image for products without images
const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="100%25" height="100%25" fill="%23eee"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23aaa" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    if (!item) {
        console.warn('CartItem received null or undefined item');
        return null;
    }

    const {
        productId,
        quantity = 0,
        price = 0,
        productName = 'Unknown Product',
        imageUrl = PLACEHOLDER_IMAGE,
    } = item;

    const subtotal = (price * quantity) || 0;

    const handleRemove = () => {
        if (onRemove) {
            onRemove(productId);
        }
    };

    return (
        <div className="cartItem">
            {/* Product Image */}
            <div className="cartItemImage">
                <img
                    src={imageUrl}
                    alt={productName}
                    onError={(e) => {
                        e.target.src = PLACEHOLDER_IMAGE;
                    }}
                />
            </div>

            {/* Product Details */}
            <div className="cartItemDetails">
                <h3>{productName}</h3>
                <p className="price">RM {price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="cartItemQuantity">
                <button
                    onClick={() => onUpdateQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button onClick={() => onUpdateQuantity(quantity + 1)}>
                    +
                </button>
            </div>

            {/* Total (Subtotal for the item) */}
            <div className="cartItemTotal">
                RM {subtotal.toFixed(2)}
            </div>

            {/* Remove Button */}
            <button
                className="removeButton"
                onClick={handleRemove}
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;

