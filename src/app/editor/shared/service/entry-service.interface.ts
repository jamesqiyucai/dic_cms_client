import {Broadcaster} from '../../../shared/broadcaster.interface';
import {Phonetic} from '../entry/phonetic/phonetic.interface';
import {Sense} from '../entry/sense/sense.interface';
import {List, Map} from 'immutable';

export interface EntryService {
  nameBroadcaster: Broadcaster;
  phoneticsBroadcaster: Broadcaster;
  sensesBroadcaster: Broadcaster;
  onNameChange(newName: string): any;
  onPhoneticAdd(newPhonetic: Phonetic): any;
  onPhoneticDelete(index: number, phoneticsAfterDeletion: List<Phonetic>): any;
  onPhoneticChange(index: number, newPhonetic: Phonetic): any;
  onPhoneticMove(from: number, to: number, phoneticsAfterMove: List<Phonetic>): any;
  onSenseAdd(newSense: Sense): any;
  onSenseDelete(senseID: number, sensesAfterDeletion: Map<number, Sense>): any;
  onSenseChange(senseID: number, newSense: Sense): any;
}
