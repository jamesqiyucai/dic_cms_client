import {ExampleProposalSourceType} from './example-proposal-source.type';

export class ExampleSourceBookServiceModel {
  public readonly type: ExampleProposalSourceType;
  constructor(
    public author: string,
    public title: string,
    public page: number,
    public initialPublishingYear: number,
    public publishedYear: number,
    public publishedPlace: string,
) {
    this.type = ExampleProposalSourceType.book;
  }
}
