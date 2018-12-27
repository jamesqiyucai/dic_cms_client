import {EntryServiceImpl} from '../abstractEntry/service/entry-service.implementation';
import {WordEntryService} from './word-entry-service.interface';
import {AppEvent} from '../events/app-event.interface';
import {Spelling} from '../abstractEntry/service/models/spelling/spelling.interface';
import {List} from 'immutable';
import {Injectable} from '@angular/core';

@Injectable()
export class WordEntryServiceImpl extends EntryServiceImpl implements WordEntryService {
  public onSpellingsChange(event: AppEvent<List<Spelling>>): any {
    this.entryDocument.updateSpellings(event.payload);
  }
}
