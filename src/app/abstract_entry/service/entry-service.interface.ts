import {Phonetic} from './models/phonetic/phonetic.interface';
import {Sense} from './models/sense/sense.interface';
import {List, Map} from 'immutable';
import {AppEvent} from '../../events/app-event.interface';

export interface EntryService {
  onNameChange(event: AppEvent<string>): any;
  subscribeNameChange(fn: (name: string) => any): any;
  broadcastName(): any;
  onPhoneticsChange(event: AppEvent<List<Phonetic>>): any;
  subscribePhoneticsChange(fn: (phonetics: List<Phonetic>) => any): any;
  broadcastPhonetics(): any;
  onSensesChange(event: AppEvent<Map<number, Sense>>): any;
  subscribeSensesChange(fn: (senses: Map<number, Sense>) => any);
  broadcastSenses(): any;
}
