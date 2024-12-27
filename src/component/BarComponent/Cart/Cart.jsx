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