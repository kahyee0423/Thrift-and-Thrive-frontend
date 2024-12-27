import React from 'react'
import './Checkout.css'
import ContactForm from './ContactForm/ContactForm';
import OrderSummary from './OrderSummary/OrderSummary';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';
import Footer from '../../../Footer/footer';
import NavigationBar from '../../../NavigationBar/NavigationBar';

const Checkout = () => {
    return (
        <div className="checkout">
          <NavigationBar />
          <main className="checkout-mainContent">
            <div className="checkout-formContainer">
              <div className="checkout-formGrid">
                <ContactForm />
                <OrderSummary />
              </div>
              <Delivery />
              <Payment />
            </div>
          </main>
          <Footer />
        </div>
      );
}

export default Checkout;