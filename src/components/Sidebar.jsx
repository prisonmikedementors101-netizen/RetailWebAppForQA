import React from 'react';
import { categories } from '../data/products';
import './components.css';

const Sidebar = ({ activeCategory, onCategoryChange }) => {
    return (
        <aside className="sidebar">
            <div className="category-list">
                <h3>Categories</h3>
                <ul>
                    {categories.map(category => (
                        <li
                            key={category}
                            className={`category-item ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
