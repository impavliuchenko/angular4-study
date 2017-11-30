import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, search: string, fieldName: string) {
    if (carList === 0 || search === '') {
      return carList;
    }
    return carList.filter(car => car[fieldName].toString().toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}
