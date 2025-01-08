import React from 'react';
import './CartItem.css';

const CartItem = ({ 
    productName, 
    imageUrl, 
    price, 
    quantity, 
    subtotal,
    onUpdateQuantity,
    onRemove 
}) => {
    return (
        <article className="cartItem">
            <div className="productImageContainer">
                <img src={imageUrl} alt={productName} className="productImage" />
                <div className="productDetails">
                    <h3>{productName}</h3>
                    <p>RM {price.toFixed(2)}</p>
                </div>
            </div>
            
            <div className="quantity"> 
                <div className="quantityControl">
                    <button 
                        className="quantityButton" 
                        onClick={() => onUpdateQuantity(Math.max(0, quantity - 1))}
                        aria-label="Decrease quantity"
                    >
                        -
                    </button>
                    <span className="quantityValue">{quantity}</span>
                    <button 
                        className="quantityButton" 
                        onClick={() => onUpdateQuantity(quantity + 1)}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="itemTotal">
                <span>RM {subtotal.toFixed(2)}</span>
                <button 
                    className="removeButton" 
                    onClick={onRemove}
                    aria-label="Remove item"
                >
                    <img src="./asset/dustbin.png" alt="Remove" className="removeIcon" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;