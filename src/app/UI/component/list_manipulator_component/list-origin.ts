import {Observable} from 'rxjs';
import {List} from 'immutable';

export interface ListOrigin {
  $list: Observable<List<any>>;
  list: List<any>;
  add(): any;
  move(from: number, to: number): any;
  remove(index: number): any;
}
