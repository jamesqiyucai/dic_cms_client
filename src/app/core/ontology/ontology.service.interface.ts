import {List} from 'immutable';
import {PoS} from './pos.class';
import {Variation} from './variation.class';
import {Inflection} from './inflection.class';

export interface OntologyService {
  getPosNameByID(id: number): string;
  getPosDescByID(id: number): string;
  getVariationNameByID(id: number): string;
  getVariationDescByID(id: number): string;
  getInflectionNameByID(id: number): string;
  getInflectionsByPos(id: number): List<number>;

  loadPoses(): Promise<any>;
  loadVariations(): Promise<any>;
  loadInflections(): Promise<any>;
}
