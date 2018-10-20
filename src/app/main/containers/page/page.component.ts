import { Component, OnInit } from '@angular/core';
import {WittyComparisonService} from '../../service/witty-comparison/witty-comparison.service';
import {CampDataService} from '../../service/camp-data/camp-data.service';
import {Camp} from '../../models/camp';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  witty: String = '';

  constructor(private wittyService: WittyComparisonService,
              private campDataService: CampDataService) { }

  ngOnInit() {
  }

  campSelected($event) {
    const camp: Camp = this.campDataService.getCamp($event.name);
    this.wittyService.getWittyComparison(camp.population).subscribe((response: String) => this.witty = response);
  }
}
