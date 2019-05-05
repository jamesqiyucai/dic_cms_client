import {ExampleServiceModelTypesFactory} from '../../model/example/example.service.model.types.factory';
import {Observable} from 'rxjs';
import {ExampleServiceModel} from '../../model/example/example.service.model';
import {List} from 'immutable';

export interface ExampleService {
  types: ExampleServiceModelTypesFactory;
  examples: Observable<List<ExampleServiceModel>>;

  removeExampleInService(identifier: number): void;

  loadPersistentExamplesInService(keyword: string): void;
}
