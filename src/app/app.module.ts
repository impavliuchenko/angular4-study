import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from './directives/background.directive';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import {CarsService} from './services/cars.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    CarFilterPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
