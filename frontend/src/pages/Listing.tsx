import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";

import { SERVER_ADDRESS } from "../serverConfig";
import Nav from "../components/Nav";


const Listing: React.FC = (props: any) => {
    const [keyboardId, changeKeyboardId] = useState("");
    const [keyboardData, changeKeyboardData] = useState<any>({});
    const [isKeyboardAvailable, changeIsKeyboardAvailable] = useState("Out of Stock");

    const checkIfExists = () => {
        const id = props.match.params.keyboardId;
        Axios.get(SERVER_ADDRESS + "/keyboards/" + id)
            .then((data) => {
                if (data.data.id !== undefined || data.data.id !== null) {
                    changeKeyboardData(data.data);
                    changeKeyboardId(id);
                    if (data.data.soldAt === null || data.data.soldAt === undefined) {
                        changeIsKeyboardAvailable("In stock");
                    }
                }
                else {
                    alert("this keyboard does not exist");
                }
            });
    }

    const checkForNullPhoto = () => {
        return (
            keyboardData.photoLink === null || keyboardData.photoLink === undefined
                ? <Image
                    src={require("../images/placeholder-board.png")}
                    width={400}
                    height={200}
                />
                : <Image
                    src={keyboardData.photoLink}
                    width={400}
                    height={200}
                />
        )
    }

    const purchaseBoard = () => {
        alert("Board purchased!")
    }

    const buyOption = () => {
        return (
            keyboardData.soldAt === null
                ? (<Button
                    variant="primary"
                    onClick={purchaseBoard}
                >Buy
                </Button>)
                : (<Button
                    variant="warning"
                >SOLD OUT
                </Button>)
        )
    }

    useEffect(() => {
        checkIfExists();
    }, []);

    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    <Col>
                        {
                            checkForNullPhoto()
                        }
                    </Col>
                    <Col>
                        <h3>{keyboardData.listingName}</h3>
                        <h5>{keyboardData.description}</h5>
                        <h6>{isKeyboardAvailable}</h6>
                        <h6>${keyboardData.price}</h6>
                        {
                            buyOption()
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listing;