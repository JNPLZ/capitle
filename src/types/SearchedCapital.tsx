import Capital from './Capital';
import AllCapitals from './AllCapitals';

class SearchedCapital {
  public static capital: Capital;

  public static findSearchedCapitalOfTheDay() {
    const today = new Date().toLocaleDateString('de-DE');
    const [date, month, year] = today.split('.');
    const dayCode = Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(date, 10));
    const SHUFFLE_KEY = process.env.REACT_APP_SHUFFLE_KEY || '1';
    const key = Math.floor(dayCode / parseInt(`${SHUFFLE_KEY}5`, 10)) % AllCapitals.getCapitals().length;
    this.capital = AllCapitals.getCapitals()[key];
    // console.log(this.capital);
  }

  public static getSearchedCapitalOfTheDay() {
    return SearchedCapital.capital;
  }
}

export default SearchedCapital;
