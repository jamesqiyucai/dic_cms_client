import {Phonetic} from '../../shared/entry/phonetic/phonetic.interface';
import {List} from 'immutable';
import {EntryService} from '../../shared/service/entry-service.class';

export interface EntryBasicInfo {
  entryService: EntryService;
  name: string;
  phonetics: List<Phonetic>;
  onNameChange(newName: string): any;
  onPhoneticChange(index: number, newPhonetic: Phonetic): any;
}
