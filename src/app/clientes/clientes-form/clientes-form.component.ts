import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  formulario: FormGroup;
  nome: string;
  endereco: string;
  telefone: string;
  cliente: Cliente;
  id: number;

  constructor(
    private service: ClientesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  ngOnInit(): void {

   let params: Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];

      if(this.id){
        this.service
        .getClienteById(this.id)
        .subscribe(
          response => {
            this.cliente = response;
            console.log(this.cliente);}
          ,errorResponse => this.cliente = new Cliente()
        )
        console.log(this.cliente);
        console.log("Id: ", this.id);
      }else{
        console.log("Não veio id");
      }
    })

  }

  voltarClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit() {

    if(this.id){
      this.service
      .atualizarCliente(this.cliente)
      .subscribe(response => {
        console.log("Atualizado!")
        let t = response;
        console.log(response);
        console.log(this.cliente);
      }), console.log("Erro ao atualizar");
    }else{
      if (!this.formulario.valid) {
        console.log("Formulário Inválido!!");
        return;
      } else {
        this.cliente = this.formulario.value;
        console.log(this.cliente)
        this.service.salvarCliente(this.cliente)
          .subscribe(response => {
            this.cliente = response;
            console.log(this.cliente);
          })
      }
      console.log("Form válido!!");
      this.formulario.reset();
    }

  }
}
