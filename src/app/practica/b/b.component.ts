
import { Component, OnInit, Input } from '@angular/core';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';
import { AComponent } from '../a/a.component';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  medico: string;
  paciente: string;
  edad: number;
  diagnostico: string;


  editar = this.fb.group({
    medico: [''],
    paciente: [''],
    edad: [''],
    diagnostico: ['']
    
  })




  // vieneDelPadre(medico){
  //   alert('vengo del padre' + medico);
  // }


  // private _medico = '';
  // @Input()
	// set medico(medico: string) {
	// 	debugger;
	// 	this._medico = medico && medico.toUpperCase();
	// }
	// get medico(): string {
	// 	return this._medico;
	// }

  ngOnInit() {
  }



}
