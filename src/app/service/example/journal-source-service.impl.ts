import {SourceServiceImpl} from './source-service.impl';
import {JournalSourceService} from './journal-source-service';

export class JournalSourceServiceImpl extends SourceServiceImpl implements JournalSourceService {
  constructor(
    author: string,
    title: string,
    public page: number,
    public passageTitle: string,
    public publishingDate: string
  ) {
    super(author, title);
  }
}
