import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { RegistrarContactoComponent } from './registrar-contacto/registrar-contacto.component';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';

const routes: Routes = [
  {path : 'contactos', component:ListaContactosComponent},
  {path : '', redirectTo: 'contactos', pathMatch:'full'},
  {path : 'registrar-contacto', component: RegistrarContactoComponent},
  {path : 'actualizar-contacto/:id', component : ActualizarContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
