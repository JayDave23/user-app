'use client'
import React, { useState } from 'react';
interface SearchBarProps {
  onSearch: (id: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    onSearch(searchId);
    setSearchId('');
  };

  return (
    <div className="search-flex">
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter UserID"
        className="search-input"
      />
      <button
        onClick={handleSearch}
        className="button edit-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;