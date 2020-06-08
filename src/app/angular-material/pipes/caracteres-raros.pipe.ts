import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'caracteresRaros'
})
export class CaracteresRarosPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		debugger;
		if (value != null) {
			if (args === 'mayus') {
				return 'MAMPORRERO';
			} else if (args === 'minus') {
				return 'mamporrero';
			}
		} else {
			return null;
		}
	}
}