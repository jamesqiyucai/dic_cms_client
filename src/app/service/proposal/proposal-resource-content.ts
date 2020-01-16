import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export class ProposalResourceContent {
  id: number;
  initiator: number;
  reviewer: number;
  status: string;
  exampleId: number;
  version: number;
  text: string;
  format: {
    italic: [number, number][]
  };
  translations: {id: number, text: string}[];
  keywords: string[];
  note: string;
  comment: string;
  source: ProposalSourceResourceContent;
}


