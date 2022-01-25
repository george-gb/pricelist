import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListEditComponent } from './price-list-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PriceListEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PriceListEditComponent
  ]
})
export class PriceListEditModule { }
