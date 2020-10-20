import "../styles/components/Nav.scss";
import React, { useState } from 'react';


const Nav = () => {
    const [searchQuery, changeSearchQuery] = useState("");
    return (
        <nav className="nav">
            <a className="active" href="#">Home</a>
            <a href="#">Browse</a>
            <a href="#">Menu</a>
            <form>
                <input className="searchBar"
                    onChange={(e) => changeSearchQuery(searchQuery + e.target.value)}
                />
                <button
                    className="searchButton"
                    type="submit"
                />
            </form>


            <button className="nav-right">Menu</button>
        </nav >
    );
}

export default Nav;