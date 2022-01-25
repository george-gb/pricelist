import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListEditModule } from './price-list-edit/price-list-edit.module';
import { SharedModalComponent } from './shared-modal/shared-modal.component';
import { SharedModalModule } from './shared-modal/shared-modal.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PriceListEditModule,
    SharedModalModule
  ],
  exports:[
    PriceListEditModule,
    SharedModalModule
  ]
})
export class SharedModule { }
