import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductGrid from './ProductGrid';
import Hero from './Hero';
import Slideshow from './Slideshow';
import { products } from '../data/products';

function Home() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <main className="container">
            <Hero />
            <Slideshow />
            <div className="main-layout">
                <Sidebar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
                <ProductGrid products={filteredProducts} />
            </div>
        </main>
    );
}

export default Home;
