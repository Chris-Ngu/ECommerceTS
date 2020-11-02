import React from "react";

import Nav from "../components/Nav";
import BoardListing from "../components/BoardListing";

const Updates = () => {
    return (
        <div>
            <Nav />
            <h1>Updates page here</h1>
            <BoardListing 
                title="ExampleListingTItle"
            />
        </div>
    )
}

export default Updates;