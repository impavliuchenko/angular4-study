import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {CarPageComponent} from './cars/car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './shared/services/auth-guard.service';


const appRoutes: Routes = [
  {path: 'cars', component: CarsComponent, canActivate: [AuthGuardService] , children: [
    {path: ':id', component: CarPageComponent}
  ]},
  {path: '', component: FormReactiveComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
