import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';



const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: '' , component: HomeComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'clientes-list', component: ClientesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
