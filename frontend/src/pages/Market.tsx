import '../styles/Market.scss';
import React, { useState, useEffect } from 'react';
import { Container, Image, Jumbotron, Button } from "react-bootstrap";

import Nav from '../components/Nav';
import Slideshow from '../components/Slideshow';

const Market = () => {

    return (
        <div>
            <Nav />
            <div className="market-container">

                <div className="market-advertise">
                    <Jumbotron
                    fluid
                    >
                        <Container >
                            <h1>Welcome!</h1>
                            <p>We are currently under construction.
                                If he landed here, you somehow figured
                                to compile the code...
                            </p>
                        </Container>
                    </Jumbotron>

                </div>
                <div className="market-shop-by">
                    <div className="market-sub">
                        <img
                            src={require("../images/brand.png")}
                        />
                        <p>Brand</p>
                        <Button size="sm">Realforce</Button>
                        <Button size="sm">Drop</Button>
                        <Button size="sm">Anne Pro</Button>
                        <Button size="sm">Ducky</Button>
                        <Button size="sm">Corsair</Button>
                        <Button size="sm">Logitech</Button>
                        <Button size="sm">Razer</Button>
                    </div>
                    <Container 
                    className="market-sub">
                        <img
                            src={require("../images/keyboard.png")}
                        />
                        <p>Switches</p>
                        <Button size="sm">Gateron</Button>
                        <Button size="sm">Kailh Box</Button>
                        <Button size="sm">Cherry</Button>
                        <Button size="sm">NovelKeys</Button>
                        <Button size="sm">Pandas</Button>
                    </Container>
                </div>
                <div className="market-featured">
                    <div>
                        <p>Featured Media</p>
                        <Image
                            src={require("../images/ren.gif")}
                            fluid
                            rounded
                            alt="Featured Media"
                        />

                    </div>
                    <div>
                        Featured Article
                    </div>
                    <div>
                        Featured Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market;