import {Phonetic} from '../../shared/entry/phonetic/phonetic.interface';
import {List} from 'immutable';
import {EntryBasicInfo} from './entry-basic-info.interface';
import {EntryService} from '../../shared/service/entry-service.class';

export abstract class EntryBasicInfoImpl implements EntryBasicInfo {
  private _name: string;
  private _phonetics: List<Phonetic>;
  constructor(private entryService: EntryService) {};
  get name() {
    return this._name;
  }
  get phonetics() {
    return this._phonetics;
  }
  public onNameChange(newName: string): any {

  }
}
