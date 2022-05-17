class Capital {
  readonly name: string;

  readonly country: string;

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
    this.country = CountryCode;
    this.longitude = parseInt(String(CapitalLongitude), 10);
    this.latitude = parseInt(String(CapitalLatitude), 10);
    this.continent = ContinentName;
  }

  public hasName(name:string): boolean {
    return this.name.toLowerCase() === name.toLowerCase();
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
