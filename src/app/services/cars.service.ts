import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {

  cars: [{name: string, year: number, isSold: boolean}] = [{
    name: 'Ford',
    year: 1996,
    isSold: true
  }, {
    name: 'BMW',
    year: 2005,
    isSold: false
  }
  ];

  addCar(carName: string, carYear: number) {
    this.cars.push({
      name: carName,
      year: carYear,
      isSold: false
    });
  }
}
