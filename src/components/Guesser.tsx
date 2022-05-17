import React, { useState } from 'react';
import AllCapitals from '../types/AllCapitals';
import SearchedCapital from '../types/SearchedCapital';
import Guess from '../types/Guess';

type Props = {
    addGuess: any,
    noCapitalGuess: any;
}

export default function Guesser({ addGuess, noCapitalGuess }:Props) {
  const [guessedCapitalName, setGuessedCapitalName] = useState('');
  const [disabled, setDisabled] = useState(false);

  function guessCapital() {
    const trimmedName = guessedCapitalName.trim();
    if (AllCapitals.exists(trimmedName)) {
      const guessedCapital = AllCapitals.getCapitalByName(trimmedName);
      addGuess(new Guess(guessedCapital));
      if (SearchedCapital.capital.hasName(guessedCapital.name)) {
        setDisabled(true);
      }
    } else {
      noCapitalGuess(trimmedName);
    }
  }

  return (
    <form>
      <input
        autoComplete="off"
        disabled={disabled}
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
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          guessCapital();
          setGuessedCapitalName('');
        }}
        type="submit"
      >
        OK
      </button>
    </form>
  );
}
