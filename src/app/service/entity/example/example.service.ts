import {ExampleServiceModelTypesFactory} from '../../model/example/example.service.model.types.factory';
import {Observable} from 'rxjs';
import {ExampleService} from '../../example-service.impl';
import {List} from 'immutable';

export interface ExampleService {
  types: ExampleServiceModelTypesFactory;
  examples: Observable<List<ExampleService>>;

  removeExampleInService(identifier: number): void;

  loadPersistentExamplesInService(keyword: string): void;
}
