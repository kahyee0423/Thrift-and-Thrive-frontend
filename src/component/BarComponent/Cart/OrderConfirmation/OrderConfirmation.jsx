import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';
import { api } from '../../../../services/api';

const OrderConfirmation = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const userId = 1; // Get from user session
                const orders = await api.getUserOrders(userId);
                const currentOrder = orders.find(o => o.id === parseInt(orderId));
                setOrder(currentOrder);
            } catch (error) {
                console.error('Error loading order:', error);
            }
        };

        loadOrder();
    }, [orderId]);

    const handleContinueShopping = () => {
        navigate('/'); // Go to home page
    };

    if (!order) return <div>Loading...</div>;

    return (
        <div className="orderConfirmation">
            <div className="orderConfirmation-content">
                <div className="orderConfirmation-header">
                    <h1>Thank You for Your Order!</h1>
                    <p>Order #{orderId}</p>
                </div>
                
                <div className="orderConfirmation-details">
                    <h2>Order Details</h2>
                    <div className="orderConfirmation-items">
                        {order.items.map(item => (
                            <div key={item.productId} className="orderConfirmation-item">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.productName}
                                    className="orderConfirmation-itemImage"
                                />
                                <div className="orderConfirmation-itemDetails">
                                    <p className="orderConfirmation-itemName">
                                        {item.productName}
                                    </p>
                                    <p className="orderConfirmation-itemQuantity">
                                        Quantity: {item.quantity}
                                    </p>
                                    <p className="orderConfirmation-itemPrice">
                                        RM {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="orderConfirmation-summary">
                        <div className="orderConfirmation-total">
                            <span>Total:</span>
                            <span>RM {order.total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="orderConfirmation-shipping">
                        <h3>Shipping Address</h3>
                        <p>{order.shippingAddress.fullName}</p>
                        <p>{order.shippingAddress.address}</p>
                        <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                        <p>{order.shippingAddress.phone}</p>
                    </div>
                </div>

                <button 
                    onClick={handleContinueShopping}
                    className="orderConfirmation-button"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmation; 