
import { Component, OnInit, Input } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { Atencion } from 'src/app/clases/Atencion';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() editarAtencion: Atencion
  editarForm: FormGroup;

  ngOnInit() {
    debugger;
    let atencionPruba = this.editarAtencion;
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
