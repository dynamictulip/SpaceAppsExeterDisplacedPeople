import { Injectable } from '@angular/core';
import {Camp} from '../../models/camp';
import {City} from '../../models/city';

@Injectable({
  providedIn: 'root'
})
export class CampDataService {
  let camp: Camp[];
  constructor(){
    const plymouth: City = new City('Plymouth', 234982);

    this.camp.push(new Camp('Dadaab', 253000, '1991', 'Somalia', plymouth));
    this.camp.push(new Camp('Kakuma', 190000, '1991', 'Somalia', bournmouth));
    this.camp.push(new Camp('Bidibidi', 272000, '1991', 'Somalia', bradford));
    this.camp.push(new Camp('Zaatar', 79000, '1991', 'Somalia', weston));
    this.camp.push(new Camp('Kutupahlong', 970000, '1991', 'Somalia', birmingham));
  }
}
