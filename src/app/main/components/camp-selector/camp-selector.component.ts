import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Camp} from '../../models/camp';

@Component({
  selector: 'app-camp-selector',
  templateUrl: './camp-selector.component.html',
  styleUrls: ['./camp-selector.component.css']
})
export class CampSelectorComponent implements OnInit {
  @Input() camps: Camp;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitSelected($event) {
    console.log('Selectro emit');
    this.selected.emit($event);
  }
}
