import React, { useState } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import AllCapitals from './types/AllCapitals';
import SearchedCapital from './types/SearchedCapital';
import Guess from './types/Guess';
import Guesser from './components/Guesser';
import Message from './components/Message';
import GuessList from './components/GuessList';
import Hint from './components/Hint';
import './App.css';

function App() {
  AllCapitals.readInCapitals();
  SearchedCapital.findSearchedCapitalOfTheDay();

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
      <Menu showHint={showHint} toggleHintSection={toggleHintSection} />
      <Header />
      <Guesser addGuess={addGuess} noCapitalGuess={noCapitalGuess} />
      <Message guess={currentGuess} guessedString={guessedString} />
      <GuessList guesses={guesses} />
      <Hint showHint={showHint} />
    </div>
  );
}

export default App;
