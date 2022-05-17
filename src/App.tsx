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
  const [currentGuess, setCurrentGuess] = useState<Guess>();
  const [guessedString, setGuessedString] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const addGuess = (guess:Guess) => {
    setCurrentGuess(guess);
    const currentGuesses = guesses;
    currentGuesses.push(guess);
    setGuesses(currentGuesses);
  };
  const noCapitalGuess = (guessed:string) => {
    setGuessedString(guessed);
    setCurrentGuess(undefined);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-headline">
          <span>🏙</span>
          CAPITLE
          <span>🏙</span>
        </h1>
        <p>Find the desired country capital by guessing capital names.</p>
      </header>
      <Guesser addGuess={addGuess} noCapitalGuess={noCapitalGuess} />
      <Message guess={currentGuess} guessedString={guessedString} />
      <GuessList guesses={guesses} />
    </div>
  );
}

export default App;
