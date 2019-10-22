import {SourceService} from './source-service';

export abstract class SourceServiceImpl implements SourceService {
  protected constructor(public author: string, public title: string) {}
}
