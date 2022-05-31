import React from 'react';
import './Menu.css';

type Props = {
    showHint: boolean,
    toggleHintSection: any;
}

export default function Menu({ showHint, toggleHintSection }: Props) {
  return (
    <div className="Menu">
      <form>
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
      </form>
    </div>
  );
}
