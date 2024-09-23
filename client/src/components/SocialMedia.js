import React from 'react';
import '../styles/SocialMedia.css';

function SocialMedia({ links }) {
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <section className="social-media-section">
            <h3>Follow Us</h3>
            <div className="social-media-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-media-link">
                        <img src={link.icon} alt={link.name} className="social-media-icon" />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default SocialMedia;