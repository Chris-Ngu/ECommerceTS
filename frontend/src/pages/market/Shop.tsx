/*
    fetch types of keyboards here
*/
import "../../styles/market/Shop.scss";
import React, { useState } from "react";
import BoardListing from "../../components/BoardListing";

import Nav from "../../components/Nav";
import { Container } from "react-bootstrap";

const Shop = () => {
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
        }, {
            listingTitle: "2 title",
            photoLink: "2 link",
            price: 2,
            datePosted: "2 date",
            id: 666
        }, {
            listingTitle: "2 title",
            photoLink: "2 link",
            price: 2,
            datePosted: "2 date",
            id: 666
        },
    ]

    // Empty array of objects
    const [databaseQuery, changeDatabaseQuery] = useState([]);
    const params = new URLSearchParams(window.location.search);
    const brandType = params.get('brand');
    const switchType = params.get("switch");

    if (brandType?.length != null) {
        alert(brandType);
    }
    if (switchType?.length != null) {
        alert(switchType);
    }

    // insert query here for searching on brand if both params are not null

    return (
        <div>
            <Nav />
            <Container className="shop-page">
                <h4 className="shop-header">Mechanical Keyboards Catalogue</h4>
                <Container className="shop-grid-wrapper">
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
                </Container>
            </Container>
        </div>
    );
}

export default Shop;