import { NgModule } from '@angular/core';
import { Lib3Component } from './lib3.component';
import { Lib1Module } from 'lib1';
import { Lib2Module } from 'lib2';


@NgModule({
  declarations: [
    Lib3Component
  ],
  imports: [
    Lib1Module, Lib2Module
  ],
  exports: [
    Lib1Module,
    Lib2Module,
    Lib3Component
  ]
})
export class Lib3Module { }
