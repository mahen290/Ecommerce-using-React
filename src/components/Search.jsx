import React from 'react';
import './Search.css';

function Search( { onSearch } ) {

  const handleInput = (event) => {
    onSearch(event.target.value);
  }
  return (
    <div>
      <h2> Search Items From Here </h2>
      <form className = "form-wrapper">
        <input type = "search" name = "search-box" placeholder = "Search Your Favorite Items From Here" onChange = { handleInput } />
        <input className = "submit-btn" type = "submit" value = "Submit" />
      </form>
    </div>
  );
}

export default Search;
