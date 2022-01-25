import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import { PriceListRoutingModule } from './price-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PriceListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PriceListRoutingModule,
    SharedModule
  ]
})
export class PriceListModule { }
