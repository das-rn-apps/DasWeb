import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav>
            <div className="logo">Deepak</div>
            <ul>
                <li><NavLink to="/" className="active">Home</NavLink></li>
                <li><NavLink to="/about" className="active">About</NavLink></li>
                <li><NavLink to="/projects" className="active">Projects</NavLink></li>
                <li><NavLink to="/contact" className="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
