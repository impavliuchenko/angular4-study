import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  addCar(carNameInput) {
    this.carsService
      .addCar(carNameInput.value, +this.carYearInput.nativeElement.value)
      .subscribe((json) => console.log(json));

    carNameInput.value = '';
    this.carYearInput.nativeElement.value = 0;
  }
}
