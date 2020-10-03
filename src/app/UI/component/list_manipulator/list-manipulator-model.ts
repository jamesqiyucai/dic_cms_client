import {Observable} from 'rxjs';
import {ListElementModel} from '../list_manipulator_element_container/list-element-model';
import {List} from 'immutable';

export interface ListManipulatorModel<ElementHandle> {
  readonly array$: Observable<List<ListElementModel<ElementHandle>>>;
  readonly editable: boolean;
  enableEditing(): void;
  disableEditing(): void;
  add(): void;
  delete(index: number): void;
  move(from: number, to: number): void;
}
