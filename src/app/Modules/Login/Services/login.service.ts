import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const base_url = "http://localhost:8080/api/Prueba/persona";




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }





}
