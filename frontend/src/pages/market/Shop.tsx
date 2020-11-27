import "../../styles/market/Shop.scss";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";

import BoardListing from "../../components/BoardListing";
import Nav from "../../components/Nav";
import { SERVER_ADDRESS } from "../../serverConfig";
const Shop = () => {
    const [databaseQuery, changeDatabaseQuery] = useState<any>([]);
    const params = new URLSearchParams(window.location.search);
    const brandType = params.get('brand');
    const switchType = params.get("switch");

    if (brandType?.length != null) {
        alert(brandType);
    }
    if (switchType?.length != null) {
        alert(switchType);
    }

    const initialQuery = () => {
        Axios.get(SERVER_ADDRESS + "/keyboards")
            .then((queryObject) => {
                changeDatabaseQuery(queryObject.data);
            })
            .catch((err) => {
                alert(err);
            })
    }

    initialQuery();

    return (
        <div>
            <Nav />
            <Container className="shop-page">
                <h4 className="shop-header">Mechanical Keyboards Catalogue</h4>
                <Container className="shop-grid-wrapper">
                    {
                        databaseQuery.map((listing: any) => {
                            return (
                                <BoardListing
                                    listingTitle={listing.listingName}
                                    photoLink={listing.photoLink}
                                    price={listing.price}
                                    datePosted={listing.createdAt}
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