import React, { useState } from 'react';
import axios from 'axios';

function UrlForm() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 transition-all duration-300 ease-in-out">
      <div className="mb-6 text-center">
        <p className="text-lg text-gray-600">Paste a long URL to shorten it 👇</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="https://example.com/very/long/url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="flex-1 px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all"
        >
          ✂️ Shorten
        </button>
      </div>

      {shortUrl && (
        <div className="text-center mt-4 animate-fadeIn">
          <p className="text-gray-700 mb-2 text-lg font-medium">Here’s your shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default UrlForm;




