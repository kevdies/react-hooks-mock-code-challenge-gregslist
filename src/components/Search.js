import React, {useState} from "react";

function Search({handleSearch}) {
  const [currentSearch, setCurrentSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(currentSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}//this is the text box so set state to this
        onChange={(e) => setCurrentSearch(e.target.value)}/*on change collects while typing. thats the event.target.value...so takes in even and sets state to that event onChange */
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
