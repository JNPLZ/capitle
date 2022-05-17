import capitalDataFile from '../data/capitals.json';
import Capital from './Capital';

class AllCapitals {
  private static nameKey = 'CapitalName';

  private static countryKey = 'CountryName';

  private static latitudeKey = 'CapitalLatitude';

  private static longitudeKey = 'CapitalLongitude';

  private static countryCodeKey = 'CountryCode';

  private static continentKey = 'ContinentName';

  private static capitals: Capital[] = [];

  public static readInCapitals(): void {
    if (this.capitals.length === 0) {
      capitalDataFile.forEach((c:any) => {
        this.capitals.push(new Capital(
          c[this.countryKey],
          c[this.nameKey],
          c[this.latitudeKey],
          c[this.longitudeKey],
          c[this.countryCodeKey],
          c[this.continentKey],
        ));
      });
    }
  }

  public static getCapitals(): Capital[] {
    return this.capitals;
  }

  public static getCapitalByName(name:string): Capital {
    return this.capitals.find((capital) => this.areNamesEqual(capital.name, name)) as Capital;
  }

  private static areNamesEqual(a:string, b:string): boolean {
    return a.toLowerCase() === b.toLowerCase();
  }

  public static exists(name:string): boolean {
    return this.capitals.some(
      (capital) => this.areNamesEqual(capital.name, name),
    );
  }
}

export default AllCapitals;
