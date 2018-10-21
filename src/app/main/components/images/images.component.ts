import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input() image1Url: String;
  @Input() image2Url: String;

  @Input() image1Caption: String;
  @Input() image2Caption: String;

  constructor() { }

  ngOnInit() {
  }

}
