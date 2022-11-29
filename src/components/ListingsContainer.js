import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  // console.table(listings)
  const listCard = listings.map((listing) => {
    return <ListingCard
      key={listing.id}
      image={listing.image}
      description={listing.description}
      location={listing.location}
    />;
  })

  return (
    <main>
      <ul className="cards">
        {listCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
