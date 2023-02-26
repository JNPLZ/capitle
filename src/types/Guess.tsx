import * as geolib from 'geolib';
import Capital from './Capital';
import SearchedCapital from './SearchedCapital';
import Direction from './Direction';

class Guess {
  readonly capital: Capital;

  readonly distance: number;

  readonly isSearchedCapital: boolean;

  readonly direction: Direction;

  constructor(capital: Capital) {
    this.capital = capital;
    this.distance = this.calculateDistace();
    this.isSearchedCapital = this.capital === SearchedCapital.capital;
    this.direction = new Direction(this.capital);
  }

  private calculateDistace() {
    const distanceInMeters = geolib.getDistance(this.capital, SearchedCapital.capital);
    return Math.round(distanceInMeters / 1000);
  }
}

export default Guess;
