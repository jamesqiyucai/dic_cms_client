import {List} from 'immutable';

export function changeListElementOrder<T>(list: List<T>, from: number, to: number): List<T> {
  // check validity of from and to values
  (function () {
    const maxIndex = list.count() - 1;
    if (from < 0 || from > maxIndex) {
      throw new Error('Problematic "from" value');
    }
    if (to < 0 || to > maxIndex) {
      throw new Error('Problematic "to" value');
    }
  })();
  const itemToMove = list.get(from);
  return list.delete(from).insert(to, itemToMove);
}
