
import { Component, OnInit, Input } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { AComponent } from '../atencion/atencion.component';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() medicoPadre: string;
  @Input() pacientePadre: string;
  @Input() edadPadre: number;
  @Input() diagnosticoPadre: string;
  @Input() editar: FormGroup;

  ngOnInit() {

    this.editar = this.fb.group({
      medico: [this.medicoPadre],
      paciente: [this.pacientePadre],
      edad: [this.edadPadre],
      diagnostico: [this.diagnosticoPadre]
      
    })


  }



  // medico: string;
  // paciente: string;
  // edad: number;
  // diagnostico: string;

  // editarValores(medico: string, paciente: string, edad: number, diagnostico: string){
  //   this.medico = medico;
  //   this.paciente = paciente;
  //   this.edad = edad;
  //   this.diagnostico = diagnostico;
  // }

}
