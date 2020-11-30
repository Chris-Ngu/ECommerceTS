import "../../styles/market/Updates.scss";
import React, { useEffect, useState } from "react";

import Nav from "../../components/Nav";
import BoardListing from "../../components/BoardListing";
import Axios from "axios";
import { SERVER_ADDRESS } from "../../serverConfig";



const Updates = () => {
    const [databaseQuery, changeDatabaseQuery] = useState<any>([]);

    const updateListings = () => {
        Axios.get(SERVER_ADDRESS + "/keyboards")
            .then((queryObject) => {
                changeDatabaseQuery(queryObject.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        updateListings();
    }, []);


    return (
        <div>
            <Nav />
            <div className="updates-container">
                <h1 className="updates-header">Updates page here</h1>
                <br />
                <div className="updates-grid-container">
                    {
                        databaseQuery.map((listing: any) => {
                            return (
                                <BoardListing
                                    listingTitle={listing.listingTitle}
                                    photoLink={listing.photoLink}
                                    price={listing.price}
                                    datePosted={listing.createdAt}
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

export default Updates;