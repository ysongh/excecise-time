import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../img/markup.png';

const Landing = () =>{
    return(
        <div className="landing">
            <h1 className="dashBoard__title">Weclcome to Immersive VRT</h1>
            <img src={Image} alt="Markup" className="dashBoard__img mt-2" />
            <Link to="/dashboard" className="landing__cta">
                Dashboard
            </Link>
        </div>
    );
};

export default Landing;