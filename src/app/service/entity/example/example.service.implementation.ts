import {Inject, Injectable} from '@angular/core';
import {ExampleService} from './example.service';
import {ExampleServiceModelTypesFactory} from '../../model/example/example.service.model.types.factory';
import {ExampleServiceModel} from '../../model/example/example.service.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {List} from 'immutable';
import {EXAMPLE_SERV_ID_SERVICE} from '../../../core/example_serv_id/injection-token';
import {ExampleServiceIdentifierService} from '../../../core/example_serv_id/example-serv-id-service.interface';
import {HttpClient} from '@angular/common/http';
import {ExampleData} from './example.data';

@Injectable()
export class ExampleServiceImplementation implements ExampleService {
  private _examples: BehaviorSubject<List<ExampleServiceModel>>;
  public readonly examples: Observable<List<ExampleServiceModel>>;
  public readonly types: ExampleServiceModelTypesFactory;

  private static getPersistentExample(id: number): Observable<ExampleData> {
    return undefined;
  }

  private static getPersistentExampleIds(keyword: string): Observable<number[]> {
    return undefined;
  }

  constructor(
    @Inject(EXAMPLE_SERV_ID_SERVICE) private identifierService: ExampleServiceIdentifierService,
    private http: HttpClient
  ) {
    this.types = new ExampleServiceModelTypesFactory();
    this.examples = this._examples.asObservable();
    this.init();
  }

  private init() {
    this._examples = new BehaviorSubject<List<ExampleServiceModel>>(List([]));
  }

  private makeModelFromPersistentData(data: ExampleData): ExampleServiceModel {
    return new ExampleServiceModel(
      this.identifierService.getId(),
      data.id,
      data.version,
      data.text,
      data.format.italic,
      data.translations,
      data.keywords,
      data.note,
      data.comment,
      data.source,
    );
  }

  private makeDataFromModel(model: ExampleServiceModel): ExampleData {
    return undefined;
  }

  private getExampleIndex(identifier: number) {
    return this._examples.value.findIndex(example => example.identifier === identifier);
  }

  private makeNewExamplesWithFetchedExamples(
    currentExamples: List<ExampleServiceModel>,
    fetchedExamples: List<ExampleServiceModel>
  ): List<ExampleServiceModel> {
    let newExamples: List<ExampleServiceModel>;
    fetchedExamples.forEach(e => {
      const i = currentExamples.findIndex(val => val.id === e.id);
      if (i === -1) {
        newExamples = currentExamples.update(
          i,
          () => e
        );
      } else {
        newExamples = currentExamples.push(e);
      }
    });
    return newExamples ? newExamples : List([]);
  }

  public removeExampleInService(identifier: number): void {
    this._examples.next(this._examples.value.delete(this.getExampleIndex(identifier)));
  }

  public loadPersistentExamplesInService(keyword: string): void {
    ExampleServiceImplementation.getPersistentExampleIds(keyword).subscribe(ids => {
      let fetchedExamples: List<ExampleServiceModel> = List(ids.map(id => undefined));
      let counter = 0;
      ids.forEach((id, index) => {
        ExampleServiceImplementation.getPersistentExample(id).subscribe(data => {
          counter += 1;
          fetchedExamples = fetchedExamples.update(
            index,
            () => this.makeModelFromPersistentData(data)
            );
          if (counter === ids.length) {
            this._examples.next(this.makeNewExamplesWithFetchedExamples(this._examples.value, fetchedExamples));
          }
        });
      });
    });
  }
}
