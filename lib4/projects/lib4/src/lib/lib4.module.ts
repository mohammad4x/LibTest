import { NgModule } from '@angular/core';
import { Lib4Component } from './lib4.component';
import { Lib3Module } from 'lib3';



@NgModule({
  declarations: [
    Lib4Component
  ],
  imports: [
    Lib3Module
  ],
  exports: [
    Lib4Component
  ]
})
export class Lib4Module { }
