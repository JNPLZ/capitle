import React from 'react';
import './Statistics.css';

type Props = {
    showStatistics: boolean,
    toggleStatisticsSection: any;
}

export default function Statistics({ showStatistics, toggleStatisticsSection }: Props) {
  return showStatistics ? (
    <section className="Statistics">
      <div className="Statistics-headline">
        <span className="Statistics-dummy" />
        <span>Statistics</span>
        <button title="close" className="Statistics-close" onClick={toggleStatisticsSection} type="button">X</button>
      </div>
      <p>
        Coming soon.
      </p>
    </section>
  ) : null;
}
