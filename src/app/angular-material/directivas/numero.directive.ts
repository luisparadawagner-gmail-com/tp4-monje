import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// TemplateRef y ViewContainerRef: ver documento

@Directive({
    selector: '[appNumero]'
})
export class AppNumeroDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
        debugger;
        @Input() set appNumero(numero: Number) {
            debugger;
            if (numero > 8) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();        }
        }
    }
