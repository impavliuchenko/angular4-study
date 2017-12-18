import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {NotFoundComponent} from './not-found/not-found.component';


const appRoutes: Routes = [
  {path: '', component: FormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
