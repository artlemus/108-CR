import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  fahrenheit = 0.0;
  celsius = 0.0;

  constructor() { }

  ngOnInit() {
  }

  convertToC() {
    // (100°F − 32) × 5/9 = 37.778°C
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
  convertToF() {
    //(40°C × 9/5) + 32 = 104°F
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }

}
