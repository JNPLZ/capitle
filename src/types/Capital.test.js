import AllCapitals from './AllCapitals';

const dataProviderWikipediaLinks = [
  { expected: 'https://en.wikipedia.org/wiki/Addis_Ababa', capitalName: 'addis ababa' },
  { expected: 'https://en.wikipedia.org/wiki/Kingston,_Jamaica', capitalName: 'Kingston' },
  { expected: 'https://en.wikipedia.org/wiki/Luxembourg_City', capitalName: 'Luxembourg' },
  { expected: 'https://en.wikipedia.org/wiki/Mal%C3%A9', capitalName: 'Male' },
  { expected: 'https://en.wikipedia.org/wiki/St._George%27s,_Grenada', capitalName: 'Saint George\'s' },
  { expected: 'https://en.wikipedia.org/wiki/St._John\'s,_Antigua_and_Barbuda', capitalName: 'Saint John\'s' },
];
test('Correct Wikipedia link', () => {
  AllCapitals.readInCapitals();
  dataProviderWikipediaLinks.forEach((testcase) => {
    const capital = AllCapitals.getCapitalByName(testcase.capitalName);
    const actual = capital.wikipediaLink();
    expect(actual).toEqual(testcase.expected);
  });
});
