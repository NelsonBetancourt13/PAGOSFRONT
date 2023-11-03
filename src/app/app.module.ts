import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DashboardModule} from "./Modules/Main/dashboard.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {DashboardRutasModule} from "./Modules/Main/dashboard-rutas.module";



const rutas : Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/dashboard'}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    RouterModule.forRoot(
      rutas,
      {enableTracing:false, useHash:true}
    ),

    BrowserModule,
    DashboardModule,
    DashboardRutasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
