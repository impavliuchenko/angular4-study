import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchCar = '';
  cars = [];
  appTitle;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
    this.carsService.getCars().subscribe(
      (cars: Car[]) => this.cars = cars,
      (error: Response) => alert(error)
      );
  }
}
