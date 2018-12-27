import {Component, OnInit} from '@angular/core';
import {EntryExplanationComponent} from '../../abstractEntry/components/entry-explanation.component';
import {WordEntryServiceImpl} from '../word-entry.service.implementation';
import {Sense} from '../../abstractEntry/service/models/sense/sense.interface';
import {List} from 'immutable';

@Component({
  selector: 'app-word-entry-explanation',
  templateUrl: './word-entry-explanation.component.html',
  providers: [WordEntryServiceImpl]
})
export class WordEntryExplanationComponent extends EntryExplanationComponent implements OnInit {
  constructor(protected wordEntryService: WordEntryServiceImpl) {
    super(wordEntryService);
  }
}
