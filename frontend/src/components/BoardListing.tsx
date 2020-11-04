import "../styles/components/BoardListing.scss";

import React from "react";
import { Button, Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

type ListingRequirements = {
    id: number
    listingTitle: string
    photoLink: string
    price: number
    datePosted: string
}

const BoardListing = (props: ListingRequirements) => {
    const history = useHistory();
    return (
        <div className="boardlisting-container">
            <Image
                src={require("../images/placeholder-board.png")}
                alt="listing-image"
                width={350}
                height={150}
            />
            <h4>{props.listingTitle}</h4>
            <p className="boardlisting-date">{props.datePosted}</p>
            <p className="boardlisting-price">${props.price}</p>
            <p className="boardlisting-id">id: {props.id}</p>
            <Button
                onClick={() => {
                    history.push("/market/shop/" + props.id)
                }}
            >
                More details
            </Button>
        </div >
    )
}

export default BoardListing;