import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listings) => setListings(listings));
  }, []);

  function handleDeleteListing(id) {
    const updatedListingsArr = listings.filter((listing) => listing.id !== id);
    setListings(updatedListingsArr);
  }

  const filteredListingsArr = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  });

  const listingCards = filteredListingsArr.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}
        handleDeleteListing={handleDeleteListing}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
