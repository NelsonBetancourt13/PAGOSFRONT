import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "./angular-material.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[SidenavComponent]
})
export class ShareModule { }
