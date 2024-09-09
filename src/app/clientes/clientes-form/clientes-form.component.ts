import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(
    private service: ClientesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.cliente = new Cliente();
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  voltarClientes(){
    this.router.navigate(['/clientes']);
  }

  salvarCliente() {

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
