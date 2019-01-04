import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { NumberFormaterPipe } from './number/number-formater.pipe';

@NgModule({
  declarations: [
    NumberFormaterPipe
  ],
  imports: [
    AngularCommonModule
  ],
  exports: [
    NumberFormaterPipe
  ]
})
export class AppCommonModule { }
