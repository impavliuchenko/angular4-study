import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit, OnInit {

  @Input() carItem: {name: string, year: number, isSold: boolean};
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
}
