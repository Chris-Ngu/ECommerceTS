import React from 'react';
import '../styles/landing.scss';

const Landing: React.FC<{}> = ({ }) => {
    return (
        <div className="landingContainer">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 style={{color: "rgb(51, 204, 255)"}}>
                        Welcome to KeebClack!
                    </h1>
                    <h2 className="landing-subtitle">
                        The keyboard market for all
                    </h2>
                    <button className="landing-button">
                        click me
                    </button>
                </div>
            </div >


        </div >
    )
}

export default Landing;