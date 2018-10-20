import { Component, OnInit } from '@angular/core';
import {WittyComparisonService} from '../../service/witty-comparison/witty-comparison.service';
import {CampDataService} from '../../service/camp-data/camp-data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private wittyService: WittyComparisonService,
              private campDataService: CampDataService) { }

  ngOnInit() {
  }

  campSelected() {
    this.campDataService.getCampInfo();
    this.wittyService.getWittyComparison();
  }
}
