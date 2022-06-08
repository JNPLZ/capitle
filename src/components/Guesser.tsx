/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import confetti from 'canvas-confetti';
import AllCapitals from '../types/AllCapitals';
import SearchedCapital from '../types/SearchedCapital';
import Guess from '../types/Guess';
import './Guesser.css';

type Props = {
    addGuess: any,
    noCapitalGuess: any;
}

export default function Guesser({ addGuess, noCapitalGuess }:Props) {
  const [guessedCapitalName, setGuessedCapitalName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  function guessCapital() {
    const trimmedName = guessedCapitalName.trim();
    if (AllCapitals.exists(trimmedName)) {
      const guessedCapital = AllCapitals.getCapitalByName(trimmedName);
      addGuess(new Guess(guessedCapital));
      if (SearchedCapital.capital.hasName(guessedCapital.name)) {
        setDisabled(true);
        confetti();
      }
    } else {
      noCapitalGuess(trimmedName);
    }
  }

  return (
    <form className="Guesser-form">
      <Autosuggest
        theme={{ suggestionHighlighted: 'font-bold' }}
        shouldRenderSuggestions={() => true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) => {
          setSuggestions(
            value.length > 1
              ? AllCapitals.getCapitals()
                .map((c) => c.name)
                .filter((name) => name.toLowerCase().includes(value.toLowerCase())).sort()
              : [],
          );
        }}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => (
          <div className="Guesser-suggestion">
            {suggestion}
          </div>
        )}
        containerProps={{
          className: 'Guesser-autosuggest',
        }}
        inputProps={{
          autoComplete: 'off',
          className: 'Guesser-form-element',
          disabled,
          id: 'guess',
          name: 'guess',
          onChange: (event, { newValue }) => {
            setGuessedCapitalName(newValue);
          },
          placeholder: 'Capital name',
          type: 'text',
          value: guessedCapitalName,
        }}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <div
            {...containerProps}
            className="Guesser-suggestions"
          >
            {children}
          </div>
        )}
      />
      <button
        className="Guesser-form-element"
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
