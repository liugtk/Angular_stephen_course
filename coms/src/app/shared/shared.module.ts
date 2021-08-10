import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerWithHeaderComponent } from './divider-with-header/divider-with-header.component';



@NgModule({
  declarations: [
    DividerWithHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerWithHeaderComponent
  ]
})
export class SharedModule { }
