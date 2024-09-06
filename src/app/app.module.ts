import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesService } from './services/clientes.service';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
