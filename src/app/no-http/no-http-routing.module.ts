import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoHttpExampleComponent } from './no-http-example/no-http-example.component';


const routes: Routes = [
  {
    path: 'no-http',
    component: NoHttpExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoHttpRoutingModule { }
