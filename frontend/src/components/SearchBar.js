import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            onSearch(query);
            setQuery('');  // Clear the input after search
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="What kind of insurance are you looking for?" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
