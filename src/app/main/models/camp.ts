import {City} from './city';

export class Camp {
  private _name: String;
  private _population: number;
  private _startDate: string;
  private _fleeing: string;
  private _backgroundImageUrl: string;
  private _radarImageUrl: string;
  private _equivalentCity: City;

  constructor(name: String, population: number, startDate: string, fleeing: string, backgroundImageUrl: string, radarImageUrl: string, equivalentCity: City) {
    this._name = name;
    this._population = population;
    this._startDate = startDate;
    this._fleeing = fleeing;
    this._backgroundImageUrl = backgroundImageUrl;
    this._equivalentCity = equivalentCity;
    this._radarImageUrl = radarImageUrl;
  }

  get name(): String {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get startDate(): string {
    return this._startDate;
  }

  get fleeing(): string {
    return this._fleeing;
  }

  get backgroundImageUrl(): string {
    return this._backgroundImageUrl;
  }

  get equivalentCity(): City {
    return this._equivalentCity;
  }

  get radarImageUrl(): string {
    return this._radarImageUrl;
  }
}
