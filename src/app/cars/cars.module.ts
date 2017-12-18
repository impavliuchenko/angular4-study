import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsComponent} from './cars.component';
import {CarComponent} from './car/car.component';
import {AddCarComponent} from './add-car/add-car.component';
import {CarPageComponent} from './car-page/car-page.component';
import {CarsService} from '../shared/services/cars.service';
import {CarsRoutingModule} from './cars-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    AddCarComponent,
    CarPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
