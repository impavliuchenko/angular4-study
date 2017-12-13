import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  getCars() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:3000/cars', {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Server error');
      });
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

  getAppTitle() {
    return this.http.get('http://localhost:3000/title')
      .map((response: Response) => response.json())
      .map((data) => data.value);
  }
}
