import capitals from './capitals.json';
import countries from './countriesRecognizedByUn.json';

test('Countries are recognized by the United Nations', () => {
  const unrecognizedCountries = [];
  capitals.forEach((capital) => {
    if (!countries.includes(capital.CountryName)) {
      unrecognizedCountries.push(capital.CountryName);
    }
  });
  try {
    expect(unrecognizedCountries.length).toBe(0);
  } catch (e) {
    throw new Error(`${unrecognizedCountries} \nNot in UN list.\n${e}`);
  }
});

test('Same number of capitals countries', () => {
  try {
    expect(capitals.length).toEqual(countries.length);
  } catch (e) {
    const missingCapitals = [];
    countries.forEach((country) => {
      if (!capitals.some((capital) => capital.CountryName === country)) {
        missingCapitals.push(country);
      }
    });
    console.log(capitals.length);
    console.log(countries.length);
    throw new Error(`${capitals.length} capitals - ${countries.length} countries\nMissing: ${missingCapitals}`);
  }
});

test('Validate capital data', () => {
  const continents = ['Africa', 'Asia', 'Central America', 'Europe', 'North America', 'Oceania', 'South America'];
  capitals.forEach((capital) => {
    try {
      expect(parseFloat(capital.CapitalLatitude, 10)).not.toBe(NaN);
      expect(parseFloat(capital.CapitalLongitude, 10)).not.toBe(NaN);
      expect(capital.CountryCode.length).toBe(2);
      expect(continents.includes(capital.ContinentName)).toBeTruthy();
    } catch (e) {
      throw new Error(`Invalid data for ${capital.CapitalName}.`);
    }
  });
});
