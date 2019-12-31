import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export interface ProposalBookSourceResourceContent extends ProposalSourceResourceContent {
  author: string;
  title: string;
  page: number;
  initialPublishingYear: number;
  publishedYear: number;
  publishedPlace: string;
}
