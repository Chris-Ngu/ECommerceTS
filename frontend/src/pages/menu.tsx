import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import '../styles/menu.scss';

const Menu: React.FC = () => {
    let history = useHistory();
    return (
        <Container className='menu-container'>
            <Row>
                <Col className='menu-market-container'>
                    <button
                        className="menu-button"
                        onClick={() => history.push('/market')}
                    >
                        <img src={require('../images/duty-free.png')} alt="market" />
                        <h1>Market</h1>
                    </button>
                </Col>
                <Col className='menu-community-container'>
                    <button
                        className="menu-button"
                        onClick={() => alert('Coming soon, stay tuned!')}
                    >
                        <img src={require("../images/conversation.png")} alt="community" />
                        <h1>Community</h1>
                    </button>
                    <p>Coming soon</p>
                </Col>
                <Col className='menu-applications-container'>
                    <button
                        className="menu-button"
                        onClick={() => alert('Coming soon, stay tuned!')}>
                        <img src={require("../images/podcast.png")} alt="applications" />
                        <h1>Applications</h1>
                    </button>
                    <p>Coming soon</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;