import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./Page/dashboard/dashboard.component";
import {HomeComponent} from "./Component/home/home.component";



const rutasHijas : Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutasHijas)
  ],
  exports:[
    RouterModule
  ]
})
export class RutasHijasModule { }
