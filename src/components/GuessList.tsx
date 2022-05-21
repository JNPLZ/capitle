import React from 'react';
import Popup from 'reactjs-popup';
import Guess from '../types/Guess';
import './GuessList.css';

type Props = {
    guesses: Guess[]
}

export default function GuessList({ guesses }:Props) {
  return (
    <div className="GuessList">
      {guesses.map((guess) => (
        <Popup
          position="top left"
          trigger={(
            <div key={guess.capital.name} className="GuessList-row">
              <div className="GuessList-name">
                <span>{guess.capital.name }</span>
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
              )}
        >
          <div className="GuessList-popup-content">
            <div>
              {guess.capital.countryName}
              {' '}
              (
              {guess.capital.countryCode}
              )
            </div>
            <a href={guess.capital.wikipediaLink()} target="_blank" rel="noreferrer">
              <img
                alt="Wikipedia's Logo"
                className="wikipedia-logo"
                width="28"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/1200px-Wikipedia%27s_W.svg.png"
              />
            </a>
          </div>
        </Popup>
      ))}
      {guesses.length ? (
        <p className="GuessList-additional-information">ℹ️ Tap on a guess for additional information.</p>
      ) : null}
    </div>
  );
}
