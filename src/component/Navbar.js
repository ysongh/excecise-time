import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav">
            <Link to="/">
                <p>Immersive VRT</p>
            </Link>
            <ul className="nav__linksGroup">
                <li><Link to="/">DashBoard</Link></li>
                <li><Link to="/graph">Graphs</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar; 