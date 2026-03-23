import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './components.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card fade-in">
            <Link to={`/product/${product.id}`} className="product-card-link">
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
            </Link>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <Link to={`/product/${product.id}`} className="product-card-title-link">
                    <h3 className="product-title">{product.title}</h3>
                </Link>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
