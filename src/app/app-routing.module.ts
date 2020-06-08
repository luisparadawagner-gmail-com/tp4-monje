import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './practica/atencion/atencion.component';
import { BComponent } from './practica/editar/editar.component';
import { CComponent } from './practica/regsitros/registros.component';

const routes: Routes = [
    { 
      path: 'a-component', 
      component: AComponent,
      children: [
        {
          path:'b-component',
          component: BComponent,
          
        }
      ]
    },
    {path: 'c-component', component: CComponent}

  //{ path: '', redirectTo: 'a-component', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
