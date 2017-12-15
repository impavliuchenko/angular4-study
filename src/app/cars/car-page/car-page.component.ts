import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // not reactive approach
    // this.route.params.subscribe((params) => this.id = +params['id']); // reactive
    console.log(this.id);
    this.carService.getCarById(this.id).subscribe((car: Car) => this.car = car);
  }
}
