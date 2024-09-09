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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ClientesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ClientesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
