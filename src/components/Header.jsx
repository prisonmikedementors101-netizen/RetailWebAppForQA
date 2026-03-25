import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './components.css';

const Header = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo cursor-pointer" onClick={() => navigate('/') }>
                    Elysian<span>Threads</span>
                </div>
                <div className="header-actions">
                    <nav className="header-nav">
                        <Link to="/">Home</Link>
                        {user ? (
                          <Link to="/logout">Sign out ({user.username})</Link>
                        ) : (
                          <Link to="/login">Sign in</Link>
                        )}
                    </nav>

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
