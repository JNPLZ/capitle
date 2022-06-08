import * as geolib from 'geolib';
import Capital from './Capital';
import SearchedCapital from './SearchedCapital';

class Direction {
  readonly compassOrientation: string;

  readonly compassOrientationString: string;

  readonly arrow: string;

  constructor(capital:Capital) {
    this.compassOrientation = geolib.getCompassDirection(capital, SearchedCapital.capital);
    this.compassOrientationString = this.setOrientationString();
    this.arrow = this.setArrow();
  }

  private setArrow():string {
    return this.DirectionArrows[this.compassOrientation];
  }

  private setOrientationString():string {
    return this.OrientationString[this.compassOrientation];
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

  private OrientationString: Record<string, any> = {
    N: 'north',
    NNE: 'north-northeast',
    NE: 'northeast',
    ENE: 'east-northeast',
    E: 'east',
    ESE: 'east-southeast',
    SE: 'southeast',
    SSE: 'south-southeast',
    S: 'south',
    SSW: 'south-southwest',
    SW: 'southwest',
    WSW: 'west-southwest',
    W: 'west',
    WNW: 'west-northwest',
    NW: 'northwest',
    NNW: 'north-northwest',
  };
}

export default Direction;
