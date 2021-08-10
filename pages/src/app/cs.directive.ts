import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCs]'
})
export class CsDirective {

  constructor(private element: ElementRef) { // allow to reference the ele that the directive apply to

  }

  @Input('appCs') set backgroundColor(color: string) {  // set will replace the logic of assignment of value
    this.element.nativeElement.style.backgroundColor = color
  }

}
