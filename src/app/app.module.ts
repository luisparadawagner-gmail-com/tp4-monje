import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


import { FormularioComponent } from './angular-material/formulario/formulario.component';
import { PadreComponent } from './comunicacion/padre-hijo/padre/padre.component';
import { HijoComponent } from './comunicacion/padre-hijo/hijo/hijo.component';


//directivas
import { AppColorDirective } from './angular-material/directivas/color.directive';
import { AppNumeroDirective } from './angular-material/directivas/numero.directive';
//pipe
import { CaracteresRarosPipe } from './angular-material/pipes/caracteres-raros.pipe';
import { AComponent } from './practica/atencion/atencion.component';
import { BComponent } from './practica/editar/editar.component';
import { CComponent } from './practica/regsitros/registros.component';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AppColorDirective,
    AppNumeroDirective,
    CaracteresRarosPipe,
    PadreComponent,
    HijoComponent,
    AComponent,
    BComponent,
    CComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
		MatInputModule,
		MatButtonModule,
    BrowserAnimationsModule,
		MatCardModule,
		MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
