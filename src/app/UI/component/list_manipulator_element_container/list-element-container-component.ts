import {Component, Input, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {ListManipulatorComponentModelImpl} from '../list_manipulator';

@Component({
  selector: 'app-list-element-container',
  template: `
    <ng-container #container></ng-container>
  `
})
export class ListElementContainerComponent {
  private _viewRef?: ViewRef;
  private _template?: TemplateRef<any>;
  private _elementModel?: ListManipulatorComponentModelImpl<any>;
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
  @Input() public set model(model: ListManipulatorComponentModelImpl<any>) {
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
