import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 1996
    }, {
    name: 'BMW',
    year: 2005
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
