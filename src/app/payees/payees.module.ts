import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesHomeComponent } from './payees-home/payees-home.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesListComponent } from './payees-list/payees-list.component';

@NgModule({
  declarations: [
    PayeesHomeComponent,
    PayeesManagerComponent,
    PayeesSearchComponent,
    PayeesListComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, PayeesRoutingModule],
  exports: [PayeesHomeComponent],
})
export class PayeesModule {}
