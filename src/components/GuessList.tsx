import React from 'react';
import Guess from '../types/Guess';
import './GuessList.css';

type Props = {
    guesses: Guess[]
}

export default function GuessList({ guesses }:Props) {
  return (
    <div className="GuessList">
      {guesses.map((guess) => (
        <div key={guess.capital.name} className="GuessList-row">
          <div className="GuessList-name">
            {guess.capital.name }
          </div>
          <div className="GuessList-distance">
            {guess.distance }
            {' '}
            km
          </div>
          <div className="GuessList-orientation">
            { !guess.isSearchedCapital ? guess.direction.compassOrientation : null}
          </div>
          <div className="GuessList-arrow">
            { guess.isSearchedCapital ? '🥳' : guess.direction.arrow}
            {' '}
          </div>
        </div>
      ))}
    </div>
  );
}
