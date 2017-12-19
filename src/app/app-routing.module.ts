import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {AuthGuardService} from './shared/services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: FormReactiveComponent},
  {path: 'cars', loadChildren: './cars/cars.module#CarsModule', canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
