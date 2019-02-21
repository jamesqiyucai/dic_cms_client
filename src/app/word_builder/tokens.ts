import {InjectionToken} from '@angular/core';
import {IDService} from '../core/id.service.interface';
import {OntologyService} from '../core/ontology/ontology.service.interface';
import {WordBuilderService} from './word-builder.service.interface';
import {
  WordBuilderListedSensesComponentModel
} from './components/models/listed-senses/word-builder-listed-senses-component-model.interface';
import {WordBuilderNewSenseFactory} from './components/models/factories/interfaces/word-builder-new-sense-factory.interface';
import {
  WordBuilderNewSensePositionFactory
} from './components/models/factories/interfaces/word-builder-new-sense-position-factory.interface';
import {WordBuilderNewExampleFactory} from './components/models/factories/interfaces/word-builder-new-example-factory.interface';

export const LISTED_SENSES_COMPONENT_MODEL_COMPOSER = new InjectionToken<WordBuilderListedSensesComponentModel>('ListedSensesFactory');
export const NEW_SENSE_FACTORY = new InjectionToken<WordBuilderNewSenseFactory>('newSenseFactory');
export const NEW_SENSE_POSITION_FACTORY = new InjectionToken<WordBuilderNewSensePositionFactory>('newSensePositionFactory');
export const NEW_EXAMPLE_FACTORY = new InjectionToken<WordBuilderNewExampleFactory>('newExampleFactory');
export const ID_SERVICE = new InjectionToken<IDService>('IdService');
export const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
export const WORD_BUILDER_SERVICE = new InjectionToken<WordBuilderService>('WordBuilderService');
