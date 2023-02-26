import AllCapitals from './AllCapitals';
import Guess from './Guess';
import SearchedCapital from './SearchedCapital';

const dataProviderCapitals = [
  { expected: false, searchedCapitalName: 'Brazzaville', guessedCapitalName: 'Kinshasa' },
  { expected: true, searchedCapitalName: 'Brazzaville', guessedCapitalName: 'Brazzaville' },
];
test.each(dataProviderCapitals)('Only true positives for searched capital', ({ expected, searchedCapitalName, guessedCapitalName }) => {
  AllCapitals.readInCapitals();
  SearchedCapital.mockCapital(AllCapitals.getCapitalByName(searchedCapitalName));
  const guessedCapital = AllCapitals.getCapitalByName(guessedCapitalName);
  const guess = new Guess(guessedCapital);
  expect(guess.isSearchedCapital).toEqual(expected);
});
