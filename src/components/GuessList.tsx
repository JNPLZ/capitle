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
          key={guess.capital.name}
          position="top left"
          trigger={(
            <div className="GuessList-row">
              <div className="GuessList-name">
                <span>
                  {guess.capital.name}
                </span>
              </div>
              <div className="GuessList-distance">
                {guess.distance}
                {' '}
                km
              </div>
              <div className="GuessList-orientation">
                {!guess.isSearchedCapital ? guess.direction.compassOrientation : null}
              </div>
              <div className="GuessList-arrow">
                {guess.isSearchedCapital ? '🥳' : guess.direction.arrow}
                {' '}
              </div>
            </div>
              )}
        >
          <div className="GuessList-popup">
            <div className="GuessList-popup-message">
              {`The desired capital is located ${guess.distance} km 
                ${guess.direction.compassOrientationString} of
                ${guess.capital.name}.`}
            </div>
            <div className="GuessList-popup-content">
              <span>{`${guess.capital.countryName} (${guess.capital.countryCode})`}</span>
              <div className="GuessList-popup-content-links">
                <a href={guess.capital.googleMapsLink()} target="_blank" rel="noreferrer">
                  <img
                    alt="Google Maps Logo"
                    width="28"
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/150/google-maps-512.png"
                  />
                </a>
                <a href={guess.capital.wikipediaLink()} target="_blank" rel="noreferrer">
                  <img
                    alt="Wikipedia Logo"
                    className="wikipedia-logo"
                    width="28"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/1200px-Wikipedia%27s_W.svg.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </Popup>
      ))}
      {guesses.length === 1 ? (
        <p className="GuessList-additional-information">👆 Tap on a capital in the list for additional information.</p>
      ) : null}
    </div>
  );
}
