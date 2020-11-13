import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../styles/landing.scss';

const Landing: React.FC = () => {
    const [panel, panelCount] = useState(0);
    let history = useHistory();

    const info = (choice: number) => {

        if (choice === 0) {
            return (
                <>
                    <h1>Buy and sell with confidence!</h1>
                    <hr style={{ width: '50%' }} />
                    <div className="landing-moderated-panel">
                        <div>
                            <p>
                                KeebClack is a centralized and organized
                                selling platform.
                            </p>
                            <p>
                                Long gone are the r/mechmarket
                                days. Buy with confidence: all your purchases are covered
                                by a 30 day warrenty!
                            </p>

                        </div>
                        <div>
                            <img
                                src={require('../images/security.png')}
                                alt='moderated'
                            />
                        </div>
                    </div>

                </>
            )
        } else if (choice === 1) {
            return (
                <>
                    <h1>Find and meet new people!</h1>
                    <hr style={{ width: '50%' }} />
                    <div className="landing-community-panel">
                        <div>
                            <p>
                                Talk to existing friends and new community members
                            </p>
                            <p>
                                Wheather you're looking for some new friends or have
                                existing friends, KeebClack has a forum based system
                                to interact with others who are also interested in
                                the hobby!
                            </p>
                        </div>
                        <div>
                            <img
                                src={require('../images/friends.png')} alt='friends' />
                        </div>
                    </div>
                </>
            )
        } else if (choice === 2) {
            return (
                <>
                    <h1>Endless options of mechanical keyboards!</h1>
                    <hr style={{ width: '50%' }} />
                    <div className='landing-options-panel'>
                        <div>
                            <p>
                                Find the keyboard that suits your preferences
                            </p>
                            <p>
                                With so many options of mechanical keyboards, we made
                                it easy for you to find the one that suits your needs
                                as well as your preferences. Your wallet will love you
                                for this :)
                            </p>
                        </div>
                        <div>
                            <img
                                src={require('../images/behavior.png')}
                                alt='options'
                            />
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="landingContainer">

            <Container className="hero-image">
                <button
                    className="landing-signin"
                    onClick={() => history.push('/login')}
                >
                    Login
                </button>
                <div className="hero-text">
                    <h1 style={{ color: "rgb(51, 204, 255)", fontSize: 60 }}>
                        Welcome to KeebClack!
                    </h1>
                    <h2 className="landing-subtitle">
                        The keyboard market for all
                    </h2>
                    <hr />
                    <button
                        className="landing-button"
                        onClick={() => history.push('/menu')}
                    >
                        Main page
                    </button>
                </div>
            </Container>

            <Container className="landing-information">
                <Row>
                    <Col>
                        <button
                            className="land-info-banner"
                            onClick={() => panelCount(0)}
                        >
                            <img src={require('../images/duty-free.png')} alt="marketplace" />
                            <h4>Moderated Marketplace</h4>
                            <hr />
                        </button>
                    </Col>
                    <Col>
                        <button
                            className="land-info-banner"
                            onClick={() => panelCount(1)}
                        >
                            <img src={require('../images/conversation.png')} alt="community" />
                            <h4>Universal Community</h4>
                            <hr />
                        </button>
                    </Col>
                    <Col>
                        <button
                            className="land-info-banner"
                            onClick={() => panelCount(2)}
                        >
                            <img src={require('../images/toggle.png')} alt="toggle" />
                            <h4>Endless options</h4>
                            <hr />
                        </button>
                    </Col>
                </Row>
            </Container>
            <Container className="landing-panel">
                {
                    info(panel)
                }
            </Container>

            <footer>
                <div>
                    <a href='#'>Customer Support</a>
                    <a href='#'>Contact us</a>
                    <a href='#'>Terms of Use</a>
                    <a href='#'>Help Center</a>
                </div>
                <div>
                    <a href='#'>Investors</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Legal Notices</a>
                    <a href='#'>Cookies preferences</a>
                </div>
            </footer>

            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div >
    )
}

export default Landing;