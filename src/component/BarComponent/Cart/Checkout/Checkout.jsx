import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import OrderSummary from './OrderSummary/OrderSummary';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';
import Footer from '../../../Footer/footer';
import NavigationBar from '../../../NavigationBar/NavigationBar';
import { api } from '../../../../services/api';

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState({ items: [], total: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shippingAddress, setShippingAddress] = useState(() => {
        // Try to get saved shipping address from localStorage
        const saved = localStorage.getItem('shippingAddress');
        return saved ? JSON.parse(saved) : null;
    });
    const [isDeliveryComplete, setIsDeliveryComplete] = useState(() => {
        // Try to get saved state from localStorage
        return localStorage.getItem('isDeliveryComplete') === 'true';
    });

    useEffect(() => {
        loadCart();
    }, []);

    // Save states to localStorage when they change
    useEffect(() => {
        if (shippingAddress) {
            localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
            localStorage.setItem('isDeliveryComplete', 'true');
        }
    }, [shippingAddress]);

    const loadCart = async () => {
        try {
            setLoading(true);
            const userId = 1; // Get from user session/context
            const cartData = await api.getCart(userId);
            setCart(cartData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeliverySubmit = async (addressData) => {
        console.log('Delivery info received:', addressData);
        setShippingAddress(addressData);
        setIsDeliveryComplete(true);
        localStorage.setItem('shippingAddress', JSON.stringify(addressData));
        localStorage.setItem('isDeliveryComplete', 'true');
    };

    const handleEditDelivery = () => {
        setIsDeliveryComplete(false);
        localStorage.setItem('isDeliveryComplete', 'false');
    };

    const handleCheckout = async () => {
        if (!shippingAddress) {
            alert('Please fill in delivery information first');
            return;
        }

        try {
            console.log('Creating order with shipping:', shippingAddress);
            const userId = 1; // Get from user session/context
            const order = await api.processCheckout(userId, shippingAddress);
            console.log('Order created successfully:', order);
            
            // Clear checkout data after successful order
            localStorage.removeItem('shippingAddress');
            localStorage.removeItem('isDeliveryComplete');
            setShippingAddress(null);
            setIsDeliveryComplete(false);
            
            navigate(`/order-confirmation/${order.id}`);
        } catch (err) {
            console.error('Checkout failed:', err);
            throw err; // Let the Payment component handle the error
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="checkout">
            <NavigationBar />
            <main className="checkout-mainContent">
                <div className="checkout-formContainer">
                    <div className="checkout-formGrid">
                        <div className="checkout-delivery">
                            {!isDeliveryComplete ? (
                                <Delivery 
                                    onSubmit={handleDeliverySubmit}
                                    initialData={shippingAddress}
                                />
                            ) : (
                                <div className="delivery-summary">
                                    <h2>Delivery Information</h2>
                                    <div className="delivery-details">
                                        <p>{shippingAddress.fullName}</p>
                                        <p>{shippingAddress.address}</p>
                                        <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}</p>
                                        <p>{shippingAddress.phone}</p>
                                        <button 
                                            onClick={handleEditDelivery}
                                            className="edit-delivery-button"
                                        >
                                            Edit Delivery Info
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <OrderSummary 
                            cartItems={cart.items} 
                            subtotal={cart.total} 
                        />
                    </div>
                    <div className="checkout-payment">
                        {console.log('Rendering payment section:', { isDeliveryComplete, shippingAddress })}
                        {isDeliveryComplete && shippingAddress ? (
                            <Payment 
                                onCheckout={handleCheckout}
                                key="payment-section" // Add a key to force re-render
                            />
                        ) : (
                            <div className="payment-placeholder">
                                Complete delivery information to proceed to payment
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout; 