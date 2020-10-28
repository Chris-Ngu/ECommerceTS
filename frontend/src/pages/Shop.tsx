import React, { useState } from "react";

import Nav from "../components/Nav";

const Shop = () => {
    // Empty array of objects
    const [databaseQuery, changeDatabaseQuery] = useState([]);
    const params = new URLSearchParams(window.location.search);
    const brandType = params.get('brand');
    const switchType = params.get("switch");

    if (brandType?.length != null) {
        alert(brandType);
    }
    if (switchType != null) {
        alert(switchType);
    }

    // insert query here for searching on brand if both params are not null

    return (
        <div>
            <Nav />
            <div>
                Hello
            </div>
        </div>
    );
}

export default Shop;