import {SenseComp} from '../sense/sense-comp.class';

export interface ListedItem {
  getContent(): SenseComp | null;
}
