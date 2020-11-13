/*
    Could use github api here to grab the list of collaborators 
    https://developer.github.com/v3/repos/collaborators/
*/

import "../styles/about.scss";
import React from "react";
import Nav from "../components/Nav";
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Nav />
            <Container className="market-about-container">
                <h4>
                    Created by
                </h4>
                <a href="https://github.com/chris-ngu">
                    Chris Nguyen
                </a>

                <br />
                <br />
                <h4>Contributing Members</h4>
                <a href="https://github.com/chris-ngu">
                    Chris Nguyen
                </a>

                <br />
                <br />

                <a href="https://github.com/Chris-Ngu/KeepClack">
                    Github repository
                </a>
                <footer>
                    Thank you for everyone that has contributed to this project!
                </footer>
            </Container>
        </div>
    )
}

export default About;