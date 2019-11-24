import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../img/markup.png';

const Landing = () =>{
    return(
        <div className="landing">
            <h1 className="dashBoard__title">Weclcome to Immersive VRT</h1>
            <img src={Image} alt="Markup" className="landing__img mt-2" />
            <p className="landing__p">Track Your Balance</p>
            <Link to="/dashboard" className="landing__cta">
                Dashboard
            </Link>
        </div>
    );
};

export default Landing;