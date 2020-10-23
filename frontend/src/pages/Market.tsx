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
                    {/* <Slideshow /> */}
                    <h1>
                        Carousel here
                </h1>

                </div>
                <div className="market-shop-by">
                    <div className="market-sub">
                        <img
                            src={require("../images/brand.png")}
                        />
                        <p>Brand</p>
                        <button>Realforce</button>
                        <button>Drop</button>
                        <button>Anne Pro</button>
                        <button>Ducky</button>
                        <button>Corsair</button>
                        <button>Logitech</button>
                        <button>Razer</button>
                    </div>
                    <div className="market-sub">
                        <img
                            src={require("../images/keyboard.png")}
                        />
                        <p>Switches</p>
                        <button>Gateron</button>
                        <button>Kailh Box</button>
                        <button>Cherry</button>
                        <button>NovelKeys</button>
                        <button>Pandas</button>
                    </div>
                </div>
                <div className="market-featured">

                </div>
            </div>
        </div>
    )
}

export default Market;