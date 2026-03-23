import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './components.css';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container error-page">
                <h2>Product not found</h2>
                <Link to="/" className="back-link">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="container pdp-container fade-in">
            <Link to="/" className="back-breadcrumb">← Back to Collection</Link>

            <div className="pdp-layout">
                <div className="pdp-image-section">
                    <img src={product.image} alt={product.title} className="pdp-image" />
                </div>

                <div className="pdp-info-section">
                    <span className="pdp-category">{product.category}</span>
                    <h1 className="pdp-title">{product.title}</h1>
                    <p className="pdp-price">${product.price.toFixed(2)}</p>

                    <div className="pdp-description-box">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="pdp-features">
                        <div className="feature-item">
                            <span>🚚</span> Free worldwide shipping on orders over $100
                        </div>
                        <div className="feature-item">
                            <span>✨</span> Premium sustainable materials
                        </div>
                        <div className="feature-item">
                            <span>🔄</span> 30-day hassle-free returns
                        </div>
                    </div>

                    <button
                        className="pdp-add-btn"
                        onClick={() => addToCart(product)}
                    >
                        Add to Shopping Bag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
