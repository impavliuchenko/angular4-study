import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit, OnInit {

  @Input() carItem: {name: string, year: number};
  @ContentChild('carHeading') carHeading: ElementRef;
  currentCar: {name: string, year: number};

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

  ngOnInit() {
    this.currentCar = this.carItem;
  }

  onClick() {
    this.currentCar = this.carItem;
    console.log(this.currentCar);
  }
}
