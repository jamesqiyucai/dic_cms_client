import {SourceService} from './source-service';

export interface JournalSourceService extends SourceService {
  page: number;
  passageTitle: string;
  publishingDate: string;
}
