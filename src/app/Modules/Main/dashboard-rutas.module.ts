import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./Page/dashboard/dashboard.component";


const rutas : Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./rutas-hijas.module').then(m => m.RutasHijasModule)

  }

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ],
})
export class DashboardRutasModule { }
