import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directives/background.directive';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarsService } from './services/cars.service';
import { FormComponent } from './form-template-driven/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CarPageComponent } from './cars/car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    CarFilterPipe,
    FormComponent,
    FormReactiveComponent,
    CarPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CarsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
