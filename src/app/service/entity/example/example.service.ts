import {Inject, Injectable} from '@angular/core';
import {ExampleService} from './example-service.interface';
import {ExampleServiceModel} from '../../model/example/example-service.model';
import {Observable, Subject} from 'rxjs';
import {EXAMPLE_SERV_ID_SERVICE} from '../../../core/example_serv_id/injection-token';
import {ExampleServIdService} from '../../../core/example_serv_id/example-serv-id-service.interface';
import {ExampleData} from './example-data.interface';

@Injectable()
export class ExampleServiceImpl implements ExampleService {

  constructor(@Inject(EXAMPLE_SERV_ID_SERVICE) private exampleServIdService: ExampleServIdService) {}

  private exampleSubjects: Map<number, Subject<ExampleServiceModel>> = new Map();

  private examples: Map<number, ExampleServiceModel> = new Map();

  public getNewExample(): ExampleServiceModel {
    return new ExampleServiceModel(this.exampleServIdService.getId(), null, null, '', [], [''], [], '', '', null);
  }

  public createNewPersistentExample(newExample: ExampleServiceModel): void {
    this.examples.set(newExample.identifier, newExample);
    this.exampleSubjects.set(newExample.identifier, new Subject<ExampleServiceModel>());
  }

  public changeExampleInService(id: number, newExample: ExampleServiceModel) {
    this.examples.set(id, newExample);
    this.exampleSubjects.get(id).next(this.examples.get(id));
  }

  public deleteExampleInService(id: number) {
    this.examples.delete(id);
    this.exampleSubjects.delete(id);
  }

  public subscribeToExample(id: number, callback: (example: ExampleServiceModel) => any): void {
    this.exampleSubjects.get(id).subscribe(callback);
  }

  public unsubscribeFromExample(id: number) {
    this.exampleSubjects.get(id).unsubscribe();
  }

  public getPersistentExample(): Observable<ExampleData> {
    return undefined;
  }

  public getPersistentExamplesByKeyword(keyword: string): Observable<number[]> {
    return undefined;
  }

}
