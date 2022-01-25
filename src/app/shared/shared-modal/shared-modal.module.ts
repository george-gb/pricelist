import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from './shared-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SharedModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SharedModalComponent
  ]
})
export class SharedModalModule { }
