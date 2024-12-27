import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';

const Cart = () => {
    const navigate = useNavigate();

    const goToCheckout =()=>{
        navigate('/Checkout');
    }
    const goToHomePage =()=>{
        navigate('/');
    }

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

                    <CartItem image="./asset/blank-pic.png" price="150" />

                    <div className="cartSummary">
                        <div className="totalRow">
                            <span>Estimated total</span>
                            <span className="totalAmount">RM </span>
                        </div>

                        <p className="taxNote">
                            Taxes and shipping fee calculated at checkout.
                        </p>

                        <div className="cart-actionButtons">
                            <button className="checkoutButton" onClick={goToCheckout}>Check out</button>
                            <button className="continueButton" onClick={goToHomePage}>Continue shopping</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;