import {ExampleProposalSourceType} from './example-proposal-source.type';

export class ExampleSourceJournalServiceModel {
  public readonly type: ExampleProposalSourceType;

  constructor(
    public author: string,
    public title: string,
    public page: number,
    public publishingDate: string,
    public passageTitle: string,
  ) {
    this.type = ExampleProposalSourceType.journal;
  }
}
