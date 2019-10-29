import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PayeesModule } from './payees/payees.module';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { DemosModule } from './demos/demos.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TransactionsHomeComponent,
    CategoriesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PayeesModule,
    DemosModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
