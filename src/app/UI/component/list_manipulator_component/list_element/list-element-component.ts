import {Component, Input, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {ListManipulatorComponentModel} from '../list-manipulator-component-model';

@Component({
  selector: 'app-list-element',
  template: `
    <ng-container #container></ng-container>
  `
})
export class ListElementComponent {
  private _viewRef?: ViewRef;
  private _template?: TemplateRef<any>;
  private _elementModel?: ListManipulatorComponentModel<any>;
  @ViewChild('container', {static: true, read: ViewContainerRef}) private container?: ViewContainerRef;
  constructor() {}
  @Input() public set projectedView(template: TemplateRef<any>) {
    this._template = template;
    if (this.container) {
      this._viewRef = this.container.createEmbeddedView(this._template, this);
    } else {
      throw new Error('View Container Not Found');
    }
  }
  @Input() public set model(model: ListManipulatorComponentModel<any>) {
    this._elementModel = model;
  }
  // noinspection JSUnusedGlobalSymbols
  public get elementModel() {
    if (this._elementModel) {
      return this._elementModel;
    } else {
      throw new Error('Element Model is undefined');
    }
  }
}
