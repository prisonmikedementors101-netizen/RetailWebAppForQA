import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const OrderConfirmation = () => {
    // Generate a random order number
    const orderNumber = Math.floor(Math.random() * 900000) + 100000;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container confirmation-container fade-in">
            <div className="confirmation-card">
                <div className="success-icon">✓</div>
                <h1>Order Confirmed!</h1>
                <p className="order-number">Order #{orderNumber}</p>

                <div className="confirmation-content">
                    <h3>Thank you for shopping at Elysian Threads</h3>
                    <p>We've received your order and are preparing it for shipment. A confirmation email has been sent to your inbox.</p>
                </div>

                <div className="shipping-estimate">
                    <p><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
                </div>

                <Link to="/" className="continue-shopping-btn">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmation;
