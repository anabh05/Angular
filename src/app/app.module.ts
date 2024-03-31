import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PaginaProductosComponent } from './components/pagina-productos/pagina-productos.component';
import { PaginaGestionComponent } from './components/pagina-gestion/pagina-gestion.component';
import { ComponenteProductoComponent } from './components/componente-producto/componente-producto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaInicioComponent,
    PaginaProductosComponent,
    PaginaGestionComponent,
    ComponenteProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Modulo de enrutamiento
    FormsModule, // Agrega FormsModule a los imports del módulo principal
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
