import {InjectionToken} from '@angular/core';
import {OntologyService} from './ontology/ontology.service.interface';

export const API_POSES = new InjectionToken<string>('pos_api');
export const API_VARIATIONS = new InjectionToken<string>('variations_api');
export const API_INFLECTIONS = new InjectionToken<string>('inflections_api');

export const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('ontology_service');
