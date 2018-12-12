import {EntryService} from './entry-service.interface';

export interface WordEntryService extends EntryService {
  onSpellingChange()
}
