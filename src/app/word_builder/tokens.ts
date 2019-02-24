import {InjectionToken} from '@angular/core';
import {IDService} from '../core/id.service.interface';
import {OntologyService} from '../core/ontology/ontology.service.interface';
import {WordBuilderService} from './services/word-builder.service.interface';
import {
  WordBuilderListedSensesComponentModel
} from './components/listed_senses/model/word-builder-listed-senses-component-model.interface';
import {NewComponentSenseFactory} from './components/shared/factories/new-sense-factory.interface';
import {
  NewComponentSensePositionFactory
} from './components/shared/factories/new-sense-position-factory.interface';
import {NewComponentExampleFactory} from './components/shared/factories/new-example-factory.interface';

export const LISTED_SENSES_COMPONENT_MODEL_COMPOSER = new InjectionToken<WordBuilderListedSensesComponentModel>('ListedSensesFactory');
export const NEW_SENSE_FACTORY = new InjectionToken<NewComponentSenseFactory>('newSenseFactory');
export const NEW_SENSE_POSITION_FACTORY = new InjectionToken<NewComponentSensePositionFactory>('newSensePositionFactory');
export const NEW_EXAMPLE_FACTORY = new InjectionToken<NewComponentExampleFactory>('newExampleFactory');
export const ID_SERVICE = new InjectionToken<IDService>('IdService');
export const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
export const WORD_BUILDER_SERVICE = new InjectionToken<WordBuilderService>('WordBuilderService');
