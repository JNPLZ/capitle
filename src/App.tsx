import React, { useState } from 'react';
import AllCapitals from './types/AllCapitals';
import SearchedCapital from './types/SearchedCapital';
import Guess from './types/Guess';
import Header from './components/Header';
import Guesser from './components/Guesser';
import Message from './components/Message';
import GuessList from './components/GuessList';
import Footer from './components/Footer';
import './App.css';
import Tracker from './metrics/Tracker';

function App() {
  AllCapitals.readInCapitals();
  SearchedCapital.findSearchedCapitalOfTheDay();
  Tracker.trackPageVisit(true);

  const [currentGuess, setCurrentGuess] = useState<Guess>();
  const [guessedString, setGuessedString] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [showHint, setShowHint] = useState(false);

  const toggleHintSection = () => {
    setShowHint(!showHint);
  };
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
      <div className="App-upper-content">
        <Header />
        <Guesser addGuess={addGuess} noCapitalGuess={noCapitalGuess} />
        <Message guess={currentGuess} guessedString={guessedString} />
        <GuessList guesses={guesses} />
      </div>
      <Footer showHint={showHint} toggleHintSection={toggleHintSection} />
    </div>
  );
}

export default App;
