import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosRegistro } from '../models/DadosRegistro';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applivation/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'api/Usuarios';
  constructor(private http: HttpClient) { }

  SalvarFoto(formData: any): Observable<any> {
    const apiUrl = `{this.url}/SalvarFoto`;
    return this.http.post<any>(apiUrl, formData);
  }

  RegistrarUsuario(dadosRegistro: DadosRegistro): Observable<any> {
    const apiUrl = `${this.url}/RegistrarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosRegistro);
  }
}
