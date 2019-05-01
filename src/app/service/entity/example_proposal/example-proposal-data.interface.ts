import {ExampleProposalSourceType} from '../../model/example_proposal/example-proposal-source.type';

export interface ExampleProposalData {
  id: number;
  initiator: number;
  reviewer: number;
  status: string;
  exampleId: number;
  version: number;
  text: string;
  format: {
    italic: Array<[number, number]>
  };
  translations: Array<string>;
  keywords: Array<string>;
  note: string;
  comment: string;
  source: {
    type: ExampleProposalSourceType;
    author: string;
    title: string;
    page: number;
    initialPublishingYear?: number;
    publishedYear?: number;
    publishedPlace?: string;
    passageTitle?: string;
    publishingDate?: string;
  };
}
