import React, { useState, useEffect } from 'react';
import './components.css';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop',
        title: 'Summer Collection',
        description: 'Lightweight fabrics for the golden hour.'
    },
    {
        url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
        title: 'Premium Accessories',
        description: 'Detail that defines your look.'
    },
    {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
        title: 'Urban Essentials',
        description: 'Seamlessly blending comfort and style.'
    }
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    return (
        <section className="slideshow-section">
            <div className="slideshow-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                        <div className="slide-content">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
                <button className="slide-nav prev" onClick={prevSlide}>❮</button>
                <button className="slide-nav next" onClick={nextSlide}>❯</button>
                <div className="slide-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
