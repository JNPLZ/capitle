import React from 'react';
import Hint from './Hint';
import Menu from './Menu';
import './Footer.css';

type Props = {
    showHint: boolean,
    toggleHintSection: any;
}

export default function Footer({ showHint, toggleHintSection }: Props) {
  return (
    <div className="Footer">
      <Hint showHint={showHint} />
      <Menu showHint={showHint} toggleHintSection={toggleHintSection} />
    </div>
  );
}
