import React from 'react';
import '../styles/landing.scss';



const Landing: React.FC<{}> = ({ }) => {
    const info = (choice: number) => {

        if (choice === 0) {
            return (
                <>
                    <h1>Buy and sell with confidence!</h1>

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
                    <button className="land-info-banner">
                        <img src={require('../images/duty-free.png')} alt="marketplace" />
                        <h4>Moderated Marketplace</h4>
                        <hr />
                        <hr className="landing-checked" />
                    </button>
                </div>
                <div>
                    <button className="land-info-banner" >
                        <img src={require('../images/conversation.png')} alt="community" />
                        <h4>Universal Community</h4>
                        <hr />
                        <hr className="landing-checked" />
                    </button>
                </div>
                <div>
                    <button className="land-info-banner" >
                        <img src={require('../images/toggle.png')} alt="toggle" />
                        <h4>Endless options</h4>
                        <hr />
                        <hr className="landing-checked" />
                    </button>
                </div>
            </div>
            <hr style={{ backgroundColor: "gray", height: '10px', marginTop: '0px' }} />
            <div className="landing-panel">
                {
                    info(0)
                }
            </div>

            <footer>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </footer>

        </div >
    )
}

export default Landing;