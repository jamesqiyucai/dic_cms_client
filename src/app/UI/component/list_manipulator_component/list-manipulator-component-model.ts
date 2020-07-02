import {List} from 'immutable';
import {BehaviorSubject} from 'rxjs';
import {ListManipulatorHandle} from './list-manipulator-handle';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {ListElementComponentModel} from './list_element/list-element-component-model';

export class ListManipulatorComponentModel<ElementHandle> {
  private _editable: boolean;
  private _array: ListElementComponentModel<ElementHandle>[];
  private _array$: BehaviorSubject<List<ListElementComponentModel<ElementHandle>>>;
  private readonly _getNewElementModel?: () => ListElementComponentModel<ElementHandle>;
  private readonly _handle?: ListManipulatorHandle<ElementHandle>;
  constructor(getNewElementModel?: () => ListElementComponentModel<ElementHandle>, handle?: ListManipulatorHandle<ElementHandle>) {
    this._editable = true;
    this._array = [];
    this._array$ = new BehaviorSubject<List<ListElementComponentModel<ElementHandle>>>(List(this._array));
    if (getNewElementModel) {
      this._getNewElementModel = getNewElementModel;
    }
    if (handle) {
      this._handle = handle;
    }
  }
  public get editable() {
    return this._editable;
  }
  public set editable(val) {
    this._array.forEach(model => model.editable = val);
    this._editable = val;
  }
  public get array$() {
    return this._array$.asObservable();
  }
  public set array(newArray: List<ListElementComponentModel<ElementHandle>>) {
    if (!List(this._array).equals(newArray)) {
      this._array = newArray.toArray();
      this._array$.next(List(this._array));
    }
  }
  public add() {
    let newElement;
    if (this._getNewElementModel) {
      newElement = this._getNewElementModel();
    } else {
      throw new Error('unable to add as new element model factory is undefined');
    }
    this.array = List(this._array).push(newElement);
  }
  public delete(index: number) {
    this.array = List(this._array).remove(index);
    this.save();
  }
  public move(from: number, to: number) {
    moveItemInArray(this._array, from, to);
    this._array$.next(List(this._array));
    this.save();
  }
  public save() {
    this._array.forEach(element => element.save());
    if (this._handle) {
      this._handle.list = List(this._array.map(element => element.getHandle()));
    } else {
      throw new Error('handle is undefined');
    }
  }
}
