import React, {useState} from "react";

function ListingCard({ listing, handleDeleteListing }) {
  const [fave, setFave] = useState(false);
  const { id, image, description, location } = listing;

  function handleFaveStar() {
    setFave(!fave);
  }

  function handleDelete() {
    fetch("http://localhost:6001/${id}", {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => handleDeleteListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fave ? (
          <button onClick={handleFaveStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFaveStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
