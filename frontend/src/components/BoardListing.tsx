import "../styles/components/BoardListing.scss";

import React from "react";
import { Image } from 'react-bootstrap';

type ListingRequirements = {
    listingTitle: string
    photoLink: string
    price: number
    datePosted: string
}

const BoardListing = (props: ListingRequirements) => {
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
        </div >
    )
}

export default BoardListing;