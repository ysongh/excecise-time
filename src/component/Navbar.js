import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.jpg';

const Navbar = () => {
    return(
        <nav>
            <div className="nav">
            <Link to="/">
                <img src={Logo} alt="Logo" className="nav__logo" />
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">DashBoard</Link>
                </li>
                <li className="nav__item">
                    <Link to="/track" className="nav__link">Tracking</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar; 