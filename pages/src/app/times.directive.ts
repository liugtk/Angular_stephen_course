import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,  // element you put the directive
    private template: TemplateRef<any>  // the internal content
  ) { }

  @Input('appTimes') set times(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template, {
        index: i // here output the variable index
      })
    }
  }

}
