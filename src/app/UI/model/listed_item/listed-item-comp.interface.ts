import {SenseComp} from '../sense/sense-comp.class';

export interface ListedItemComp {
  isSense: boolean;
  getContent(): SenseComp | null;
}
