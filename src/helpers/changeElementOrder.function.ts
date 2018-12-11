import {List, OrderedMap} from 'immutable';

export function changeElementOrder<T>(collection: OrderedMap<string, T>, from: number, to: number): OrderedMap<string, T>;
export function changeElementOrder<T>(collection: List<T>, from: number, to: number): List<T>;
export function changeElementOrder(collection: any, from: number, to: number): any {
  // check validity of from and to values
  (function () {
    const maxIndex = collection.count() - 1;
    if (from < 0 || from > maxIndex) {
      throw new Error('Problematic "from" value');
    }
    if (to < 0 || to > maxIndex) {
      throw new Error('Problematic "to" value');
    }
  })();
  if (collection instanceof List) {
    const itemToMove = collection.get(from);
    return collection.delete(from).insert(to, itemToMove);
  } else if (collection instanceof OrderedMap) {
    let keysList = collection.keySeq().toList();
    let valuesList = collection.toList();
    const keyToMove = keysList.get(from);
    const valueToMove = valuesList.get(from);
    keysList = keysList.delete(from).insert(to, keyToMove);
    valuesList = valuesList.delete(from).insert(to, valueToMove);
    const newList = keysList.map((value, key) => [value.toString(), valuesList.get(key)]);
    return OrderedMap(newList);
  }
}
