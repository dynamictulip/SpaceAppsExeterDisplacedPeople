import {City} from './city';

export class Camp {
  private _name: String;
  private _population: number;
  private _populationDensity: number;
  private _startDate: string;
  private _fleeing: string;
  private _backgroundImageUrl: string;
  private _radarImageUrl: string;
  private _nightSkyImage: string;
  private _equivalentCity: City;

  constructor(name: String, population: number, populationDensity: number, startDate: string, fleeing: string, backgroundImageUrl: string, radarImageUrl: string, nightSkyImage: string, equivalentCity: City) {
    this._name = name;
    this._population = population;
    this._populationDensity = populationDensity;
    this._startDate = startDate;
    this._fleeing = fleeing;
    this._backgroundImageUrl = backgroundImageUrl;
    this._equivalentCity = equivalentCity;
    this._radarImageUrl = radarImageUrl;
    this._nightSkyImage = nightSkyImage;
  }

  get name(): String {
    return this._name;
  }

  get populationDensity(): number {
    return this._populationDensity;
  }

  get startDate(): string {
    return this._startDate;
  }

  get fleeing(): string {
    return this._fleeing;
  }

  get population(): number {
    return this._population;
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

  get nightSkyImage(): string {
    return this._nightSkyImage;
  }
}
