// import {BroadcasterImpl} from '../../broadcaster/broadcaster.implementation';
// import {AbstractPhonetic} from './models/phonetic/phonetic.interface';
// import {List, Map} from 'immutable';
// import {Sense} from './models/sense/sense.interface';
// import {EntryFactory} from '../entry-factory.class';
// import {Broadcaster} from '../../broadcaster/broadcaster.interface';
// import {EntryService} from './entry-service.interface';
// import {WordEntry} from '../../word_builder/word-entry.interface';
// import {AppEvent} from '../../events/app-event.interface';
//
// export abstract class EntryServiceImpl implements EntryService {
//   protected entryDocument: WordEntry = new EntryFactory().getWordEntry();
//   private nameBroadcaster: Broadcaster<string> = new BroadcasterImpl<string>();
//   private phoneticsBroadcaster: Broadcaster<List<AbstractPhonetic>> = new BroadcasterImpl<List<AbstractPhonetic>>();
//   private sensesBroadcaster: Broadcaster<Map<number, Sense>> = new BroadcasterImpl<Map<number, Sense>>();
//   public onNameChange(event: AppEvent<string>) {
//     this.entryDocument.name = event.payload;
//   }
//   public subscribeNameChange(fn: (name: string) => any): any {
//     this.nameBroadcaster.subscribe(fn);
//   }
//   public broadcastName() {
//     this.nameBroadcaster.broadcast(this.entryDocument.name);
//   }
//   public onPhoneticsChange(event: AppEvent<List<AbstractPhonetic>>): any {
//     this.entryDocument.updatePhonetics(event.payload);
//   }
//   public subscribePhoneticsChange(fn: (phonetics: List<AbstractPhonetic>) => any): any {
//     this.phoneticsBroadcaster.subscribe(fn);
//   }
//   public broadcastPhonetics(): any {
//     this.phoneticsBroadcaster.broadcast(this.entryDocument.phonetics);
//   }
//   public onSensesChange(event: AppEvent<Map<number, Sense>>): any {
//     this.entryDocument.updateSenses(event.payload);
//   }
//
//   // public onSenseAdd(newSense: Sense): any {
//   //   this.entryDocument.addSense(newSense);
//   //   if (this.entryDocument.senses.get(newSense.id) === newSense) {
//   //     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   //   } else {
//   //     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   //     console.log('inconsistency occurred when adding new sense to document');
//   //   }
//   // }
//   // public onSenseDelete(senseID: number, sensesAfterDeletion: Map<number, Sense>): any {
//   //   this.entryDocument.deleteSenseByID(senseID);
//   //   if (this.entryDocument.senses === sensesAfterDeletion) {
//   //     this.sensesBroadcaster.broadcast(sensesAfterDeletion);
//   //   } else {
//   //     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   //     console.log('inconsistency occurred when deleting a sense');
//   //   }
//   // }
//   // public onSenseChange(senseID: number, newSense: Sense): any {
//   //   this.entryDocument.updateSenseByID(newSense, senseID);
//   //   if (this.entryDocument.senses.get(senseID) === newSense) {
//   //     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   //   } else {
//   //     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   //     console.log('inconsistency occurred when changing a sense');
//   //   }
//   // }
//   public subscribeSensesChange(fn: (senses: Map<number, Sense>) => any) {
//     this.sensesBroadcaster.subscribe(fn);
//   }
//
//   public broadcastSenses(): any {
//     this.sensesBroadcaster.broadcast(this.entryDocument.senses);
//   }
// }
