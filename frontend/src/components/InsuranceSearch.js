import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';

const InsuranceSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8000/api/search/', {
        params: { query: searchQuery }
      });
      
      setResults(response.data);
      if (response.data.length === 0) {
        setError('No insurance policies found matching your search.');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to fetch insurance policies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for insurance policies..."
          className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 text-white disabled:opacity-50"
        >
          <Search size={20} />
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((insurance) => (
            <div
              key={insurance.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{insurance.name}</h3>
              <p className="text-gray-600 mb-2">Type: {insurance.policy_type}</p>
              <p className="text-gray-600">
                Coverage: ${Number(insurance.coverage_amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsuranceSearch;