import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

function HeaderNav() {
    return (
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">   
                    <Link to="/settings" className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;