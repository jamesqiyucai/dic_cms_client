import {ListedSensesItem} from './listed-senses-item.interface';

export class ListedSensesItemImpl implements ListedSensesItem {
  constructor(readonly isSeparator: boolean) {
    this.isSeparator = true;
  }
}
