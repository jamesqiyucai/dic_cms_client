import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export interface ProposalJournalSourceResourceContent extends ProposalSourceResourceContent {
  author: string;
  title: string;
  page: number;
  passageTitle: string;
  publishingDate: string;
}
