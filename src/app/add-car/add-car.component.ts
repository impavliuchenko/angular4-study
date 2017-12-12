import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {CarsComponent} from "../cars/cars.component";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor(private carsService: CarsService, private cars: CarsComponent) { }

  ngOnInit() {
  }

  addCar(carNameInput) {
    this.carsService
      .addCar(carNameInput.value, +this.carYearInput.nativeElement.value)
      .subscribe((data) => this.cars.cars.push(data));

    carNameInput.value = '';
    this.carYearInput.nativeElement.value = 0;
  }
}
