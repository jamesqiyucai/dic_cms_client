import {Injectable} from '@angular/core';
import {ExampleService} from './example.service';
import {ExampleServiceModelTypesFactory} from '../../model/example/example.service.model.types.factory';
import {ExampleServiceModel} from '../../model/example/example.service.model';
import {Observable} from 'rxjs';
import {List} from 'immutable';

@Injectable()
export class ExampleServiceImplementation implements ExampleService {
  examples: Observable<List<ExampleServiceModel>>;
  types: ExampleServiceModelTypesFactory;

  loadExamples(keyword: string): void {
  }
}
