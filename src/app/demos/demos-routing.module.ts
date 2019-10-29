import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosManagerComponent } from './demos-manager/demos-manager.component';
import { EventButtonComponent } from './event-button/event-button.component';
import { FetchDemoComponent } from './fetch-demo/fetch-demo.component';
import { FetchDemoAsyncComponent } from './fetch-demo/fetch-demo-async.component';


const routes: Routes = [
  {
    path: 'demos',
    component: DemosManagerComponent,
    children: [
      {
        path: 'event-button',
        component: EventButtonComponent
      },
      {
        path: 'fetch-demo',
        component: FetchDemoComponent
      },
      {
        path: 'fetch-demo-async',
        component: FetchDemoAsyncComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
