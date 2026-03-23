import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './components.css';

const CartDrawer = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        updateQuantity,
        removeFromCart
    } = useCart();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <>
            <div
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={() => setIsCartOpen(false)}
            ></div>
            <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Your Bag</h3>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-msg">Your cart is currently empty.</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h4 className="cart-item-title">{item.title}</h4>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    <div className="cart-item-controls">
                                        <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'red' }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-summary">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default CartDrawer;
