import '../styles/Market.scss';
import React from 'react';
import { Container, Image, Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Nav from '../components/Nav';

const Market = () => {
    const history = useHistory();

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
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=realforce") }}
                        >
                            Realforce
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=drop") }}
                        >
                            Drop
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=annepro") }}
                        >
                            Anne Pro
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=ducky") }}
                        >
                            Ducky
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=realforce") }}
                        >
                            Corsair
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=logitech") }}
                        >
                            Logitech
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?brand=razer") }}
                        >
                            Razer
                        </Button>
                    </div>
                    <Container
                        className="market-sub">
                        <img
                            src={require("../images/keyboard.png")}
                        />
                        <p>Switches</p>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?switch=gateron") }}
                        >
                            Gateron
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?switch=kailh") }}
                        >Kailh
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?switch=cherry") }}
                        >
                            Cherry
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?switch=novelkeys") }}
                        >
                            NovelKeys
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => { history.push("/market/shop?switch=pandas") }}
                        >
                            Pandas
                        </Button>
                    </Container>
                </div>
                <div className="featured-3">
                    <div className="market-featured">
                        <div className="market-media-container">
                            <h4>Featured Media</h4>
                            <Image
                                src={require("../images/ren.gif")}
                                fluid
                                rounded
                                alt="Featured Media"
                            />

                        </div>
                        <div className="market-featured-container">
                            <h4>Featured Article</h4>
                            <div className="market-featured-article">
                                <h6>Lorep Placeholder</h6>
                                <p>Lorep Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep
                                Lorep Lorep Lorep Lorep Lorep Lorep
                                </p>
                            </div>
                        </div>
                        <div className="market-poll-container">
                            Featured Poll
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market;