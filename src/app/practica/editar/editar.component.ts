
import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';
import { Atencion } from 'src/app/clases/Atencion';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute) { }

  @Input() editarAtencion: Atencion
  editarForm: FormGroup;

  registro: any;
  // atencion: Atencion;


  ngOnInit() {
    debugger;

    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.editarAtencion = this.registro;
		} 


    this.initForm(this.editarAtencion);
  }

  initForm(editar: Atencion){
    this.editarForm = this.fb.group({
      medico: [editar.medico],
      paciente: [editar.paciente],
      edad: [editar.edad],
      diagnostico: [editar.diagnostico]
      
    })
  }

}
