import React from 'react';
import '../styles/FeaturedSections.css';

function FeaturedSections({ featuredSections }) {
    return (
        <section className="featured-sections">
            {featuredSections.map((item, index) => (
                <div key={index} className="featured-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </section>
    );
}

export default FeaturedSections;