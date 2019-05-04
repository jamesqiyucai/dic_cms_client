import {ExampleProposalSourceServiceModelType} from './example-proposal-source.service.model.type';

export class ExampleSourceJournalServiceModel {
  public readonly type: ExampleProposalSourceServiceModelType;

  constructor(
    public author: string,
    public title: string,
    public page: number,
    public publishingDate: string,
    public passageTitle: string,
  ) {
    this.type = ExampleProposalSourceServiceModelType.journal;
  }
}
