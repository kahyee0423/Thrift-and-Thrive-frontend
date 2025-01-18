import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (userId) {
                try {
                    const response = await fetch(`http://localhost:8000/api/orders/user/${userId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setOrders(data);
                    }
                } catch (error) {
                    console.error('Failed to fetch orders:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchOrders();
    }, [userId]);

    if (loading) {
        return (
            <section className="orderHistory">
                <h2>Order History</h2>
                <div className="loading-message">
                    <div className="spinner"></div>
                    <p>Loading orders...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="orderHistory">
            <h2>Order History</h2>
            {orders.length === 0 ? (
                <p className="no-orders">No orders found</p>
            ) : (
                <div className="orders-list">
                    {orders.map(order => (
                        <div key={order.id} className="order-card">
                            <div className="order-header">
                                <span>Order #{order.id}</span>
                                <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                            </div>
                            <div className="order-items">
                                {order.items.map(item => (
                                    <div key={item.productId} className="order-item">
                                        <img src={item.imageUrl} alt={item.productName} />
                                        <div className="item-details">
                                            <p>{item.productName}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <span>Total: ${order.total.toFixed(2)}</span>
                                <span>Status: {order.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default OrderHistory; 