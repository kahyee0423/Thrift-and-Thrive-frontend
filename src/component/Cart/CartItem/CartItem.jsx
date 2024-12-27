import React from 'react';
import './CartItem.css';

const CartItem = ({ image, price }) => {
    return (
        <article className="cartItem">
            <div className="productImageContainer">
                <img src={image} alt="Product" className="productImage" />
            </div>
            <div className="quantity"> 
                 <div className="quantityControl" role="spinbutton" tabIndex="0">
                    <button className="quantityButton" aria-label="Decrease quantity">-</button>
                    <span className="quantity">1</span>
                    <button className="quantityButton" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <div className="controls">
                <span className="currency">RM</span>
                <button className="removeButton" aria-label="Remove item">
                    <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/125c54f4849665880e301c27a99bea93c08f68d61b723d7d5d5a5c148c7cca80?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className="removeIcon" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;