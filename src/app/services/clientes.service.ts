import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient) { }

  getCliente() : Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClienteById(id: number) : Observable<Cliente> {
    let params = new HttpParams().set("id", id.toString())
    let url = this.apiURL + "/" + params;
    console.log(url)
    return this.http.get<any>(`${this.apiURL}/${id}`);

  }

  buscaCliente(nome: string) : Observable<Cliente[]>{
    const httpParams = new HttpParams().set("nome",nome);

    const url = this.apiURL + "/nome?" + httpParams.toString();

    //console.log(url);

    return this.http.get<any>(url);
  }

  buscaClienteParam(nome: string): Observable<Cliente[]>{
    const httpParams = new HttpParams().set("nome",nome);

    const url = this.apiURL + "/nome?" + httpParams.toString();

    //console.log(url);

    return this.http.get<any>(url);

  }

  salvarCliente( cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.apiURL, cliente);
  }

  atualizarCliente( cliente: Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletarCliente(id: number) : Observable<Cliente>{
    let params = new HttpParams().set("id", id.toString())
    let url = this.apiURL + "/" + params;
    console.log(url)
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }

}
