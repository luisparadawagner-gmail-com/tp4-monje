import { Component, OnInit, ViewChild, ViewChildren, Output,NgModule } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { Atencion } from 'src/app/clases/Atencion';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute) { }


  atencion: Atencion;
  showEditar: boolean = false;
  showAtencion: boolean = true;

  //editarAtencion: FormGroup;
  registro: any;


  atencionForm = this.fb.group({
    medico: [''],
    paciente: [''],
    edad: [''],
    diagnostico: ['']
  })


  ngOnInit() {
    debugger;

    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.atencion = this.registro;
		} 


    this.initForm(this.atencion);
  }

  initForm(editar: Atencion){
    this.atencionForm = this.fb.group({
      medico: [editar.medico ? editar.medico: ''],
      paciente: [editar.paciente ? editar.paciente: ''],
      edad: [editar.edad ? editar.edad : ''],
      diagnostico: [editar.diagnostico ? editar.diagnostico : '']
      
    })
  }

  submit(){
   
    debugger;
    this.atencionForm.value;

    this.atencion = this.atencionForm.value;
    this.showEditar=true;
    this.showAtencion=false;

    
  }

  




}
