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
    let pictureToUse;

    if (props.photoLink === null) {
        pictureToUse = (<Image
            src={require("../images/placeholder-board.png")}
            alt="listing-image-missing"
            width={350}
            height={150}
        />)
    } else {
        pictureToUse = (<Image
            src={props.photoLink}
            alt="listing-image-placeholder"
            width={350}
            height={150}
        />)

    }
    return (
        <div className="boardlisting-container">
            {
                pictureToUse
            }
            <h4>{props.listingTitle}</h4>
            <p className="boardlisting-date">Date: {props.datePosted.substring(0, 10)}</p>
            <p className="boardListing-time">Time: {props.datePosted.substring(11, 19)}</p>
            <p className="boardlisting-price">${props.price}</p>
            <Button
                className="boardListing-button"
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