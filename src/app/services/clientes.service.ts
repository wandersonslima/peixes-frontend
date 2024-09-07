import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient) { }

  getCliente() : Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  buscaCliente(nome: string) : Observable<Cliente[]>{
    const httpParams = new HttpParams().set("nome",nome);

    const url = this.apiURL + "/nome?" + httpParams.toString();

    console.log(url);

    return this.http.get<any>(url);
  }

  buscaClienteParam(nome: string): Observable<Cliente[]>{
    const httpParams = new HttpParams().set("nome",nome);

    const url = this.apiURL + "/nome?" + httpParams.toString();

    console.log(url);

    return this.http.get<any>(url);

  }

  salvarCliente( cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.apiURL, cliente);
  }

}
