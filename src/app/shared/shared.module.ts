import {NgModule} from '@angular/core';
import {CarFilterPipe} from './pipes/car-filter.pipe';
import {BackgroundDirective} from './directives/background.directive';


@NgModule({
  declarations: [
    CarFilterPipe,
    BackgroundDirective
  ],
  exports: [
    CarFilterPipe,
    BackgroundDirective]
})
export class SharedModule {}
