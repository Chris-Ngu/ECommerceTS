import React, { useState, useEffect } from 'react';
import '../styles/Market.scss';

import Nav from '../components/Nav';
import Slideshow from '../components/Slideshow';

const Market = () => {

    return (
        <div>
            <Nav />
            <div className="market-container">

                <div className="market-advertise">
                    <Slideshow />
                </div>
                <div className="market-shop-by">

                </div>
                <div className="market-featured">

                </div>
            </div>
        </div>
    )
}

export default Market;