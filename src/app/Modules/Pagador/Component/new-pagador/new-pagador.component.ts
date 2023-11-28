import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PagadorService} from "../../Services/pagador.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-pagador',
  templateUrl: './new-pagador.component.html',
  styleUrls: ['./new-pagador.component.css']
})
export class NewPagadorComponent implements OnInit{

  public pagoForm !: FormGroup;

  private pagadorService = inject(PagadorService);
  private dialogRef = inject(MatDialogRef);


  constructor(private fb : FormBuilder ) {
    this.pagoForm = this.fb.group({

      trans_codigo: ['', Validators.required],
      trans_medio_pago: ['', Validators.required],
      trans_estado: ['', Validators.required],
      trans_fecha: ['', Validators.required],
      trans_concepto: ['', Validators.required],
      trans_total: ['', Validators.required],

    });

  }

  ngOnInit(): void {

  }

  onSave(){

    let data = {
      trans_codigo: this.pagoForm.get('trans_codigo')?.value,
      trans_medio_pago: this.pagoForm.get('trans_medio_pago')?.value,
      trans_estado: this.pagoForm.get('trans_estado')?.value,
      trans_fecha: this.pagoForm.get('trans_fecha')?.value,
      trans_concepto: this.pagoForm.get('trans_concepto')?.value,
      trans_total: this.pagoForm.get('trans_total')?.value,


    }

    this.pagadorService.savePagos(data)
      .subscribe((data:any) =>{
        console.log(data);
        this.dialogRef.close(1);
      },(error:any) =>{
        this.dialogRef.close(2);
      })
  }

  onCancel(){

  }


}
