import {City} from './city';

export class Camp {
  private name: String;
  private population: number;
  private startDate: string;
  private fleeing: string;
  private equivalentCity: City;

  constructor(name: String, population: number, startDate: string, fleeing: string, equivalentCity: City) {
    this.name = name;
    this.population = population;
    this.startDate = startDate;
    this.fleeing = fleeing;
    this.equivalentCity = equivalentCity;
  }
}
