import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';


const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsHomeComponent
  },
  {
    path: 'categories',
    component: CategoriesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
