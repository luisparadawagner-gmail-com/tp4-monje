import { Component, OnInit, ViewChild, ViewChildren, Output,NgModule } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { BComponent } from './../b/b.component';

// export interface atencion{
//   medico: string,
//   paciente: string,
//   edad: number,
//   diagnostico: string,
// }

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  @ViewChild(BComponent, {static: false}) private viewChildHijo: BComponent;

  constructor(private fb: FormBuilder) { }

  medico: string; 
  paciente: string;
  edad: number;
  diagnostico: string;

  atencion = this.fb.group({
    medico: [''],
    paciente: [''],
    edad: [''],
    diagnostico: ['']
  })


  submit(){

    debugger;
    this.atencion.value;

    
		// this.atencion.setValue({
    //   medico: 'nico',
    //   paciente: 'alexis',
    //   edad: 19,
    //   diagnostico: 'dolor de panza'
    // });
    
  }

  ngOnInit() {
  }


  


}
