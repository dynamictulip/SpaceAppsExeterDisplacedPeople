import {Component, OnInit} from '@angular/core';
import {WittyComparisonService} from '../../service/witty-comparison/witty-comparison.service';
import {CampDataService} from '../../service/camp-data/camp-data.service';
import {Camp} from '../../models/camp';
import {Wibject} from '../../models/wibject';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  witty: Wibject;
  camps: Camp[];
  selectedCamp: Camp;

  constructor(private wittyService: WittyComparisonService,
              private campDataService: CampDataService,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.camps = this.campDataService.getCamps();
    this.campSelected('Dadaab');
  }

  campSelected($event: String) {
    this.selectedCamp = this.campDataService.getCamp($event);
    this.wittyService.getWittyComparison(this.selectedCamp.populationDensity)
      .subscribe((response: Wibject) => this.witty = response);
  }
}
