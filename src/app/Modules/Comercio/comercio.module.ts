import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercioComponent } from './Component/comercio/comercio.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../Share/angular-material.module";



@NgModule({
  declarations: [
    ComercioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ComercioModule { }
