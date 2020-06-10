import { Component, OnInit } from '@angular/core';
import { Atencion } from 'src/app/clases/Atencion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {


  atencion: Atencion[] = [
    {medico: 'Juan Perez', paciente: 'Pedro Gomez', edad: 25, diagnostico: 'dolor de panza'},
    {medico: 'Nico Monje', paciente: 'Sergio Muñoz', edad: 40, diagnostico: 'apendisitis'},
    {medico: 'Maria Virginia', paciente: 'Ana Lopez', edad: 28, diagnostico: 'coronavirus'},
  ];


  displayedColumns: string[] = ['medico', 'paciente', 'edad', 'diagnostico', 'editar'];
  dataSource = this.atencion;

  length: number = this.atencion.length;
  i:number;
  constructor(private router: Router) { }

  editarRegistro(element){
    debugger

    this.router.navigate(['/editar-component', element])

    // this.atencion.forEach()


    // for ( this.i=0; this.i < this.length; this.i++ ){
    //     if(this.i === this.atencion.indexOf()){

    //     }
    // }


  }

  ngOnInit() {
  }

}
