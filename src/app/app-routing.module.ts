import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {CarPageComponent} from './cars/car-page/car-page.component';


const appRoutes: Routes = [
  {path: 'cars', component: CarsComponent, children: [
    {path: ':id', component: CarPageComponent}
  ]},
  {path: '', component: FormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
