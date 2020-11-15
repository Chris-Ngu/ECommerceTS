import "../../styles/market/guide.scss"
import React from "react";
import { Button, Form } from "react-bootstrap";

import Nav from "../../components/Nav";

const Guide = () => {
    return (
        <div>
            <Nav />
            <div className="guide-form-container">
                <Form>
                    <p>Purpose</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-purpose"
                    >
                        <option value="gaming">Gaming</option>
                        <option value="typing">Typing</option>
                        <option value="none-purpose">No Preference</option>
                    </Form.Control>
                    <br />
                    <p>Size</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-size"
                    >
                        <option value="compact">60 - 75% Compact</option>
                        <option value="tkl">80% - TKL</option>
                        <option value="full">100% - Full size</option>
                        <option value="none-size">No Preference</option>
                    </Form.Control>
                    <br />
                    <p>Sound profile</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-sound"
                    >
                        <option value="regular">Regular</option>
                        <option value="silent">Silent</option>
                        <option value="none-sound">No Preference</option>
                    </Form.Control>
                    <br />
                    <p>Switch weight</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-size"
                    >
                        <option value="light">Light</option>
                        <option value="medium">Medium</option>
                        <option value="heavy">Heavy</option>
                        <option value="none-size">No Prefernce</option>
                    </Form.Control>
                    <br />
                    <p>Lighting</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-light"
                    >
                        <option value="light">Backlit</option>
                        <option value="nolight">No Backlight</option>
                        <option value="none-light">No Preference</option>
                    </Form.Control>
                    <br />
                    <p>Pricing</p>
                    <Form.Control
                        as="select"
                        defaultValue="none-budget"
                    >
                        <option value="budget">Budget - Sub 100$</option>
                        <option value="exbudget">Sub $150</option>
                        <option value="none-budget">No Preference</option>
                    </Form.Control>
                    <br />
                    <Button
                        variant="info"
                        type="submit"
                    >
                        Find your next board!
                </Button>
                </Form>
            </div>
        </div>
    )
}

export default Guide;