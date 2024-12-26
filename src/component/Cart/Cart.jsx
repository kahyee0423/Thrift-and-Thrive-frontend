import React from 'react';
import './Cart.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    return (
        <div className="cartPage">
            <NavigationBar />
            <main className="mainContent">
                <h1 className="CartpageTitle">Your cart</h1>

                <section className="cartSection">
                    <div className="cartHeader">
                        <span>PRODUCT</span>
                        <span>QUANTITY</span> {/* Added QUANTITY Column Header*/}
                        <span>TOTAL</span>
                    </div>

                    <CartItem image="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/9825dfe5adfdcb695865e8db8da471f9e1f506c089223cf18e741b30f939dea5?apiKey=904907665fd04df7b56e80ff4b56e284&" price="150" />

                    <div className="cartSummary">
                        <div className="totalRow">
                            <span>Estimated total</span>
                            <span className="totalAmount">RM </span>
                        </div>

                        <p className="taxNote">
                            Taxes and shipping fee calculated at checkout.
                        </p>

                        <div className="cart-actionButtons">
                            <button className="checkoutButton">Check out</button>
                            <button className="continueButton">Continue shopping</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;