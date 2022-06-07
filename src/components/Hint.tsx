/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import AllCapitals from '../types/AllCapitals';
import './Hint.css';

type Props = {
    showHint: boolean;
}

export default function Hint({ showHint }: Props) {
  const [countryName, setCountryName] = useState('');
  const [hintText, setHintText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggested, setSuggested] = useState(false);

  function getCapitalHint() {
    const trimmedName = countryName.trim();
    setCountryName(trimmedName);
    const capitalByCountryName = AllCapitals.getCapitalByCountryName(trimmedName);
    if (capitalByCountryName) {
      setHintText(`The capital of ${capitalByCountryName.countryName} is <i>${capitalByCountryName.name}</i>.`);
    } else {
      setHintText(`"<i>${trimmedName}</i>" is not a country.`);
    }
  }

  return showHint ? (
    <div className="Hint">
      <p className="Hint-intro">
        <strong>🤔 Hint section:</strong>
        {' '}
        Type in a country name to get its capital.
      </p>
      <form className="Hint-form">
        <Autosuggest
          theme={{ suggestionHighlighted: 'font-bold' }}
          shouldRenderSuggestions={() => true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => {
            setSuggestions(
              value.length > 1
                ? AllCapitals.getCapitals()
                  .map((c) => c.countryName)
                  .filter((name) => name.toLowerCase().includes(value.toLowerCase())).sort()
                : [],
            );
          }}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => (
            <div className="Hint-suggestion">
              {suggestion}
            </div>
          )}
          containerProps={{
            className: 'Hint-autosuggest',
          }}
          inputProps={{
            autoComplete: 'off',
            className: 'Hint-form-element',
            // disabled,
            id: 'hint',
            name: 'hint',
            onChange: (e, { newValue }) => {
              e.preventDefault();
              setCountryName(newValue);
            },
            placeholder: 'Country name',
            type: 'text',
            value: countryName,
          }}
          renderSuggestionsContainer={({ containerProps, children }) => (
            <div
              {...containerProps}
              className={`Hint-suggestions ${suggested ? 'suggested' : ''}`}
            >
              {children}
            </div>
          )}
        />
        <button
          className="Hint-form-element"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            getCapitalHint();
            setCountryName('');
            setSuggested(true);
          }}
        >
          OK
        </button>
      </form>
      <p className="Hint-hint" dangerouslySetInnerHTML={{ __html: hintText }} />
    </div>
  ) : null;
}
