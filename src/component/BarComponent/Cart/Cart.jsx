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
                const transformedItems = data.items
                    .filter(item => item.quantity > 0)
                    .map(item => ({
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

    const removeItem = async (productId) => {
        try {
            const userId = 1;
            console.log('Removing item:', productId);

            // First set quantity to 0
            await api.updateCartItem(userId, productId, 0);

            // Then remove from backend
            await api.removeFromCart(userId, productId);

            // Update UI immediately
            setCartItems(prevItems => {
                const updatedItems = prevItems.filter(item => item.productId !== productId);
                console.log('Updated cart items:', updatedItems);
                return updatedItems;
            });

            // Update total
            setTotal(prevTotal => {
                const removedItem = cartItems.find(item => item.productId === productId);
                return removedItem ? prevTotal - (removedItem.price * removedItem.quantity) : prevTotal;
            });

        } catch (err) {
            console.error('Error removing item:', err);
            setError('Failed to remove item');
            // Reload cart in case of error
            await loadCart();
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            const userId = 1;
            if (newQuantity <= 0) {
                await removeItem(productId);
            } else {
                await api.updateCartItem(userId, productId, newQuantity);
                await loadCart(); // Reload to get updated totals
            }
        } catch (err) {
            setError('Failed to update quantity');
            console.error(err);
            await loadCart(); // Reload cart in case of error
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
                    {/* Updated Cart Header to align with new structure */}
                    <div className="cartHeader">
                        <span className="productHeader">PRODUCT</span>
                        <span className="quantityHeader">QUANTITY</span>
                        <span className="totalHeader">TOTAL</span>
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
                                /* Pass additional data for subtotal alignment */
                                showSubtotal={true} // Add this flag to indicate subtotal display
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
            <Footer/>
        </div>
    );
};

export default Cart;
