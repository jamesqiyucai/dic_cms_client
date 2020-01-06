import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[source-host]'
})
export class SourceDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
