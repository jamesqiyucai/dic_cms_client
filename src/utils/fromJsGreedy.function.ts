import {Seq} from 'immutable';

export function fromJSGreedy(js) {
  return typeof js !== 'object' || js === null ? js :
    Array.isArray(js) ?
      Seq(js).map(fromJSGreedy).toList() :
      Seq(js).map(fromJSGreedy).toMap();
}
