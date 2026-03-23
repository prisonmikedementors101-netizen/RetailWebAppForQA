import React from 'react';
import { useCart } from '../context/CartContext';
import './components.css';

const Header = () => {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo cursor-pointer" onClick={() => window.location.href = '/'}>
                    Elysian<span>Threads</span>
                </div>
                <div className="header-actions">
                    <button
                        className="cart-toggle"
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Open Cart"
                    >
                        🛒
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
