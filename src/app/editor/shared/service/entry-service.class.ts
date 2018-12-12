import {BroadcasterImpl} from '../../../shared/broadcaster.model';
import {Phonetic} from '../entry/phonetic/phonetic.interface';
import {List, Map} from 'immutable';
import {Sense} from '../entry/sense/sense.interface';
import {EntryFactory} from '../entry/entry-factory.class';
import {Broadcaster} from '../../../shared/broadcaster.interface';
import {EntryService} from './entry-service.interface';
import {WordEntry} from '../entry/wordEntry/word-entry.interface';

export abstract class EntryServiceImpl implements EntryService {
  private entryDocument: WordEntry = new EntryFactory().getWordEntry();
  public nameBroadcaster: Broadcaster = new BroadcasterImpl<string>();
  public phoneticsBroadcaster: Broadcaster = new BroadcasterImpl<List<Phonetic>>();
  public sensesBroadcaster: Broadcaster = new BroadcasterImpl<Map<number, Sense>>();
  public onNameChange(newName: string) {
    this.entryDocument.name = newName;
    if (this.entryDocument.name === newName) {
      this.nameBroadcaster.broadcast(newName);
    } else {
      this.nameBroadcaster.broadcast(this.entryDocument.name);
      console.log('inconsistency occurred when updating document name');
    }
  }
  public onPhoneticAdd(newPhonetic: Phonetic): any {
    this.entryDocument.addPhonetic(newPhonetic);
    if (this.entryDocument.phonetics.last() === newPhonetic) {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
    } else {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
      console.log('inconsistency occurred when updating document phonetics');
    }
  }
  public onPhoneticDelete(index: number, phoneticsAfterDeletion: List<Phonetic>): any {
    this.entryDocument.deletePhonetic(index);
    if (this.entryDocument.phonetics === phoneticsAfterDeletion) {
      this.phoneticsBroadcaster.broadcast(phoneticsAfterDeletion);
    } else {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
      console.log('inconsistency occurred when updating document phonetics');
    }
  }
  public onPhoneticChange(index: number, newPhonetic: Phonetic) {
    this.entryDocument.updatePhonetic(newPhonetic, index);
    if (this.entryDocument.phonetics[index] === newPhonetic) {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
    } else {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
      console.log('inconsistency occurred when updating document phonetics');
    }
  }
  public onPhoneticMove(from: number, to: number, phoneticsAfterMove: List<Phonetic>): any {
    this.entryDocument.movePhonetic(from, to);
    if (this.entryDocument.phonetics === phoneticsAfterMove) {
      this.phoneticsBroadcaster.broadcast(phoneticsAfterMove);
    } else {
      this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
      console.log('inconsistency occurred when updating document phonetics');
    }
  }
  public onSenseAdd(newSense: Sense): any {
    this.entryDocument.addSense(newSense);
    if (this.entryDocument.senses.get(newSense.id) === newSense) {
      this.sensesBroadcaster.broadcast(this.entryDocument.senses);
    } else {
      this.sensesBroadcaster.broadcast(this.entryDocument.senses);
      console.log('inconsistency occurred when adding new sense to document');
    }
  }
  public onSenseDelete(senseID: number, sensesAfterDeletion: Map<number, Sense>): any {
    this.entryDocument.deleteSenseByID(senseID);
    if (this.entryDocument.senses === sensesAfterDeletion) {
      this.sensesBroadcaster.broadcast(sensesAfterDeletion);
    } else {
      this.sensesBroadcaster.broadcast(this.entryDocument.senses);
      console.log('inconsistency occurred when deleting a sense');
    }
  }
  public onSenseChange(senseID: number, newSense: Sense): any {
    this.entryDocument.updateSenseByID(newSense, senseID);
    if (this.entryDocument.senses.get(senseID) === newSense) {
      this.sensesBroadcaster.broadcast(this.entryDocument.senses);
    } else {
      this.sensesBroadcaster.broadcast(this.entryDocument.senses);
      console.log('inconsistency occurred when changing a sense');
    }
  }
}
