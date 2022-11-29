import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);
  const [sortBy, setSortBy] = useState("id");

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

  const sortedListings = filteredListingsArr.sort((listingA, listingB) => {
    if (sortBy === "id") {
      return listingA.id - listingB.id;
    } else {
      return listingA.location.localeCompare(listingB.location);
    }
  })

  const listingCards = sortedListings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}
        handleDeleteListing={handleDeleteListing}
      />
    );
  });
  /*
  As a user:
I can sort the listings alphabetically by location.
I can create a new listing by submitting a form, and persist the changes to
the backend.
create UI since none exist.  Logical place would be in the listings div
  ui would a button >sort locations< on click it sorts
  pulls listings from the filteredListingsArr because it contains the visible listings after possible deletions
  create a new state for the sorted listings
  */

  return (
    <main>
      <button onClick={() => setSortBy("id")}>Default Sort</button>
      <button onClick={() => setSortBy("location")}>
        Sort Locations
      </button>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
