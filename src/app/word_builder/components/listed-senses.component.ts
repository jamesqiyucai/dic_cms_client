import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {IDService} from '../../core/id.service.interface';
import {OntologyService} from '../../core/ontology/ontology.service.interface';
import {WordBuilderService} from '../word-builder.service.interface';
import {IDServiceImplementation} from '../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../core/ontology/ontology-service.implementation';
import {WordBuilderServiceImpl} from '../word-builder.service.class';
import {ID_SERVICE, ONTOLOGY_SERVICE, WORD_BUILDER_SERVICE} from './tokens';
import {WordBuilderListedSensesModel} from './models/listed-senses/word-builder-listed-senses-model.interface';

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
  private model: WordBuilderListedSensesModel;

  constructor(
    @Inject(ID_SERVICE) private idService: IDService,
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(WORD_BUILDER_SERVICE) private wordBuilderService: WordBuilderService,
  ) {}

  public addSense() {
    this.model.addNewSense();
  }
  public deleteSense(index: number) {
    this.model.deleteSense(index);
  }
}

