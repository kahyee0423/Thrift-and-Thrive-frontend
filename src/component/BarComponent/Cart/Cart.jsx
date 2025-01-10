import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        try {
            setLoading(true);
            const data = await api.getCart(1);
            console.log('Loaded cart data:', data);

            if (data && data.items) {
                // Transform the items to match CartItem component expectations
                const transformedItems = data.items.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                    productName: item.productName,
                    imageUrl: item.imageUrl
                }));
                console.log('Transformed items:', transformedItems);
                setCartItems(transformedItems);
                setTotal(data.total);
            } else {
                setCartItems([]);
                setTotal(0);
            }
            setError(null);
        } catch (err) {
            setError('Failed to load cart');
            console.error('Cart loading error:', err);
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            await api.updateCartItem(1, productId, newQuantity);
            await loadCart();
        } catch (err) {
            setError('Failed to update quantity');
            console.error(err);
        }
    };

    const removeItem = async (productId) => {
        try {
            await api.removeFromCart(1, productId);
            await loadCart();
        } catch (err) {
            setError('Failed to remove item');
            console.error(err);
        }
    };

    if (loading) return <div>Loading cart...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="cartPage">
            <NavigationBar />
            <main className="mainContent">
                <h1 className="CartpageTitle">Your cart</h1>

                <section className="cartSection">
                    <div className="cartHeader">
                        <span>PRODUCT</span>
                        <span>QUANTITY</span> 
                        <span>TOTAL</span>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="emptyCart">
                            Your cart is empty
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <CartItem 
                                key={item.productId}
                                item={item} // Pass the entire item object
                                onUpdateQuantity={(quantity) => 
                                    updateQuantity(item.productId, quantity)}
                                onRemove={() => removeItem(item.productId)}
                            />
                        ))
                    )}

                    <div className="cartSummary">
                        <div className="totalRow">
                            <span>Estimated total</span>
                            <span className="totalAmount">RM {total.toFixed(2)}</span>
                        </div>

                        <p className="taxNote">
                            Taxes and shipping fee calculated at checkout.
                        </p>

                        <div className="cart-actionButtons">
                            <button 
                                className="checkoutButton" 
                                onClick={() => navigate('/Checkout')}
                                disabled={cartItems.length === 0}
                            >
                                Check out
                            </button>
                            <button 
                                className="continueButton" 
                                onClick={() => navigate('/')}
                            >
                                Continue shopping
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;