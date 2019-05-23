import {ExampleSourceServiceModelTypes} from './example-source.service.model.types';
import {ExampleSource} from './example-source';

export class ExampleSourceBookServiceModel implements ExampleSource {
  public readonly type: ExampleSourceServiceModelTypes;
  constructor(
    public author: string,
    public title: string,
    public page: number,
    public initialPublishingYear: number,
    public publishedYear: number,
    public publishedPlace: string,
) {
    this.type = ExampleSourceServiceModelTypes.book;
  }
}
