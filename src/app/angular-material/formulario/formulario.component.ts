import { Component, OnInit } from '@angular/core';

interface Bebidas {
	value: string;
	viewValue: string;
}



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
	bebidas: Bebidas[] = [
		{ value: '0', viewValue: 'Stella' },
		{ value: '1', viewValue: 'Quilmes' },
		{ value: '2', viewValue: 'Corona' }
	];

	color: boolean;
	colorTexto: string = 'pink';
	numero: Number = 20;
	fecha: Date = new Date();
	palabraFea: string = 'Mamporrer@_';

	constructor() {}

	ngOnInit(): void {}

	cambiarColor(event) {
		if (event.checked) {
			this.color = true;
			this.colorTexto = 'black';
		} else {
      this.color = false;
      this.colorTexto = 'pink';
		}
	}

	selectBebida(bebida) {
		if (bebida.value === '2') {
			alert('Se seleccionó Corona: ');
		}
	}

}
