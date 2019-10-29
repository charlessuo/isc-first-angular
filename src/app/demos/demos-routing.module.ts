import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosManagerComponent } from './demos-manager/demos-manager.component';
import { EventButtonComponent } from './event-button/event-button.component';


const routes: Routes = [
  {
    path: 'demos',
    component: DemosManagerComponent,
    children: [
      {
        path: 'event-button',
        component: EventButtonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
