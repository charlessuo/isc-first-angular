import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesHomeComponent } from './payees-home/payees-home.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';


@NgModule({
  declarations: [PayeesHomeComponent, PayeesManagerComponent],
  imports: [
    CommonModule,
    PayeesRoutingModule
  ],
  exports: [PayeesHomeComponent]
})
export class PayeesModule { }
