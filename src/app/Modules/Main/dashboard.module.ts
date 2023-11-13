import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './Component/home/home.component';
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {ShareModule} from "../Share/share.module";
import {MaterialModule} from "../Share/angular-material.module";
import {ComercioModule} from "../Comercio/comercio.module";
import {PagadorModule} from "../Pagador/pagador.module";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ShareModule,
        NgOptimizedImage,
        MaterialModule,
        ComercioModule,
        PagadorModule
    ]
})



export class DashboardModule { }

// CategoryModule,
// UserModule,
