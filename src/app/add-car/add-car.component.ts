import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output() addCarAction = new EventEmitter<{name: string, year: number, isSold: boolean}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl) {
    this.addCarAction.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value,
      isSold: false
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 0;
  }
}
