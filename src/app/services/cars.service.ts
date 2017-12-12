import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';

@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  getCars() {
    return this.http.get('http://localhost:3000/cars')
      .map((response: Response) => response.json());
  }

  addCar(carName: string, carYear: number) {
    const data = {
      name: carName,
      year: carYear,
      isSold: false
    };
    return this.http.post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }

  changeYear(car: Car, year: number) {
    car.year = year;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => response.json());
  }

  deleteCar(car: Car) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => response.json());
  }
}
