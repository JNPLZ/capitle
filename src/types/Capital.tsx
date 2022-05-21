class Capital {
  readonly name: string;

  readonly countryName: string;

  readonly countryCode: string;

  readonly longitude: number;

  readonly latitude: number;

  readonly continent: string;

  constructor(
    CountryName:string,
    CapitalName:string,
    CapitalLatitude:number,
    CapitalLongitude:number,
    CountryCode:string,
    ContinentName:string,
  ) {
    this.name = CapitalName;
    this.countryCode = CountryCode;
    this.countryName = CountryName;
    this.longitude = parseInt(String(CapitalLongitude), 10);
    this.latitude = parseInt(String(CapitalLatitude), 10);
    this.continent = ContinentName;
  }

  public hasName(name:string): boolean {
    return this.name.toLowerCase() === name.toLowerCase();
  }

  public wikipediaLink(): string {
    const wikipediaBaseUrl = 'https://en.wikipedia.org/wiki/';
    let urlNamePath;
    switch (this.name) {
      case 'Kingston':
        urlNamePath = 'Kingston,_Jamaica';
        break;
      case 'Luxembourg':
        urlNamePath = 'Luxembourg_City';
        break;
      case 'Male':
        urlNamePath = 'Mal%C3%A9';
        break;
      case 'Saint John\'s':
        urlNamePath = 'St._John\'s,_Antigua_and_Barbuda';
        break;
      case 'Saint George\'s':
        urlNamePath = 'St._George%27s,_Grenada';
        break;
      default:
        urlNamePath = this.name.replace(/ /g, '_');
    }
    return `${wikipediaBaseUrl}${urlNamePath}`;
  }

  private static deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  public distanceInKilometers(capital:Capital): number {
    const EARTH_RADIUS = 6371; // Radius of the earth in km
    const dLat = Capital.deg2rad(capital.latitude - this.latitude);
    const dLon = Capital.deg2rad(capital.longitude - this.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(Capital.deg2rad(this.latitude)) * Math.cos(Capital.deg2rad(capital.latitude))
        * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c; // Distance in km
  }
}

export default Capital;
