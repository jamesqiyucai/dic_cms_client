import {List} from 'immutable';

export interface Sense {
  id: number;
  firstLevel: number;
  secondLevel: number;
  tags: List<number>;
  text: string;
  changeFirstLevel(newLevel: number): number;
  changeSecondLevel(newLevel: number): number;
  changeText(newText: string): string;
  addTag(tag: number): List<number>;
  deleteTag(tag: number): List<number>;
  moveTag(from: number, to: number): List<number>;
}
