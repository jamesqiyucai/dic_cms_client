import {Component, Inject, InjectionToken} from '@angular/core';
import {IDService} from '../../../core/id.service.interface';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {WordBuilderService} from '../../services/word-builder.service.interface';
import {IDServiceImplementation} from '../../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../../core/ontology/ontology-service.implementation';
import {WordBuilderServiceImpl} from '../../services/word-builder.service.class';
import {AbstractSenseGroup} from '../../../UI/abstract_builder/components/models/abstract-sense-group.class';
import {List} from 'immutable';
import {ID_SERVICE, ONTOLOGY_SERVICE, WORD_BUILDER_SERVICE} from '../../tokens';

@Component({
  selector: 'app-grouped-senses',
  templateUrl: 'grouped-senses.component',
  styleUrls: [],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImplementation},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: WORD_BUILDER_SERVICE, useClass: WordBuilderServiceImpl}
  ]
})
export class GroupedSensesComponent {
  private model: List<AbstractSenseGroup>;
  constructor(
    @Inject(ID_SERVICE) private idService: IDService,
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(WORD_BUILDER_SERVICE) private wordBuilderService: WordBuilderService,
  ) {}
}
