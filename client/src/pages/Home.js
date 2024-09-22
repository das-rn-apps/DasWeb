import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>
                I'm a passionate web developer with expertise in creating
                modern and responsive web applications.
            </p>
            <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
    );
}

export default Home;