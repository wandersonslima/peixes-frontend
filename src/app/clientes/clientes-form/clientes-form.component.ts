import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  nome: string;
  endereco: string;
  telefone: string;
  cliente: Cliente;

  constructor(
    private service: ClientesService
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  salvarCliente() {
    this.service.salvarCliente(this.cliente)
    .subscribe( response => {
      this.cliente = response;
      console.log(this.cliente);
    })
  }
}
