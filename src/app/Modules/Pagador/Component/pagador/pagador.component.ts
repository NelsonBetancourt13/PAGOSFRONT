import {Component, inject, OnInit} from '@angular/core';
import {PagadorService} from "../../../Share/Services/pagador.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-pagador',
  templateUrl: './pagador.component.html',
  styleUrls: ['./pagador.component.css']
})


export class PagadorComponent implements OnInit{


constructor(private pagadorService: PagadorService) {
}


  ngOnInit(): void {
    this.getUsuarioPagador();
  }


displayedColumns: string[] = ["id","usuario_nombre", "usuario_identificacion",
  "usuario_gmail","rol_p", "trans_codigo", "trans_medio_pago",
  "trans_estado", "trans_total", "trans_fecha", "trans_concepto", "actions" ];
dataSource = new MatTableDataSource<PagadorElement>();

  getUsuarioPagador(){

    this.pagadorService.getUsuarioPagador()
      .subscribe(data => {
        console.log("respuesta usuario ", data);
        this.processPagadorResponse(data);
    }, error =>{

        console.log(" Error ", error);
      })

  }


  processPagadorResponse(resp:any){

    const dataPagador: PagadorElement[] = [];

    let listPagador = resp;

    listPagador.forEach((element:PagadorElement) =>{
      element.rol_p = element.rol_p.name;
      element.trans_total = element.rol_p.id;
      dataPagador.push(element);
    this.dataSource = new MatTableDataSource<PagadorElement>(dataPagador);




    });
  }


}

export interface PagadorElement{
  id:number;
  usuario_nombre: string;
  usuario_identificacion: string;
  usuario_gmail: string;
  rol_p: any;
  trans_codigo: any;
  trans_medio_pago: any;
  trans_estado: any;
  trans_total: any;
  trans_fecha: any;
  trans_concepto: any;


}
