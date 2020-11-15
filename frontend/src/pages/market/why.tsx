import "../../styles/market/why.scss";
import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../components/Nav";
import { Container, Col, Image, Row, Button } from "react-bootstrap";

const Why = () => {
    const history = useHistory();

    return (
        <div>
            <Nav />
            <Container className="why-container">
                <div className="why-description">
                    <h4>What is a mechanical keyboard</h4>
                    <p>
                        A mechanical keyboard is a keyboard built with high quality, typically spring activated, key switches. These key switches vary based on the keyboard’s application or user preference.
                    </p>
                    <p>
                        While some of the first widely sold keyboards such as IBM’s Model M in the 1980’s utilized mechanical switches, the 1990’s brought on a wave of inexpensive rubber dome keyboards that flooded the keyboard market. Rubber dome keyboards represent over 90% of keyboards in use today and provide an inexpensive but dissatisfying feel and typing experience.
                    </p>
                    <p>
                        Mechanical keyboards raise the bar in every way. A mechanical keyboard’s switches, framing, functionality, type print methods, key construction, PCB board, LED lighting (sharpness, brightness, adjustability), and a slew of other features are far superior compared to traditional rubber dome keyboards. Most of these improvements boil down to one thing - feel. Mechanical keyboards simply feel better than rubber dome keyboards.
                    </p>
                    <Button
                        variant="primary"
                        onClick={() => history.push("/market/shop")}
                        size="lg"
                    >
                        Shop!
                    </Button>
                </div>
                <div className="why-images">
                    <Container>
                        <Col>
                            <Row>
                                <Container>
                                    <Image
                                        src={require("../../images/dirtykeyboard.jpg")}
                                        rounded
                                        width="400"
                                        height="350"
                                    />
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <Image
                                        src={require("../../images/tfue.jpg")}
                                        rounded
                                        width="400"
                                        height="260"
                                    />
                                </Container>
                            </Row>
                        </Col>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Why;