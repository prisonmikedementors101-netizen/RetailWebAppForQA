import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './components.css';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock processing
        setTimeout(() => {
            clearCart();
            navigate('/order-confirmation');
        }, 1500);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container checkout-empty">
                <h2>Your shopping bag is empty</h2>
                <Link to="/" className="back-link">Return to Collection</Link>
            </div>
        );
    }

    return (
        <div className="container checkout-container fade-in">
            <h1>Guest Checkout</h1>

            <div className="checkout-layout">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <section className="form-section">
                        <h3>Contact Information</h3>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email" id="email" name="email" required
                                value={formData.email} onChange={handleInputChange}
                                placeholder="alex@example.com"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text" id="firstName" name="firstName" required
                                    value={formData.firstName} onChange={handleInputChange}
                                    placeholder="Alex"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text" id="lastName" name="lastName" required
                                    value={formData.lastName} onChange={handleInputChange}
                                    placeholder="Smith"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="form-section">
                        <h3>Payment Details</h3>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text" id="cardNumber" name="cardNumber" required
                                value={formData.cardNumber} onChange={handleInputChange}
                                placeholder="0000 0000 0000 0000"
                                maxLength="19"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="expiry">Expiry (MM/YY)</label>
                                <input
                                    type="text" id="expiry" name="expiry" required
                                    value={formData.expiry} onChange={handleInputChange}
                                    placeholder="12/26"
                                    maxLength="5"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="password" id="cvv" name="cvv" required
                                    value={formData.cvv} onChange={handleInputChange}
                                    placeholder="***"
                                    maxLength="3"
                                />
                            </div>
                        </div>
                    </section>

                    <button type="submit" className="place-order-btn">
                        Complete Purchase — ${cartTotal.toFixed(2)}
                    </button>
                </form>

                <div className="order-summary-box">
                    <h3>Order Summary</h3>
                    <div className="summary-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-total">
                        <span>Total Due</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
