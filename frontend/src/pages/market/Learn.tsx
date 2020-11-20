import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Nav from "../../components/Nav";
import "../../styles/market/Learn.scss";

const Learn = () => {
    return (
        <div>
            <Nav />
            <div>
                <Container className="learn-guide-container">
                    <Row>
                        <Col className="learn-guide-switch">
                            <Image
                                src={require("../../images/friends.png")}
                                rounded
                                width={50}
                                height={50}
                            />
                            <a href="/market/switchguide"><h3>Switch guide</h3></a>
                            <p>See how thousands of users rate dozens of mechanical switches and contribute your own experience</p>
                        </Col>
                        <Col className="learn-guide-poll">
                            <Image
                                src={require("../../images/friends.png")}
                                rounded
                                width={50}
                                height={50}
                            />
                            <a href="/market/polls"><h3>Keyboard Polls</h3> </a>
                            <p>Vote and see how other enthusiasts vote on various mechanical keyboard topics</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="learn-guide-terms">
                            <Image
                                src={require("../../images/friends.png")}
                                rounded
                                width={50}
                                height={50}
                            />
                            <a href="/market/terms"><h3>Keyboard terms</h3></a>
                            <p>What is Keyrollover... ping?... Key Bounce? Find definitions and explanations to these mechanical keyboard terms and many others</p>
                        </Col>
                        <Col className="learn-guide-faqs">
                            <Image
                                src={require("../../images/friends.png")}
                                rounded
                                width={50}
                                height={50}
                            />
                            <a href="/market/faqs"><h3>Keyboard Faqs</h3></a>
                            <p>Find answers to common questions revealing things like differences between mechanical switches, what to look for in a keyboard, and more</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="learn-guide-review">
                            <Image
                                src={require("../../images/friends.png")}
                                rounded
                                width={50}
                                height={50}
                            />
                            <a href="/market/reviews"><h3>Product reviews</h3></a>
                            <p>See what other users have to say and how they rank myriad products on keebclack.com</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Learn;