import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Deepak</h1>
            <h2>Software Developer</h2>
            <p>Specializing in full stack mobile app development</p>
            <div className="cta-buttons">
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
        </div>
    );
}

export default Home;