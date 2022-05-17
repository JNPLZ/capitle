import Capital from './Capital';
import AllCapitals from './AllCapitals';

class SearchedCapital {
  public static capital: Capital;

  public static findSearchedCapitalOfTheDay() {
    this.capital = AllCapitals.getCapitalByName('Berlin');
  }

  public static getSearchedCapitalOfTheDay() {
    return SearchedCapital.capital;
  }
}

export default SearchedCapital;
