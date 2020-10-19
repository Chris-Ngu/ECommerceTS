import "../styles/components/Nav.scss";
import React from 'react';


const Nav = () => {
    return (
        <nav className="nav">
            <li>
                <a className="active" href="#whatever">
                    Whatever
                </a>
            </li>
            <li>
                <a className="active" href="#whatever1">
                    Whatever1
                </a>
            </li>
            <li>
                <a className="active" href="#whatever2">
                    Whatever2
                </a>
            </li>
        </nav >
    );
}

export default Nav;