import {SenseComp} from '../sense/sense-comp.class';

export interface ListedItemComp {
  isSense: boolean;
  getContent(): SenseComp | null;

  updateSenseSummary(to: string): ListedItemComp;

  updateSenseText(to: string): ListedItemwoComp;

  update
}
