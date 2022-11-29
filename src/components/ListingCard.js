import React, {useState} from "react";

function ListingCard({ image, description, location}) {
  const [fave, setFave] = useState(false);

  function handleFaveStar() {
    setFave(!fave);
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
