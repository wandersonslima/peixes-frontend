import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  apiURL: string = environment.apiURLBase + "/api/clientes";

  clientes: Cliente [] = [];
 
  constructor( private service : ClientesService) { 
    
  }

  ngOnInit(): void {
    this.service
    .getCliente()
    .subscribe( reposta => this.clientes = reposta);
  }

}
