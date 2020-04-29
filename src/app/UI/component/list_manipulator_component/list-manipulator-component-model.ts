import {List} from 'immutable';
import {BehaviorSubject} from 'rxjs';
import {ListManipulatorHandle} from './list-manipulator-handle';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {ListElementComponentModel} from './list-element-component-model';

export class ListManipulatorComponentModel<ElementHandle> {
  private _editable: boolean;
  private _array: ListElementComponentModel<ElementHandle>[];
  private _array$: BehaviorSubject<List<ListElementComponentModel<ElementHandle>>>;
  private readonly _getNewElementModel: () => ListElementComponentModel<ElementHandle>;
  private _handle: ListManipulatorHandle<ElementHandle>;
  constructor(handle: ListManipulatorHandle<ElementHandle>, getNewElementModel: () => ListElementComponentModel<ElementHandle>) {
    this._editable = true;
    this._array = [];
    this._array$ = new BehaviorSubject<List<ListElementComponentModel<ElementHandle>>>(List(this._array));
    this._getNewElementModel = getNewElementModel;
    this._handle = handle;
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
    const newElement = this._getNewElementModel();
    this.array = List(this._array).push(newElement);
  }
  public delete(index: number) {
    this.array = List(this._array).remove(index);
  }
  public move(from: number, to: number) {
    moveItemInArray(this._array, from, to);
    this._array$.next(List(this._array));
  }
  public save() {
    this._array.forEach(element => element.save());
    this._handle.list = List(this._array.map(element => element.getHandle()));
  }
}
