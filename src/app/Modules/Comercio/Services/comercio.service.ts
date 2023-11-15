import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const base_url = "http://localhost:8080/api/Prueba/Consulta";


@Injectable({
  providedIn: 'root'
})
export class ComercioService {


  constructor(private http: HttpClient) { }


  getUsuarioComercio(){

    const endpoint = `${base_url}/Rol_Comercio`;
    return this.http.get(endpoint);

  }}
