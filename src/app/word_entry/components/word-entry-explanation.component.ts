import {Component, Inject, InjectionToken} from '@angular/core';
import {EntryExplanationComponent} from '../../abstract_entry/components/entry-explanation.component';
import {WordEntryServiceImpl} from '../word-entry.service.implementation';
import {IDService} from '../../core/id.service.interface';
import {IDServiceImplementation} from '../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../core/ontology-service.implementation';
import {WordEntryService} from '../word-entry-service.interface';
import {OntologyService} from '../../core/ontology.service.interface';

const ID_SERVICE = new InjectionToken<IDService>('IdService');
const ONTOLOGY_SERVICE = new InjectionToken<OntologyService>('OntologyService');
const WORD_ENTRY_SERVICE = new InjectionToken<WordEntryService>('WordEntryService');

@Component({
  selector: 'app-word-entry-explanation',
  templateUrl: './word-entry-explanation.component.html',
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImplementation},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: WORD_ENTRY_SERVICE, useClass: WordEntryServiceImpl}
  ]
})
export class WordEntryExplanationComponent extends EntryExplanationComponent {
  constructor(
    @Inject(ID_SERVICE) idService: IDService,
    @Inject(ONTOLOGY_SERVICE) ontologyService: OntologyService,
    @Inject(WORD_ENTRY_SERVICE) wordEntryService: WordEntryService,
  ) {
    super(idService, ontologyService);
  }
}
