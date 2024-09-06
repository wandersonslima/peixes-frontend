import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  nome: string;

  constructor( 
    private router: Router,
    private service: ClientesService,
    ) { }

  ngOnInit(): void {
  }

  clientesLista(){
    this.router.navigate(['/clientes-list']);
  }

  buscarCliente(){
    console.log(this.nome);
    this.router.navigate([`/clientes-list/nome`, this.nome])
  }

}
