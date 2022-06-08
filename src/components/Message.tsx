import React from 'react';
import Guess from '../types/Guess';
import './Message.css';

type Props = {
  guess: Guess | undefined;
  guessedString: string;
}

export default function Message({ guess, guessedString }:Props) {
  const noGuessMarkup = <p>Find the desired country capital by guessing capital names.</p>;
  const noCapitalMarkup = (
    <p>
      <i>{guessedString}</i>
      {' '}
      is not a capital. Please try again.
    </p>
  );
  const notFoundMarkup = (
    <p>
      <i>{guess?.capital.name}</i>
      {' '}
      was not the desired capital. Please try again.
    </p>
  );
  const foundMarkup = (
    <div>
      <p>
        <em>{guess?.capital.name}</em>
        {' '}
        is the desired capital. Congratulations!
      </p>
      {/* <p>You can take a look at your statistics.</p> */}
    </div>
  );

  const isSearchedCapital = guess?.isSearchedCapital;
  const isAnotherCapital = guess && !guess.isSearchedCapital;
  const notACapital = !guess && guessedString;

  let markupToShow = noGuessMarkup;
  if (isSearchedCapital) {
    markupToShow = foundMarkup;
  } else if (isAnotherCapital) {
    markupToShow = notFoundMarkup;
  } else if (notACapital) {
    markupToShow = noCapitalMarkup;
  }
  return (
    <div className="Message">
      {markupToShow}
    </div>
  );
}
