import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesHomeComponent } from './payees-home/payees-home.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';

const routes: Routes = [
  {
    path: 'payees',
    component: PayeesManagerComponent,
    children: [
      {
        path: 'home',
        component: PayeesHomeComponent
      },
      {
        path: 'search',
        component: PayeesHomeComponent
      },
      {
        path: 'list',
        component: PayeesHomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
