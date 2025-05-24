import { useState, useEffect } from 'react';
import { quotes } from './quotes';
import './App.css';

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <div className="app-container">
      <header>
        <h1>Random Quote Generator</h1>
      </header>
      <main>
        <div className="quote-card">
          <p className="quote-text">"{currentQuote.text}"</p>
          <p className="quote-author">- {currentQuote.author}</p>
        </div>
        <button onClick={handleNewQuote} className="new-quote-button">
          Get New Quote
        </button>
      </main>
      <footer>
        <p>A simple React app by Cline</p>
      </footer>
    </div>
  );
}

export default App;
