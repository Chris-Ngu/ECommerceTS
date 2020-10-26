import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormControl, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const history = useHistory();
    const [searchQuery, changeSearchQuery] = useState("");

    const handleSubmit = () => {
        alert("Search query: " + searchQuery);
    }
    
    return (
        
        <Navbar
            bg="dark"
            expand="lg"
            variant="dark"
        >
            <Navbar.Brand
                href="/market">
                KeebClack
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Home" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Keyboard Guide</NavDropdown.Item>
                        <NavDropdown.Item href="#">Why Mechanical</NavDropdown.Item>
                        <NavDropdown.Item href="#">Collaboration</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">About us</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/market/shop">Shop</Nav.Link>
                    <Nav.Link href="/market/learn">Learn</Nav.Link>
                    <Nav.Link href="/market/updates">Updates/ stock</Nav.Link>
                </Nav
                >
                <Form
                    inline
                    onSubmit={() => handleSubmit()}
                >
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => changeSearchQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="outline-success"
                    >
                        Search
                        </Button>
                </Form>

                <Button
                    onClick={() => history.push("/login")}

                >
                    Login
                </Button>

                <Nav.Link
                    href="/menu"
                >
                    Menu
                </Nav.Link>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;