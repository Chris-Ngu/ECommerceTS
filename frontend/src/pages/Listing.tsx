import React, { useEffect, useState } from "react";

const Listing: React.FC = (props: any) => {
    const [listingId, changeListingId] = useState("");

    useEffect(() => {
        changeListingId(props.match.params.listingId);
        alert(listingId);
    })

    return (
        <div>
            <h1>
                {
                    listingId
                }
            </h1>
        </div>
    )
}

export default Listing;