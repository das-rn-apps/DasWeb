import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import SearchBar from './SearchBar';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Deepak</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <SearchBar />
        </nav>
    );
}

export default NavBar;