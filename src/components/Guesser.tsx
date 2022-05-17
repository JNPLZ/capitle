import React, { useState } from 'react';
import AllCapitals from '../types/AllCapitals';
import SearchedCapital from '../types/SearchedCapital';
import Guess from '../types/Guess';

type Props = {
    addGuess: any
}

export default function Guesser({ addGuess }:Props) {
  const [guessedCapitalName, setGuessedCapitalName] = useState('');

  function guessCapital() {
    if (AllCapitals.exists(guessedCapitalName)) {
      const guessedCapital = AllCapitals.getCapitalByName(guessedCapitalName);
      const guess = new Guess(guessedCapital);
      addGuess(guess);
      if (SearchedCapital.capital.hasName(guessedCapital.name)) {
        console.log('WIN!');
      } else {
        console.log(`${guessedCapital.name} is ${guess.distance} km away. Try again!`);
      }
    } else {
      console.log('no match');
    }
  }

  return (
    <form>
      <input
        autoComplete="off"
        id="guess"
        name="guess"
        onChange={(e) => {
          e.preventDefault();
          setGuessedCapitalName(e.currentTarget.value);
        }}
        placeholder="Capital name"
        type="text"
        value={guessedCapitalName}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          guessCapital();
          setGuessedCapitalName('');
        }}
      >
        OK
      </button>
    </form>
  );
}
