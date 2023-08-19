import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'> <span id="logo">Wellness⚛Sprint</span></Link>
            </div>
            <ul className="menu">
                <li><Link to="about">About</Link></li>
                <li><Link to="service">Services</Link></li>
                <li><Link to='phone'>(+91) 933 480 2030</Link></li>
                <li><Link id='ct' to="contact">Contact</Link></li>

            </ul>
        </nav>
    );
};

export default Navigation;
