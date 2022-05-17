import React from 'react';
import Guess from '../types/Guess';

type Props = {
    guesses: Guess[]
}

export default function GuessList({ guesses }:Props) {
  return (
    <div>
      {guesses.map((guess) => (
        <div>
          <span style={{ paddingRight: '2rem' }}>{guess.capital.name}</span>
          <span>
            {guess.distance}
            {' '}
            km
          </span>
        </div>
      ))}
    </div>
  );
}
