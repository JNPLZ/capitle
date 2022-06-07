import React from 'react';
import './Menu.css';

type Props = {
    showHelp: boolean,
    toggleHelpSection: any,
    showHint: boolean,
    toggleHintSection: any,
    showStatistics: boolean,
    toggleStatisticsSection: any;
}

export default function Menu({
  showHelp, toggleHelpSection,
  showHint, toggleHintSection,
  toggleStatisticsSection, showStatistics,
}: Props) {
  return (
    <nav className="Menu">
      <form className="Menu-form">
        <button
          className={showHelp ? 'active' : ''}
          type="button"
          onClick={toggleHelpSection}
        >
          ❔ How to
        </button>
        <button
          className={showHint ? 'active' : ''}
          type="button"
          onClick={() => {
            toggleHintSection();
            if (!showHint) {
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
              }, 50);
            }
          }}
        >
          🤔 Hint
        </button>
        <button
          className={showStatistics ? 'active' : ''}
          type="button"
          onClick={toggleStatisticsSection}
        >
          📊 Statistics
        </button>
      </form>
    </nav>
  );
}
