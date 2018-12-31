import {Component} from '@angular/core';
import {EntryExplanationComponent} from '../../abstractEntry/components/entry-explanation.component';
import {WordEntryServiceImpl} from '../word-entry.service.implementation';
import {IDService} from '../../core/id.service.interface';
import {IDServiceImplementation} from '../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../core/ontology-service.implementation';

@Component({
  selector: 'app-word-entry-explanation',
  templateUrl: './word-entry-explanation.component.html',
  providers: [
    IDServiceImplementation,
    OntologyServiceImplementation,
    WordEntryServiceImpl
  ]
})
export class WordEntryExplanationComponent extends EntryExplanationComponent {
  constructor(
    protected wordEntryService: WordEntryServiceImpl,
    protected idService: IDServiceImplementation,
    protected ontologyService: OntologyServiceImplementation
    ) {
    super(wordEntryService, idService, ontologyService);
  }
}
