import {BookSourceService} from './book-source-service';
import {SourceServiceImpl} from './source-service.impl';

export class BookSourceServiceImpl extends SourceServiceImpl implements BookSourceService {
  constructor(
    author: string,
    title: string,
    public page: number,
    public initialPublishingYear: number,
    public publishedYear: number,
    public publishedPlace: string,
  ) {
    super(author, title);
  }
}
