import {Phonetic} from './service/models/phonetic/phonetic.interface';
import {Sense} from './service/models/sense/sense.interface';
import {WordEntryImpl} from '../newWordEntry/word-entry.implementation';
import {WordEntry} from '../newWordEntry/word-entry.interface';

export class EntryFactory {
  public getWordEntry(name: string, phonetics: Array<Phonetic>, senses: Array<Sense>): WordEntry;
  public getWordEntry(): WordEntry;
  public getWordEntry(name?: string, phonetics?: Array<Phonetic>, senses?: Array<Sense>): WordEntry {
    if (name && phonetics && senses) {
      return new WordEntryImpl(name, phonetics, senses);
    } else {
      return new WordEntryImpl('', [], []);
    }
  }
}
