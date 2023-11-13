import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagadorComponent } from './Component/pagador/pagador.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../Share/angular-material.module";



@NgModule({
  declarations: [
    PagadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class PagadorModule { }
