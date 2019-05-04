import {ExampleProposalSourceServiceModelType} from './example-proposal-source.service.model.type';

export class ExampleSourceBookServiceModel {
  public readonly type: ExampleProposalSourceServiceModelType;
  constructor(
    public author: string,
    public title: string,
    public page: number,
    public initialPublishingYear: number,
    public publishedYear: number,
    public publishedPlace: string,
) {
    this.type = ExampleProposalSourceServiceModelType.book;
  }
}
