import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {CarsComponent} from '../cars/cars.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit, OnInit {

  constructor(private carService: CarsService, private cars: CarsComponent) { }

  @Input() carItem: Car;
  @ContentChild('carHeading') carHeading: ElementRef;

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

  ngOnInit() {
  }

  getClass() {
    return {
      'list-group-item-success': !this.carItem.isSold,
      'list-group-item-danger': this.carItem.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.carItem.isSold = type === 'buy' ? true : false;
  }

  randomYear() {
    return Math.floor(Math.random() * 2017);
  }

  changeYear(car: Car) {
    this.carService.changeYear(car, this.randomYear())
      .subscribe();
  }

  deleteCar(car: Car) {
    this.carService.deleteCar(car)
      .subscribe((data) => {
        this.cars.cars = this.cars.cars.filter(c => c.id !== car.id);
      });
  }
}
