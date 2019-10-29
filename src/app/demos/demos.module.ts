import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosManagerComponent } from './demos-manager/demos-manager.component';
import { EventButtonComponent } from './event-button/event-button.component';


@NgModule({
  declarations: [
    DemoButtonComponent,
    DemosManagerComponent,
    EventButtonComponent,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ],
  exports: [
    DemoButtonComponent
  ]
})
export class DemosModule { }
