import {ExampleHandle} from '../example';
import {Observable} from 'rxjs';

export interface ProposalHandle extends ExampleHandle {
  exampleID: number;
  status: string;
  save(): Observable<any>;
  approve(): Observable<any>;
  reject(): Observable<any>;
}
