import "../styles/Updates.scss";
import React from "react";

import Nav from "../components/Nav";
import BoardListing from "../components/BoardListing";



const Updates = () => {
    const sampleData = [
        {
            listingTitle: "1 title",
            photoLink: "1 link",
            price: 1,
            datePosted: "1 date",
            id: 666
        }, {
            listingTitle: "2 title",
            photoLink: "2 link",
            price: 2,
            datePosted: "2 date",
            id: 666
        },
    ]

    const updatesSchedules = pullUpdates();

    return (
        <div>
            <Nav />
            <div className="updates-container">
                <h1 className="updates-header">Updates page here</h1>
                <br />
                <div className="updates-grid-container">
                    {
                        sampleData.map((listing) => {
                            return (
                                <BoardListing
                                    listingTitle={listing.listingTitle}
                                    photoLink={listing.photoLink}
                                    price={listing.price}
                                    datePosted={listing.datePosted}
                                    id={listing.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const pullUpdates = () => {
    // pull update catalogue here
}

export default Updates;