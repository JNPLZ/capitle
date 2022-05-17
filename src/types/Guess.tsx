import Capital from './Capital';

class Guess {
  readonly capital: Capital;

  readonly distance: number;

  readonly isSearchedCapital: boolean;

  constructor(capital: Capital, distance: number, isSearchedCapital: boolean) {
    this.capital = capital;
    this.distance = distance;
    this.isSearchedCapital = isSearchedCapital;
  }
}

export default Guess;
