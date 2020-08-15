import React from 'react';

import '../styles/404.scss';

const fourohfour: React.FC = () => {
    return (
        <body id='fourohfour-page'>
            <div id='fourohfour-error-container'>

                <div id="image-container">
                    <a href='/'>
                        <img id='fourohfour-logo'
                            src={require('../images/logo.png')}>
                        </img>
                    </a>
                </div>

                <p id='fourohfour-error-message'>
                    HTTP ERROR: 404
                    <hr/>
                    We couldn't find that page in our scrapbook...
                </p>

            </div>

        </body>
    )
}

export default fourohfour;