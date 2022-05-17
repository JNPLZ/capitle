import React from 'react';
import Guess from '../types/Guess';
import './Message.css';

type Props = {
    guess: Guess | undefined;
}

export default function Message({ guess }:Props) {
  const noGuessMarkup = <p>Type in a capital name an press OK to guess.</p>;
  const notFoundMarkup = (
    <p>
      <i>{guess?.capital.name}</i>
      {' '}
      was not the desired capital. Please try again.
    </p>
  );
  const foundMarkup = (
    <p>
      <em>{guess?.capital.name}</em>
      {' '}
      is the desired capital. Congratulations!
    </p>
  );
  const markupToShow = guess?.isSearchedCapital ? foundMarkup : notFoundMarkup;
  return (
    <div className="Message">
      {guess ? markupToShow : noGuessMarkup}
    </div>
  );
}
