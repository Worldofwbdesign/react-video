import React, { Component } from 'react';

const SearchBar = ({ onChangeSearchTerm }) => {
  return (
    <div className="col-md-12">
      <input type="search" className="form-control search-field" placeholder="Search for..."
        onChange={event => onChangeSearchTerm(event.target.value)}
      />
    </div>
  )
}

export default SearchBar;
