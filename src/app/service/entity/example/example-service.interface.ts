import {Observable} from 'rxjs';
import {ExampleServiceModel} from '../../model/example/example-service.model';
import {ExampleData} from './example-data.interface';

export interface ExampleService {

  getNewExample(
    id: number,
    version: number,
    text: string,
    italics: Array<[number, number]>,
    translations: Array<string>,
    keywords: Array<string>,
    comment: string,
    note: string,
    source: {
      type: string,
      author: string,
      title: string,
      page: number,
      initialPublishingYear: number,
      publishedYear: number,
      publishedPlace: string,
      passageTitle: string,
      publishingDate: string
    }
  ): ExampleServiceModel;

  createNewExampleInService(): void;

  changeExampleInService(id: number, newExample: ExampleServiceModel): void;

  deleteExampleInService(id: number);

  createNewPersistentExample(newExample: ExampleServiceModel): void;

  subscribeToExample(id: number, callback: (example: ExampleServiceModel) => any): void;

  unsubscribeFromExample(id: number): void;

  getPersistentExample(id: number): Observable<ExampleData>;

  getPersistentExamplesByKeyword(keyword: string): Observable<number[]>;
}
