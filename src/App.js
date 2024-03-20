import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');

  const fetchQuoteOfTheDay = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
          headers:{
            'X-Api-Key': '2zaXV2yJa2jY41+9oJveKg==8x1OmnZaTm5UkuPH'
          }
        });
      console.log(response);
      const { quote } = response.data[0];
      console.log(quote);
      setQuote(quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="app-container">
      <button className="fetch-button" onClick={fetchQuoteOfTheDay}>
        Fetch Quote of the Day
      </button>
      {quote && (
        <div className="quote-container">
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
};

export default App;
