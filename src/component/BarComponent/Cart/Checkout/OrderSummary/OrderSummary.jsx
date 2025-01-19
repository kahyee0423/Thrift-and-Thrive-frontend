import React from 'react';
import './OrderSummary.css';

const SHIPPING_FEE = 10.00;

const OrderSummary = ({ cartItems = [], subtotal = 0 }) => {
    const total = subtotal + SHIPPING_FEE;

    if (!cartItems.length) {
        return <div className="orderSummary">No items in cart</div>;
    }

    return (
        <aside className="orderSummary">
            <h2 className="orderSummary-sectionTitle">Summary</h2>
            
            {cartItems.map(item => (
                item.quantity > 0 && (
                    <div key={item.productId} className="orderSummary-productItem">
                        <img
                            src={item.imageUrl}
                            alt={item.productName}
                            className="orderSummary-productImage"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = './asset/blank-pic.png';
                            }}
                        />
                        <div className="orderSummary-productDetails">
                            <div className="orderSummary-productName">
                                {item.productName}
                            </div>
                            <div className="orderSummary-productQuantity">
                                Quantity: {item.quantity}
                            </div>
                            <div className="orderSummary-productPrice">
                                RM {(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )
            ))}

            <div className="orderSummary-summaryRow">
                <ul>
                    <li>
                        <span>Subtotal</span>
                        <span className="shipping-total">RM {subtotal.toFixed(2)}</span>
                    </li>
                    <li>
                        <span>Shipping Fee</span>
                        <span className="subtotal-total">RM {SHIPPING_FEE.toFixed(2)}</span>
                    </li>
                </ul>
            </div>

            <div className="orderSummary-summaryTotal">
                <span>Total</span>
                <span>RM {total.toFixed(2)}</span>
            </div>
        </aside>
    );
};

export default OrderSummary; 