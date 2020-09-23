import React, { useState } from 'react';
import '../styles/landing.scss';



const Landing: React.FC<{}> = ({ }) => {
    const [panel, panelCount] = useState(0);

    const info = (choice: number) => {

        if (choice === 0) {
            return (
                <>
                    <h1>Buy and sell with confidence!</h1>
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
                            />
                        </div>
                    </div>

                </>
            )
        } else if (choice === 1) {
            return (
                <>
                    <h1>This is community</h1>
                </>
            )
        } else if (choice === 2) {
            return (
                <>
                    <h1>This is options</h1>
                </>
            )
        }
    }

    return (
        <div className="landingContainer">

            <div className="hero-image">
                <button className="landing-signin">
                    Sign in
                </button>
                <div className="hero-text">
                    <h1 style={{ color: "rgb(51, 204, 255)", fontSize: 60 }}>
                        Welcome to KeebClack!
                    </h1>
                    <h2 className="landing-subtitle">
                        The keyboard market for all
                    </h2>
                    <hr />
                    <button className="landing-button">
                        Main page
                    </button>
                </div>
            </div >

            <div className="landing-information">
                <div>
                    <button
                        className="land-info-banner"
                        onClick={() => panelCount(0)}
                    >
                        <img src={require('../images/duty-free.png')} alt="marketplace" />
                        <h4>Moderated Marketplace</h4>
                        <hr />
                    </button>
                </div>
                <div>
                    <button
                        className="land-info-banner"
                        onClick={() => panelCount(1)}
                    >
                        <img src={require('../images/conversation.png')} alt="community" />
                        <h4>Universal Community</h4>
                        <hr />
                    </button>
                </div>
                <div>
                    <button
                        className="land-info-banner"
                        onClick={() => panelCount(2)}
                    >
                        <img src={require('../images/toggle.png')} alt="toggle" />
                        <h4>Endless options</h4>
                        <hr />
                    </button>
                </div>
            </div>
            <div className="landing-panel">
                {
                    info(panel)
                }
            </div>

            <footer>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </footer>

        </div >
    )
}

export default Landing;