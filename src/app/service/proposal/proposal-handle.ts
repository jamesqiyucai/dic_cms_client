import {ExampleHandle} from '../example';
import {Observable} from 'rxjs';

export interface ProposalHandle extends ExampleHandle {
  exampleID: number;
  $exampleID: Observable<number>;
  status: string;
  $status: Observable<string>;
  changeSource(toType: string): any;
  save(): Observable<any>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
