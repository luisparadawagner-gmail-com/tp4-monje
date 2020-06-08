import { Component, OnInit, ViewChild, ViewChildren, Output,NgModule } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { BComponent } from '../editar/editar.component';

// export interface atencion{
//   medico: string,
//   paciente: string,
//   edad: number,
//   diagnostico: string,
// }

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AComponent implements OnInit {

  @ViewChild(BComponent, {static: false}) private viewChildHijo: BComponent;

  constructor(private fb: FormBuilder) { }

  medico: string; 
  paciente: string;
  edad: number;
  diagnostico: string;

  ngOnInit() {

    this.medico = this.atencion.get('medico').value;

  }

  atencion = this.fb.group({
    medico: [''],
    paciente: [''],
    edad: [''],
    diagnostico: ['']
  })



  submit(){

    // this.viewChildHijo.editarValores(this.medico, this.paciente, this.edad, this.diagnostico);
    
    debugger;
    this.atencion.value;

   
		// this.atencion.setValue({
    //   medico: 'nico',
    //   paciente: 'alexis',
    //   edad: 19,
    //   diagnostico: 'dolor de panza'
    // });
    
  }




}
