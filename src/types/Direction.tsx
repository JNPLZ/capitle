import * as geolib from 'geolib';
import Capital from './Capital';
import SearchedCapital from './SearchedCapital';

class Direction {
  readonly compassOrientation: string;

  readonly arrow: string;

  constructor(capital:Capital) {
    this.compassOrientation = geolib.getCompassDirection(capital, SearchedCapital.capital);
    this.arrow = this.setArrow();
  }

  private setArrow():string {
    return this.DirectionArrows[this.compassOrientation];
  }

  private DirectionArrows: Record<string, any> = {
    N: '⬆️',
    NNE: '↗️',
    NE: '↗️',
    ENE: '↗️',
    E: '➡️',
    ESE: '↘️',
    SE: '↘️',
    SSE: '↘️',
    S: '⬇️',
    SSW: '↙️',
    SW: '↙️',
    WSW: '↙️',
    W: '⬅️',
    WNW: '↖️',
    NW: '↖️',
    NNW: '↖️',
  };
}

export default Direction;
