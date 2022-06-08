import React from 'react';
import './Help.css';

type Props = {
    showHelp: boolean,
    toggleHelpSection: any;
}

export default function Help({ showHelp, toggleHelpSection }: Props) {
  return showHelp ? (
    <section className="Help">
      <div className="Help-headline">
        <span className="Help-dummy" />
        <span>How to play</span>
        <button title="close" className="Help-close" onClick={toggleHelpSection} type="button">X</button>
      </div>
      <p>
        🏙 Every day a new country capital is being randomly chosen.
        You can try to find the wanted capital with as few tries as possible.
      </p>
      <p>
        ℹ️️ The guessed capitals will be added to the list.
        There you can see the distance to the wanted capital and the direction.
      </p>
      <p>
        👉 You can tap on every capital in your guess list to get additional information
        about it (link to Maps and Wikipedia) and see its country.
      </p>
      <div className="Help-subheadline">Example</div>
      <div className="Help-list">
        <span>Wanted capital:</span>
        <span><strong>Berlin</strong></span>
        <span>Your guess:</span>
        <span>Paris - 903 km - ENE ↗️</span>
      </div>
      <p>
        So the wanted capital (Berlin) is located 903 km in east-northeast direction
        of your guess (Paris).
      </p>
      <div className="Help-list">
        <span>Wanted capital:</span>
        <span><strong>Berlin</strong></span>
        <span>Your guesses:</span>
        <span>Paris - 903 km - ENE ↗️</span>
        <span />
        <span>Berlin - 0 km - 🥳️</span>
      </div>
      <p>Your guess was right. The wanted capital is Berlin.</p>
    </section>
  ) : null;
}
