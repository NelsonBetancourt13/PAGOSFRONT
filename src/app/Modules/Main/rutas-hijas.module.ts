import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Component/home/home.component";
import {ComercioComponent} from "../Comercio/Component/comercio/comercio.component";
import {PagadorComponent} from "../Pagador/Component/pagador/pagador.component";



const rutasHijas : Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comercio', component: ComercioComponent},
  {path: 'pagador', component: PagadorComponent}



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



// {path: 'category', component: CategoryComponent},
// {path: 'user', component: UserComponent},
