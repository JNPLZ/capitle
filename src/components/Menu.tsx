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
        <button className={showHint ? 'active' : ''} type="button" onClick={toggleHintSection}>
          🤔 Hint
        </button>
      </form>
    </div>
  );
}
