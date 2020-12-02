import React, { useEffect, useState } from "react";
import Axios from "axios";
import { SERVER_ADDRESS } from "../serverConfig";

const Listing: React.FC = (props: any) => {
    const [keyboardId, changeKeyboardId] = useState("");
    const [keyboardData, changeKeyboardData] = useState({});

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

    useEffect(() => {
        checkIfExists();
    }, []);

    return (
        <div>
            <h1>
                {
                    keyboardId
                }
                {
                    
                    console.log(keyboardData)
                }
            </h1>
        </div>
    )
}

export default Listing;