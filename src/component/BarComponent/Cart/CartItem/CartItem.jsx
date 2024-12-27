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
                    <img src="./asset/dustbin.png" alt="" className="removeIcon" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;