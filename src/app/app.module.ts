import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { PayeesModule } from './payees/payees.module';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DemoButtonComponent,
    TransactionsHomeComponent,
    CategoriesHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PayeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
