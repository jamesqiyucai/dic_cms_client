import {ProposalSourceResourceContent} from './document/source/proposal-source-resource-content';
import {ProposalStatus} from './proposal-status';

export interface ProposalResourceContent {
  id?: number;
  initiator: number;
  reviewer: number;
  status?: ProposalStatus;
  exampleId?: number;
  version?: number;
  text: string;
  format: {
    italic: [number, number][]
  };
  translations: {$mark: string, text: string}[];
  keywords: string[];
  note: string;
  comment: string;
  source: ProposalSourceResourceContent | null | undefined;
}


