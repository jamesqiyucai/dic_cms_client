import {Observable} from 'rxjs';
import {List} from 'immutable';

export interface ListManipulatorHandle<T> {
  readonly list$: Observable<List<T>>;
  setList(newList: List<T>): void;
}
