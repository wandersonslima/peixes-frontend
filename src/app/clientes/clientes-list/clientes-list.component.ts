import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  clienteDel: any;
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
    //console.log(this.nome);
    this.service.buscaCliente(this.nome)
    .subscribe(response => {
      this.clientes = response;
      console.log(this.clientes.length);
      if( this.clientes.length <= 0){
        this.message = "Cliente não encontrado";
        console.log(this.message);
      }else {
        this.message = "Cliente encontrado";
        console.log(this.message);
        console.log(response);
      }
      //console.log(this.clientes);
    }, erros => {
      console.log(erros);
      console.log("erros buscarClientes");
      console.log(erros.error);
    })
  }

  // Função para abrir o modal de confirmação
  abrirModalExcluir(cliente: any) {
    this.clienteDel = cliente;
    const modalElement = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modalElement.show();
  }
  
  // Função para confirmar exclusão
  confirmarExclusao() {
    console.log("Cliente excluído: ", this.clienteDel.nome);
    this.service
    .deletarCliente(this.clienteDel.id)
    .subscribe( response => {
      console.log(response);
      console.log("subscribe");
    }, 
    erros =>{
      this.ngOnInit();
      console.log(erros);
      console.log(erros.error.text);
      this.mostrarToast();
    })
  }
  
  mostrarToast() {
    const toast = document.getElementById('successToast');
    if (toast) {
      const bootstrapToast = new bootstrap.Toast(toast, {
        autohide: true,
        delay: 3000
      });
      bootstrapToast.show();
    }
  }
}

