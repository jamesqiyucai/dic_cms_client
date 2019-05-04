import {Inject, Injectable} from '@angular/core';
import {ExampleService} from './example.service';
import {ExampleServiceModelTypesFactory} from '../../model/example/example.service.model.types.factory';
import {ExampleServiceModel} from '../../model/example/example.service.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {List} from 'immutable';
import {EXAMPLE_SERV_ID_SERVICE} from '../../../core/example_serv_id/injection-token';
import {ExampleServIdService} from '../../../core/example_serv_id/example-serv-id-service.interface';
import {HttpClient} from '@angular/common/http';
import {ExampleData} from './example.data';

@Injectable()
export class ExampleServiceImplementation implements ExampleService {
  private _examples: BehaviorSubject<List<ExampleServiceModel>>;
  public readonly examples: Observable<List<ExampleServiceModel>>;
  public readonly types: ExampleServiceModelTypesFactory;

  private static getPersistentExample(id: number, version: number): Observable<ExampleData> {
    return undefined;
  }

  private static getPersistentExampleIds(keyword: string): Observable<any> {
    return undefined;
  }

  public static getModelFromPersistentData(data: ExampleData): ExampleServiceModel {
    return undefined;
  }

  constructor(
    @Inject(EXAMPLE_SERV_ID_SERVICE) private exampleServiceIdService: ExampleServIdService,
    private http: HttpClient
  ) {
    this.types = new ExampleServiceModelTypesFactory();
    this.examples = this._examples.asObservable();
    this.init();
  }

  private init() {
    this._examples = new BehaviorSubject<List<ExampleServiceModel>>(List([]));
  }

  public loadPersistentExamplesInService(keyword: string): void {

  }
}
