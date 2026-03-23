import React from 'react';
import './components.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Elevate Your Style</h1>
                <p>Discover the latest trends in premium retail fashion. Quality meets elegance in every stitch.</p>
                <button className="cta-button">Shop Collection</button>
            </div>
        </section>
    );
};

export default Hero;
