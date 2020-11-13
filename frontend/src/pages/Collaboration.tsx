import React from "react";
import { Button, Container, Form, Jumbotron } from "react-bootstrap";
import Nav from "../components/Nav";

const Collaboration = () => {
    return (
        <div>
            <Nav />
            <Container>
                <Jumbotron>
                    <h1>Future Collaborations!</h1>
                    <p>
                        We are currently in the process of creating the collaboration platform
                        Please be patient while we finalize the processes
                    </p>
                    <div className="collaboration-form">
                        <Form>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Here" />
                            <br />
                            <Button type="submit"> Be notified</Button>
                        </Form>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default Collaboration;