import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesHomeComponent } from './payees-home/payees-home.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesListComponent } from './payees-list/payees-list.component';

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
        component: PayeesSearchComponent
      },
      {
        path: 'list',
        component: PayeesListComponent
      },
      {
        path: 'detail/:id',
        component: PayeesListComponent
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
