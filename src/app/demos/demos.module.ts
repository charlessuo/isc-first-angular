import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosManagerComponent } from './demos-manager/demos-manager.component';
import { EventButtonComponent } from './event-button/event-button.component';
import { FetchDemoAsyncComponent } from './fetch-demo/fetch-demo-async.component';
import { FetchDemoComponent } from './fetch-demo/fetch-demo.component';

@NgModule({
  declarations: [
    DemoButtonComponent,
    DemosManagerComponent,
    EventButtonComponent,
    FetchDemoAsyncComponent,
    FetchDemoComponent,
  ],
  imports: [CommonModule, HttpClientModule, DemosRoutingModule],
  exports: [DemoButtonComponent],
})
export class DemosModule {}
