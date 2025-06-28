import React, { useState } from 'react';
import { searchCountries } from './utils/searchCountries';

export default function SearchBar({ countries }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      setResults(searchCountries(value, countries));
    } else {
      setResults([]);
    }
  };

  const handleSelect = (country) => {
    const slug = country.slug || country.iso || '';
    window.location.href = `/en/tipping-in-${slug}`;
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search a country..."
        aria-label="Search country"
        autoComplete="off"
        style={{ padding: '0.7em', borderRadius: '8px', width: '100%', maxWidth: 400 }}
      />
      {results.length > 0 && (
        <ul className="search-results" style={{ listStyle: 'none', margin: 0, padding: 0, background: '#fff', color: '#222', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'absolute', zIndex: 10, width: '100%', maxWidth: 400 }}>
          {results.slice(0, 8).map((country) => (
            <li
              key={country.slug || country.iso}
              onClick={() => handleSelect(country)}
              style={{ padding: '0.6em 1em', cursor: 'pointer', borderBottom: '1px solid #eee' }}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') handleSelect(country); }}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 