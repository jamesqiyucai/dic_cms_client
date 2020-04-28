import {Observable} from 'rxjs';
import {List} from 'immutable';

export interface ListManipulatorHandle<T> {
  list$: Observable<List<T>>;
  list: List<T>;
}
