import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/menu.scss';

const Menu: React.FC = () => {
    let history = useHistory();
    return (
        <div className='menu-container'>
            <div className='menu-market-container'>
                <button
                    onClick={() => history.push('/')}
                >
                    <img src={require('../images/duty-free.png')} alt="market" />
                    <h1>Market</h1>
                </button>
            </div>
            <div className='menu-community-container'>
                <button
                    onClick={() => alert('Coming soon, stay tuned!')}
                >
                    <img src={require("../images/conversation.png")} alt="community" />
                    <h1>Community</h1>
                </button>
                <p>Coming soon</p>
            </div>
            <div className='menu-applications-container'>
                <button
                    onClick={() => alert('Coming soon, stay tuned!')}>
                    <img src={require("../images/podcast.png")} alt="applications" />
                    <h1>Applications</h1>
                </button>
                <p>Coming soon</p>
            </div>
        </div >
    )
}

export default Menu;