import {Component, OnInit} from '@angular/core';
import {ComercioService} from "../../Services/comercio.service";
import {MatTableDataSource} from "@angular/material/table";




@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})



export class ComercioComponent  implements OnInit{

  constructor(private comercioService : ComercioService) {
  }

  ngOnInit(): void {

    this.getUsuarioComercio();

  }


  displayedColumns: string[] = ["comercio_nombre","id","trans_codigo", "trans_medio_pago",
    "trans_estado", "trans_total", "trans_fecha", "trans_concepto","actions" ];
  dataSource = new MatTableDataSource<ComercioElement>();


  getUsuarioComercio(){

    this.comercioService.getUsuarioComercio()
      .subscribe(data => {
        console.log("respuesta usuario ", data);
        this.processComercioRespuesta(data);


      }, error =>{

        console.log(" Error ", error);
      })

  }

  processComercioRespuesta(resp:any){

    const dataComercio: ComercioElement[] = [];
    let listComercio = resp;

    listComercio[0].pagos.forEach((element:ComercioElement) =>{
      dataComercio.push(element);
      //console.log(element.comercio);

    });

    this.dataSource = new MatTableDataSource<ComercioElement>(dataComercio);


  }






}




export interface ComercioElement {

  id: number;
  trans_codigo: number;
  trans_concepto: string;
  trans_estado: number;
  trans_fecha: string;
  trans_medio_pago: number;
  trans_total: number;
  comercio: any;

}
