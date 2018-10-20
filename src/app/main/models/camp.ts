import {City} from './city';

export class Camp {
  private _name: String;
  private _population: number;
  private _startDate: string;
  private _fleeing: string;
  private _imageUrl: string;
  private _equivalentCity: City;

  constructor(name: String, population: number, startDate: string, fleeing: string, imageUrl: string, equivalentCity: City) {
    this._name = name;
    this._population = population;
    this._startDate = startDate;
    this._fleeing = fleeing;
    this._imageUrl = imageUrl;
    this._equivalentCity = equivalentCity;
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

  get imageUrl(): string {
    return this._imageUrl;
  }

  get equivalentCity(): City {
    return this._equivalentCity;
  }
}
