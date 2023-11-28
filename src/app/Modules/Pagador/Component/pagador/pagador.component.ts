import {Component, inject, OnInit} from '@angular/core';
import {PagadorService} from "../../Services/pagador.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {NewPagadorComponent} from "../new-pagador/new-pagador.component";
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-pagador',
  templateUrl: './pagador.component.html',
  styleUrls: ['./pagador.component.css']
})


export class PagadorComponent implements OnInit{

  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

constructor(private pagadorService: PagadorService) {

}


  ngOnInit(): void {
    this.getUsuarioPagador();
    this.getUsuarioComercio();
  }


displayedColumns: string[] = ["id","trans_codigo", "trans_medio_pago",
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

    listPagador[0].pagos.forEach((element:PagadorElement) =>{
      dataPagador.push(element);
      //console.log(element.comercio);

    });
    this.dataSource = new MatTableDataSource<PagadorElement>(dataPagador);

  }

  //********* CONSUMIMOS EL SERVICIO DE GET COMERCIO *************///

  displayedColumns1: string[] = ["id","comercio_codigo","comercio_nombre",
    "comercio_direccion", "comercio_nit" , "actions" ];
  dataSource1 = new MatTableDataSource<ComercioElement>();



  getUsuarioComercio(){

    this.pagadorService.getUsuarioComercio()
      .subscribe(data => {
        console.log("respuesta usuario ", data);
        this.processComercioResponse(data);


      }, error =>{

        console.log(" Error ", error);
      })

  }

  processComercioResponse(resp:any){

    const dataComercio: ComercioElement[] = [];
    let listComercio = resp;

    listComercio.forEach((element:ComercioElement) =>{
      dataComercio.push(element);

    });
    this.dataSource1 = new MatTableDataSource<ComercioElement>(dataComercio);

  }


  openCategoryDialog(){
    const dialogRef = this.dialog.open(NewPagadorComponent, {
      width: '450px',

    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result == 1){
        this.openSnackBar(" Pago Agregado","Exitoso");
        this.getUsuarioPagador();
      }else if (result == 2){
        this.openSnackBar("Se Produjo un error","Intente Nuevamente");
      }
    });
  }

  openSnackBar(message: string, action: string):MatSnackBarRef<SimpleSnackBar>{

    return this.snackBar.open(message,action, {
      duration: 2000
    })

  }

}

export interface PagadorElement{

  id: number;
  trans_codigo: number;
  trans_concepto: string;
  trans_estado: number;
  trans_fecha: string;
  trans_medio_pago: number;
  trans_total: number;
  comercio: any;


}


export interface ComercioElement {

  id: number;
  comercio_codigo: number;
  comercio_nombre: string;
  comercio_nit: string;
  comercio_direccion: string;

}
