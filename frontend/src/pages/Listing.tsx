import React, { useEffect, useState } from "react";
import Axios from "axios";
import { SERVER_ADDRESS } from "../serverConfig";
import Nav from "../components/Nav";
import { Container, Image, Row, Col } from "react-bootstrap";


const Listing: React.FC = (props: any) => {
    const [keyboardId, changeKeyboardId] = useState("");
    const [keyboardData, changeKeyboardData] = useState<any>({});

    const checkIfExists = () => {
        const id = props.match.params.keyboardId;
        Axios.get(SERVER_ADDRESS + "/keyboards/" + id)
            .then((data) => {
                if (data.data.id !== undefined || data.data.id !== null) {
                    changeKeyboardData(data.data);
                    changeKeyboardId(id);
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
                        <h1>
                            {
                                keyboardId
                            }
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listing;