import {ProposalSourceResourceContent} from './proposal-source-resource-content';

export interface ProposalBookSourceResourceContent extends ProposalSourceResourceContent {
  author: string;
  title: string;
  page: string;
  initialPublishingYear: string;
  publishedYear: string;
  publishedPlace: string;
}
