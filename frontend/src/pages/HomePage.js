// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${query}`);
  };

  return (
    <div>
      <h1>Welcome to INSURTECH</h1>
      <p>Your centralized insurance management platform</p>
      <input
        type="text"
        placeholder="What kind of insurance are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default HomePage;
