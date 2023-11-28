import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagadorComponent } from './Component/pagador/pagador.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../Share/angular-material.module";
import { NewPagadorComponent } from './Component/new-pagador/new-pagador.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PagadorComponent,
    NewPagadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagadorModule { }
