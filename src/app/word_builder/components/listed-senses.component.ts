import {Component, Inject, InjectionToken} from '@angular/core';
import {IDService} from '../../core/id.service.interface';
import {OntologyService} from '../../core/ontology/ontology.service.interface';
import {WordBuilderService} from '../word-builder.service.interface';
import {IDServiceImplementation} from '../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../core/ontology/ontology-service.implementation';
import {WordBuilderServiceImpl} from '../word-builder.service.class';
import {BaseSense} from '../../abstract_builder/components/models/base-sense.class';
import {List} from 'immutable';

const ID_SERVICE = new InjectionToken<IDService>('IdService');
const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
const WORD_BUILDER_SERVICE = new InjectionToken<WordBuilderService>('WordBuilderService');

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component',
  styleUrls: [],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImplementation},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: WORD_BUILDER_SERVICE, useClass: WordBuilderServiceImpl}
  ]
})
export class ListedSensesComponent {
  private model: List<BaseSense>;
  constructor(
    @Inject(ID_SERVICE) private idService: IDService,
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(WORD_BUILDER_SERVICE) private wordBuilderService: WordBuilderService,
  ) {}
}

