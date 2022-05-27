/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import AllCapitals from '../types/AllCapitals';
import './Hint.css';

type Props = {
    showHint: boolean;
}

export default function Hint({ showHint }: Props) {
  const [countryName, setCountryName] = useState('');
  const [hintText, setHintText] = useState('');

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
      <form>
        <input
          autoComplete="off"
          name="hint"
          onChange={(e) => {
            e.preventDefault();
            setCountryName(e.currentTarget.value);
          }}
          placeholder="Country name"
          type="text"
          value={countryName}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            getCapitalHint();
            setCountryName('');
          }}
        >
          OK
        </button>
      </form>
      <p className="Hint-hint" dangerouslySetInnerHTML={{ __html: hintText }} />
    </div>
  ) : null;
}
