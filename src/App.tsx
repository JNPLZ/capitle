import React, { useState } from 'react';
import AllCapitals from './types/AllCapitals';
import SearchedCapital from './types/SearchedCapital';
import Guess from './types/Guess';
import Header from './components/Header';
import Menu from './components/Menu';
import Guesser from './components/Guesser';
import Message from './components/Message';
import GuessList from './components/GuessList';
import Help from './components/Help';
import Hint from './components/Hint';
import Statistics from './components/Statistics';
import Tracker from './metrics/Tracker';
import './App.css';

function App() {
  AllCapitals.readInCapitals();
  SearchedCapital.findSearchedCapitalOfTheDay();
  Tracker.trackPageVisit(true);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const [currentGuess, setCurrentGuess] = useState<Guess>();
  const [guessedString, setGuessedString] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [showHelp, setShowHelp] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);

  const toggleHelpSection = () => {
    setShowHelp(!showHelp);
    setShowStatistics(false);
    setShowHint(false);
  };
  const toggleHintSection = () => {
    setShowHint(!showHint);
    setShowStatistics(false);
    setShowHelp(false);
  };
  const toggleStatisticsSection = () => {
    setShowStatistics(!showStatistics);
    setShowHelp(false);
    setShowHint(false);
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
      <div>
        <Menu
          showHelp={showHelp}
          toggleHelpSection={toggleHelpSection}
          showHint={showHint}
          toggleHintSection={toggleHintSection}
          showStatistics={showStatistics}
          toggleStatisticsSection={toggleStatisticsSection}
        />
        <Help showHelp={showHelp} toggleHelpSection={toggleHelpSection} />
        <Statistics
          showStatistics={showStatistics}
          toggleStatisticsSection={toggleStatisticsSection}
        />
        { !showHelp && !showStatistics ? (
          <main>
            <Header />
            <Guesser addGuess={addGuess} noCapitalGuess={noCapitalGuess} />
            <Message guess={currentGuess} guessedString={guessedString} />
            <GuessList guesses={guesses} />
            <Hint showHint={showHint} toggleHintSection={toggleHintSection} />
          </main>
        ) : null }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
