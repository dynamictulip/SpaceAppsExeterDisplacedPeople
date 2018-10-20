import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WittyComparisonService {
  apiUrl = 'http://populationdensitycomparator.azurewebsites.net/api/PopulationDensityHttpTrigger?density=';

  constructor(private http: HttpClient) { }

  getWittyComparison(density: number) {
    return this.http.get(this.apiUrl + density);
  }
}
