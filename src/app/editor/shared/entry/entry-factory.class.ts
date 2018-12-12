import {Phonetic} from './phonetic/phonetic.interface';
import {Sense} from './sense/sense.interface';
import {WordEntryImpl} from './wordEntry/word-entry.class';
import {WordEntry} from './wordEntry/word-entry.interface';

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
