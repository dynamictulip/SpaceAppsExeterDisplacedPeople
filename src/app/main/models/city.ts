export class City {
  private _name: String;
  private _population: number;
  private _

  constructor(name: String, population: number) {
    this._name = name;
    this._population = population;
  }

  get name(): String {
    return this._name;
  }

  get population(): number {
    return this._population;
  }
}
