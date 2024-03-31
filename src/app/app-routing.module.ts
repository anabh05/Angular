import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaGestionComponent } from './components/pagina-gestion/pagina-gestion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PaginaProductosComponent } from './components/pagina-productos/pagina-productos.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent}, //  poner en orden para que salga primero home
  { path: 'gestion', component: PaginaGestionComponent},
  { path: 'producto', component: PaginaProductosComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
