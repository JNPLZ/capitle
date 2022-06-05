import seedrandom from 'seedrandom';
import Capital from './Capital';
import AllCapitals from './AllCapitals';

class SearchedCapital {
  public static capital: Capital;

  public static findSearchedCapitalOfTheDay() {
    const todayString = new Date().toLocaleDateString('de-DE');
    const capitalIndex = Math.floor(
      seedrandom.alea(todayString)() * AllCapitals.getCapitals().length,
    );
    this.capital = AllCapitals.getCapitals()[capitalIndex];
  }

  public static getSearchedCapitalOfTheDay() {
    return SearchedCapital.capital;
  }
}

export default SearchedCapital;
