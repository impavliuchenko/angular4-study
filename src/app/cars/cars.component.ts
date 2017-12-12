import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchCar = '';
  cars = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(
      (cars: Car[]) => this.cars = cars,
      (error: Response) => alert(error)
      );
  }
}
