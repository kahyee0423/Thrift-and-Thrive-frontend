import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ onCheckout }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();
        
        try {
            if (window.confirm('Confirm your order and proceed with payment?')) {
                setIsProcessing(true);
                console.log('Processing payment...');
                
                // Check if onCheckout is a function before calling it
                if (typeof onCheckout === 'function') {
                    await onCheckout();
                } else {
                    console.error('onCheckout is not a function:', onCheckout);
                    throw new Error('Payment processing is not properly configured');
                }
            }
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed: ' + error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <section className="paymentSection">
            <h2 className="payment-sectionTitle">Payment</h2>
            <p className="payment-securityNote">
                All transactions are secure and encrypted.
            </p>
            <img
                src="./asset/payment-pic.png"
                alt="Payment methods"
                className="payment-paymentMethods"
            />
            <button 
                type="button" 
                className="payment-payButton"
                onClick={handlePayment}
                disabled={isProcessing}
            >
                {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
        </section>
    );
};

// Add prop type checking
Payment.defaultProps = {
    onCheckout: () => console.warn('No checkout handler provided')
};

export default Payment; 