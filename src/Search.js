import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search submitted: ", searchQuery);
    // Here you would handle the search query (e.g., make an API call)
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <span className="search-icon">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;