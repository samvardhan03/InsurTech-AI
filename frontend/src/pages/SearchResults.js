// src/pages/SearchResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/search?query=${query}`)
      .then(response => setResults(response.data))
      .catch(error => console.error(error));
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.map((insurance, index) => (
        <div key={index}>
          <h3>{insurance.name}</h3>
          <p>Provider: {insurance.provider}</p>
          <p>Category: {insurance.category}</p>
          <p>Details: {insurance.details}</p>
          <p>Price: ₹{insurance.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
