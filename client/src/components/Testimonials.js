import React from 'react';
import '../styles/Testimonials.css';

function Testimonials({ testimonials }) {
    return (
        <section className="testimonials">
            <h3>Testimonials</h3>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                    <p>"{testimonial.text}"</p>
                    <p>- {testimonial.author}</p>
                </div>
            ))}
        </section>
    );
}

export default Testimonials;