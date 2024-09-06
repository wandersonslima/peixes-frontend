import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  clientesLista(){
    this.router.navigate(['/clientes-list']);
  }

}
