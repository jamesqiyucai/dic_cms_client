import {EntryService} from '../abstractEntry/service/entry-service.interface';
import {AppEvent} from '../events/app-event.interface';
import {Spelling} from '../abstractEntry/service/models/spelling/spelling.interface';
import {List} from 'immutable';

export interface WordEntryService extends EntryService {
  onSpellingsChange(event: AppEvent<List<Spelling>>): any;
}
