import React, { useState } from 'react';
import AllCapitals from '../types/AllCapitals';
import SearchedCapital from '../types/SearchedCapital';
import Guess from '../types/Guess';

type Props = {
    addGuess: any
}

export default function Guesser({ addGuess }:Props) {
  const [guessedCapitalName, setGuessedCapitalName] = useState('');

  function guess() {
    if (AllCapitals.exists(guessedCapitalName)) {
      const guessedCapital = AllCapitals.getCapitalByName(guessedCapitalName);
      console.log(guessedCapital);
      if (SearchedCapital.capital.hasName(guessedCapital.name)) {
        console.log('WIN!');
        addGuess(new Guess(guessedCapital, 0, true));
      } else {
        const distanceInKilometers = Math.round(
          SearchedCapital.capital.distanceInKilometers(guessedCapital),
        );
        console.log(`${guessedCapital.name} is ${distanceInKilometers} km away. Try again!`);
        addGuess(new Guess(guessedCapital, distanceInKilometers, false));
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
        type="text"
        value={guessedCapitalName}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          guess();
          setGuessedCapitalName('');
        }}
      >
        OK
      </button>
    </form>
  );
}
