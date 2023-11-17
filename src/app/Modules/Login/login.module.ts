import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import {MaterialModule} from "../Share/angular-material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage
    ]
})
export class LoginModule { }
