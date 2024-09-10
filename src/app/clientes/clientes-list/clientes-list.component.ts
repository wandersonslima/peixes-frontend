import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  apiURL: string = environment.apiURLBase + "/api/clientes";

  clientes: Cliente [] = [];
  nome: string;
  message: string;
 
  constructor( 
    private service : ClientesService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ) { 
    
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activeRoute.params;

    params.subscribe( urlParams => {
      this.nome = urlParams['nome'];
      if(this.nome){
        this.service.buscaCliente(this.nome)
        .subscribe( reposnse =>{
          this.clientes = reposnse;
        }
        )
      }else{
        this.service
        .getCliente()
        .subscribe( reposta => {
          this.clientes = reposta;
          console.log(this.clientes);
        }
        );
        
      }
    })
  }

  voltarClientes(){
    this.router.navigate(['/clientes']);
  }

  buscarCliente(){
    console.log(this.nome);
    this.service.buscaCliente(this.nome)
    .subscribe(response => {
      this.clientes = response;
      if( this.clientes.length <= 0){
        this.message = "Cliente não encontrado";
      }else {
        this.message = "Cliente encontrado";
      }
      console.log(this.clientes);
    })
  }
}

