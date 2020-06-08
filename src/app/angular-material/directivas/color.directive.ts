import { Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class AppColorDirective {
    @Input() appColor: string;

    constructor(private eleR: ElementRef){

        eleR.nativeElement.style.background = 'blue';

    }

    @HostListener('click')
    onClick(){
        this.cambiarColor(this.appColor || 'violet');
    }


    private cambiarColor(color: string) {
		this.eleR.nativeElement.style.backgroundColor = color;
	}

}