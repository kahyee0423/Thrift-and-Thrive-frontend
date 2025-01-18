import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (userId) {
                try {
                    setLoading(true);
                    console.log('Fetching orders for userId:', userId);
                    const response = await fetch(`http://localhost:8000/api/orders/user/${userId}`);
                    console.log('Orders response status:', response.status);
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Fetched orders:', data);
                        setOrders(data);
                    } else {
                        const errorData = await response.json();
                        console.error('Failed to fetch orders:', errorData);
                        setError(errorData.error || 'Failed to fetch orders');
                    }
                } catch (error) {
                    console.error('Failed to fetch orders:', error);
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            } else {
                console.log('No userId provided');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    if (loading) {
        return (
            <section className="orderHistory">
                <h2 className="sectionTitle">Order History</h2>
                <div className="ordersInfo">
                    <div className="loading-message">
                        <div className="spinner"></div>
                        <p>Loading orders...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="orderHistory">
                <h2 className="sectionTitle">Order History</h2>
                <div className="ordersInfo">
                    <div className="error-message">
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    console.log('Rendering orders:', orders);

    return (
        <section className="orderHistory">
            <h2 className="sectionTitle">Order History</h2>
            <div className="ordersInfo">
                {orders.length === 0 ? (
                    <p className="no-orders">No orders found</p>
                ) : (
                    <div className="orders-list">
                        {orders.map(order => (
                            <div key={order.id} className="order-item">
                                <div className="order-header">
                                    <span>Order #{order.id}</span>
                                    <span>{order.orderDate}</span>
                                </div>
                                <div className="order-products">
                                    {order.items?.map(item => (
                                        <div key={item.productId} className="product-item">
                                            <span className="product-info">{item.productName}</span>
                                            <span className="product-info">Quantity: {item.quantity}</span>
                                            <span className="product-info">${(item.price || 0).toFixed(2)}</span>
                                        </div>
                                    )) || <p>No items in this order</p>}
                                </div>
                                <div className="order-footer">
                                    <span>Total: ${(order.total || 0).toFixed(2)}</span>
                                    <span>Status: {order.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default OrderHistory; 