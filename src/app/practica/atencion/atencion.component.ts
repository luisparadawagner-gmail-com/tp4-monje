import { Component, OnInit, ViewChild, ViewChildren, Output,NgModule } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { Atencion } from 'src/app/clases/Atencion';

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
export class AtencionComponent implements OnInit {


  constructor(private fb: FormBuilder) { }


  atencion: Atencion;
  showEditar: boolean = false;
  showAtencion: boolean = true;


  atencionForm = this.fb.group({
    medico: [''],
    paciente: [''],
    edad: [''],
    diagnostico: ['']
  })



  submit(){
   
    debugger;
    this.atencionForm.value;

    this.atencion = this.atencionForm.value;
    this.showEditar=true;
    this.showAtencion=false;

    
  }

  
  ngOnInit() {

 
  }



}
