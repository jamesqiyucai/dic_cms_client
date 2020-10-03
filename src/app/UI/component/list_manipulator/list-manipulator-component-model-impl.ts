import {List} from 'immutable';
import {BehaviorSubject} from 'rxjs';
import {ListManipulatorHandle} from './list-manipulator-handle';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {ListElementModel} from '../list_manipulator_element_container/list-element-model';
import {ListManipulatorModel} from './list-manipulator-model';

export class ListManipulatorComponentModelImpl<ElementHandle> implements ListManipulatorModel<ElementHandle> {
  private _editable: boolean;
  private _array: ListElementModel<ElementHandle>[];
  private _array$: BehaviorSubject<List<ListElementModel<ElementHandle>>>;
  private readonly _getNewElementModel?: () => ListElementModel<ElementHandle>;
  private readonly _handle?: ListManipulatorHandle<ElementHandle>;
  constructor(getNewElementModel?: () => ListElementModel<ElementHandle>, handle?: ListManipulatorHandle<ElementHandle>) {
    this._editable = true;
    this._array = [];
    this._array$ = new BehaviorSubject<List<ListElementModel<ElementHandle>>>(List(this._array));
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
  public enableEditing() {
    this._array.forEach(model => model.enableEditing());
    this._editable = true;
  }

  public disableEditing() {
    this._array.forEach(model => model.disableEditing());
    this._editable = false;
  }
  public get array$() {
    return this._array$;
  }
  public set array(newArray: List<ListElementModel<ElementHandle>>) {
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
    if (this._handle) {
      this._handle.setList(List(this._array.map(element => element.getHandle())));
    } else {
      throw new Error('handle is undefined');
    }
  }
}
