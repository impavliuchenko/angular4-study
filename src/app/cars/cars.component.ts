import { Component, OnInit } from '@angular/core';
import {CarsService} from '../shared/services/cars.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchCar = '';
  cars = [];
  appTitle;

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
    this.carsService.getCars().subscribe(
      (cars: Car[]) => this.cars = cars,
      (error: Response) => alert(error)
      );

  }

  toLogin() {
    this.router.navigate(['/']); // absolute route
    // this.router.navigate(['car'], {relativeTo: this.route}); // example of relative route
  }
}
