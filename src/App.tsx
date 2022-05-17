import React, { useState } from 'react';
import './App.css';
import AllCapitals from './types/AllCapitals';
import Guesser from './components/Guesser';
import SearchedCapital from './types/SearchedCapital';
import Message from './components/Message';
import Guess from './types/Guess';
import GuessList from './components/GuessList';

function App() {
  AllCapitals.readInCapitals();
  SearchedCapital.findSearchedCapitalOfTheDay();
  const [message, setMessage] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const addGuess = (guess:Guess) => {
    const currentGuesses = guesses;
    currentGuesses.push(guess);
    setGuesses(currentGuesses);
    setMessage(guess.capital.name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CAPITLE</h1>
        <Guesser addGuess={addGuess} />
        <Message message={message} />
        <GuessList guesses={guesses} />
      </header>
    </div>
  );
}

export default App;
