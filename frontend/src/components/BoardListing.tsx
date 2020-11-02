import React from "react";

type ListingRequirements = {
    listingTitle: string
    photoLink: string
    price: number
    datePosted: Date
}

const BoardListing = (props: ListingRequirements) => {
    return (
        <div className="boardlisting-container">
            <p>{props.title}</p>
        </div>
    )
}

export default BoardListing;