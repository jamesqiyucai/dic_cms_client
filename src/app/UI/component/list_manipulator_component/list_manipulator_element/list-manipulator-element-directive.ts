import {ContentChild, Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';
import {ListManipulatorComponentModel} from '../list-manipulator-component-model';
import {ListElementComponent} from './list-element-component';

@Directive({
  selector: 'app-list-manipulator-content'
})
export class ListManipulatorElementDirective {
  private _viewRef?: ViewRef;
  private _view?: TemplateRef<any>;
  @ContentChild('child', {static: false}) private element?: ListElementComponent;
  constructor(private viewContainer: ViewContainerRef) {}
  @Input() public set projectedView(view: TemplateRef<any>) {
    this._view = view;
    this._viewRef = this.viewContainer.createEmbeddedView(this._view);

  }
  @Input() public set model(model: ListManipulatorComponentModel<any>) {
    if (this.element) {
      this.element.model = model;
    } else {
      throw new Error('failed to assign model to list element component');
    }
  }
}
