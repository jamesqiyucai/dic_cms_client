import {SenseComp} from '../sense/sense-comp.class';

export interface ListedItemComp {
  getSense(): SenseComp | null;
}
