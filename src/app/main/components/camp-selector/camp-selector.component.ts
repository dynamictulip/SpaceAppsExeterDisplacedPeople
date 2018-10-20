import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './camp-selector.component.html',
  styleUrls: ['./camp-selector.component.css']
})
export class CampSelectorComponent implements OnInit {

  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitSelected(event$) {
    this.valueChanged.emit(event$);
  }
}
