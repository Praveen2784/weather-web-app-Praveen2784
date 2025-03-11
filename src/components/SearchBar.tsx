import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { darkMode } = useTheme();

  const popularCities = [
    'London', 'New York', 'Tokyo', 'Paris', 'Sydney',
    'Dubai', 'Singapore', 'Hong Kong', 'Mumbai', 'Toronto'
  ];

  useEffect(() => {
    if (city.length >= 2) {
      const filtered = popularCities.filter(c => 
        c.toLowerCase().includes(city.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCity(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onSearch(`${position.coords.latitude},${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="w-full max-w-md relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className={`w-full px-4 py-2 pr-20 rounded-lg border ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            type="button"
            onClick={handleLocationClick}
            className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600`}
            title="Use current location"
          >
            <MapPin className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>
          <button
            type="submit"
            className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600`}
          >
            <Search className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
        }`}>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                index === 0 ? 'rounded-t-lg' : ''
              } ${index === suggestions.length - 1 ? 'rounded-b-lg' : ''}`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;