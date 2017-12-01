import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchCar = '';

  cars: [{name: string, year: number, isSold: boolean}] = [{
    name: 'Ford',
    year: 1996,
    isSold: true
    }, {
    name: 'BMW',
    year: 2005,
    isSold: false
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  updateCarList(car: {name: string, year: number, isSold: boolean}) {
    this.cars.push(car);
  }
}
