import '../styles/Market.scss';
import React from 'react';
import { Container, Image, Jumbotron, Button, Row, Col } from "react-bootstrap";
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
                <Container className="market-shop-by">
                    <Row>
                        <Col className="market-sub">

                            <img
                                src={require("../images/brand.png")}
                            />
                            <p>Brand</p>
                            <Row>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=realforce") }}
                                    >
                                        Realforce
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=drop") }}
                                    >
                                        Drop
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=annepro") }}
                                    >
                                        Anne Pro
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=ducky") }}
                                    >
                                        Ducky
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=realforce") }}
                                    >
                                        Corsair
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=logitech") }}
                                    >
                                        Logitech
                        </Button>
                                </Col>
                                <Col>
                                    <Button
                                        size="sm"
                                        onClick={() => { history.push("/market/shop?brand=razer") }}
                                    >
                                        Razer
                        </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col
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
                        </Col>
                    </Row>
                </Container>
                <Container className="market-featured">
                    <Row>
                        <Col className="market-media-container">
                            <h4>Featured Media</h4>
                            <Image
                                src={require("../images/ren.gif")}
                                fluid
                                rounded
                                alt="Featured Media"
                            />

                        </Col>
                        <Col className="market-featured-container">
                            <h4>Featured Article</h4>
                            <Container className="market-featured-article">
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
                            </Container>
                        </Col>
                        <Col className="market-poll-container">
                            Featured Poll
                            </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Market;