import {EntryBasicInfo} from '../entry-basic-info.interface';
import {Spelling} from '../../../shared/entry/spelling/spelling.interface';

export interface WordEntryBasicInfo extends EntryBasicInfo {
  spellings: Spelling[];
}
