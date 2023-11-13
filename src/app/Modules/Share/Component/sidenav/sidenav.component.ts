import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent {


  menuNav=[
    {name: "", route: "", icon: "home"},
  ]

  menuNav3=[
    {name: "USUARIO COMERCIO", route: "comercio", icon: "supervisor_account"},
  ]

  menuNav4=[
    {name: "USUARIO PAGADOR", route: "pagador", icon: "supervisor_account"},
  ]



}



//menuNav2=[
//  {name: "USUARIOS", route: "user", icon: "group"},
//]

//menuNav3=[
//    {name: "CATEGORIAS", route: "category", icon: "category"},

//]
