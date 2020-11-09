import "../styles/Learn.scss";

import React from "react";
import Nav from "../components/Nav";

const Learn = () => {
    return (
        <div>
            <Nav />
            <div>
                <div className="learn-guide-container">
                    <div className="learn-guide-switch">
                        <h3>Switch guide</h3>
                        <p>See how thousands of users rate dozens of mechanical switches and contribute your own experience</p>
                    </div>
                    <div className="learn-guide-poll">
                        <h3>Keyboard Polls</h3>
                        <p>Vote and see how other enthusiasts vote on various mechanical keyboard topics</p>
                    </div>
                    <div className="learn-guide-terms">
                        <h3>Keyboard terms</h3>
                        <p>What is Keyrollover... ping?... Key Bounce? Find definitions and explanations to these mechanical keyboard terms and many others</p>
                    </div>
                    <div className="learn-guide-faqs">
                        <h3>Keyboard Faqs</h3>
                        <p>Find answers to common questions revealing things like differences between mechanical switches, what to look for in a keyboard, and more</p>
                    </div>
                    <div className="learn-guide-review">
                        <h3>Product reviews</h3>
                        <p>See what other users have to say and how they rank myriad products on keebclack.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn;