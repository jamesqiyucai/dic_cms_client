import {InjectionToken} from '@angular/core';
import {IDService} from '../../core/id.service.interface';
import {OntologyService} from '../../core/ontology/ontology.service.interface';
import {WordBuilderService} from '../word-builder.service.interface';

export const ID_SERVICE = new InjectionToken<IDService>('IdService');
export const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
export const WORD_BUILDER_SERVICE = new InjectionToken<WordBuilderService>('WordBuilderService');
