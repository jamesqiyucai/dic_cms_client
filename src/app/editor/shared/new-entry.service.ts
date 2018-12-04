import {Injectable} from '@angular/core';
import {EntryDocument, Example, Phonetic, Sense, Spelling, Story} from './models/entry.model';
import {List} from 'immutable';

@Injectable()
export class NewEntryService {
  // // data slots for APIs exposed to presenter
  // private _nameSlot: string;
  // private _posSlot: number;
  // private _phoneticsSlot: List<Phonetic>;
  // private _spellingsSlot: List<Spelling>;
  // private _sensesSlot: List<Sense>;
  // private _examplesSlot: List<Example>;
  // private _storiesSlot: List<Story>;
  // model of new entry being edited
  public entryDocument: EntryDocument = new EntryDocument();
}
