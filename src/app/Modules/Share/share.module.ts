import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "./angular-material.module";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[SidenavComponent]
})
export class ShareModule { }
