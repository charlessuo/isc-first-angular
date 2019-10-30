import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleSearchFieldComponent } from './single-search-field/single-search-field.component';

@NgModule({
  declarations: [SingleSearchFieldComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SingleSearchFieldComponent]
})
export class SharedModule { }
