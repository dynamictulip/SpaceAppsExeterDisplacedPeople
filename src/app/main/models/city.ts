export class City {
  private _name: String;
  private _population: number;
  private _radarImageUrl: String;

  constructor(name: String, population: number, radarImageUrl: String) {
    this._name = name;
    this._population = population;
    this._radarImageUrl = radarImageUrl;
  }

  get name(): String {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get radarImageUrl(): String {
    return this._radarImageUrl;
  }
}
