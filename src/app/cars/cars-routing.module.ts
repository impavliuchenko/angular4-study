import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './cars.component';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {CarPageComponent} from './car-page/car-page.component';


const carsRoutes: Routes = [
  {path: 'cars', component: CarsComponent, canActivate: [AuthGuardService] , children: [
      {path: ':id', component: CarPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
