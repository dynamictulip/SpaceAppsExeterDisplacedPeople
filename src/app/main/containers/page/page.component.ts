import {Component, OnInit} from '@angular/core';
import {WittyComparisonService} from '../../service/witty-comparison/witty-comparison.service';
import {CampDataService} from '../../service/camp-data/camp-data.service';
import {Camp} from '../../models/camp';
import {HttpResponse} from '@angular/common/http';
import {Wibject} from '../../models/wibject';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  witty: Wibject;
  camps: Camp[];

  constructor(private wittyService: WittyComparisonService,
              private campDataService: CampDataService) {
  }

  ngOnInit() {
    this.camps = this.campDataService.getCamps();
  }

  campSelected($event: String) {
    const camp: Camp = this.campDataService.getCamp($event);
    this.wittyService.getWittyComparison(camp.population).subscribe((response: Wibject) => this.witty = response);
  }
}
