import {ExampleSourceServiceModelTypes} from './example-source.service.model.types';

export class ExampleSourceJournalServiceModel {
  public readonly type: ExampleSourceServiceModelTypes;

  constructor(
    public author: string,
    public title: string,
    public page: number,
    public publishingDate: string,
    public passageTitle: string,
  ) {
    this.type = ExampleSourceServiceModelTypes.journal;
  }
}
