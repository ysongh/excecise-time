import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav">
            <Link to="/" className="nav__link">
                <p>Immersive VRT</p>
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">DashBoard</Link>
                </li>
                <li className="nav__item">
                    <Link to="/graph" className="nav__link">Graphs</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar; 