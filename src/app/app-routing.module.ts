import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtencionComponent } from './practica/atencion/atencion.component';
import { EditarComponent } from './practica/editar/editar.component';
import { RegistrosComponent } from './practica/regsitros/registros.component';

const routes: Routes = [
    { path: 'atencion-component', component: AtencionComponent},
    { path:'editar-component', component: EditarComponent },
    { path: 'registros-component', component: RegistrosComponent},

  { path: '', redirectTo: 'registros-component', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
