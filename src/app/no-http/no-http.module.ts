import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoHttpRoutingModule } from './no-http-routing.module';
import { NoHttpExampleComponent } from './no-http-example/no-http-example.component';


@NgModule({
  declarations: [NoHttpExampleComponent],
  imports: [
    CommonModule,
    NoHttpRoutingModule
  ]
})
export class NoHttpModule { }
