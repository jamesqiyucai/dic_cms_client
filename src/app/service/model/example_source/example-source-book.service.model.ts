import {ExampleSourceServiceModelTypes} from './example-source.service.model.types';

export class ExampleSourceBookServiceModel {
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
