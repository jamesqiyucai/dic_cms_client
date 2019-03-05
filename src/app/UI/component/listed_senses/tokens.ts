import {InjectionToken} from '@angular/core';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {
  WordBuilderListedSensesComponentModel
} from '../../model/items_list/word-builder-listed-senses-component-model.interface';
import {
  SensePositionCompFactory
} from '../../model/sense-position/sense-position-comp-factory.interface';

export const LISTED_SENSES_COMPONENT_MODEL_COMPOSER = new InjectionToken<WordBuilderListedSensesComponentModel>('ListedSensesFactory');
export const NEW_SENSE_POSITION_FACTORY = new InjectionToken<SensePositionCompFactory>('newSensePositionFactory');
export const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
