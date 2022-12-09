/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import AllCapitals from '../types/AllCapitals';
import './Hint.css';

type Props = {
    showHint: boolean,
    toggleHintSection: any;
}

export default function Hint({ showHint, toggleHintSection }: Props) {
  const [countryName, setCountryName] = useState('');
  const [hintText, setHintText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggested, setSuggested] = useState(false);

  function getCapitalHint() {
    const trimmedName = countryName.trim();
    if (!trimmedName) {
      return;
    }
    setCountryName(trimmedName);
    const capitalByCountryName = AllCapitals.getCapitalByCountryName(trimmedName);
    if (capitalByCountryName) {
      setHintText(`🤓 The capital of ${capitalByCountryName.countryName} is <i>${capitalByCountryName.name}</i>.`);
    } else {
      setHintText(`🤨 "<i>${trimmedName}</i>" is not a country.`);
    }
  }

  return (
    <div className="Hint">
      {showHint ? (
        <div>
          <div className="Hint-headline">
            <div className="Hint-space" />
            <p className="Hint-hint">
              <strong>🤔 Hint section:</strong>
              {' '}
              Type in a country name to get its capital.
            </p>
            <button
              title="close"
              className="Hint-close"
              onClick={() => {
                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                toggleHintSection();
              }}
              type="button"
            >
              X
            </button>
          </div>
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
                id: 'hint',
                name: 'hint',
                onChange: (e, { newValue }) => {
                  e.preventDefault();
                  setCountryName(newValue);
                  document.getElementById('hint')?.scrollIntoView({ behavior: 'smooth' });
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
          {/* eslint-disable-next-line react/no-danger */}
          <p className="Hint-hint" dangerouslySetInnerHTML={{ __html: hintText }} />
        </div>
      ) : null}
    </div>
  );
}
