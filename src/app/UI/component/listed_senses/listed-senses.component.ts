import {Component, Inject, OnInit} from '@angular/core';
import {IDService} from '../../../service/word_builder/id.service.interface';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {OntologyServiceImplementation} from '../../../core/ontology/ontology-service.implementation';
import {
  LISTED_SENSES_COMPONENT_MODEL_COMPOSER, EXAMPLE_FACTORY, SENSE_FACTORY, NEW_SENSE_POSITION_FACTORY,
  ONTOLOGY_SERVICE,
} from './tokens';
import {WordBuilderListedSensesComponentModel} from '../../model/items_list/word-builder-listed-senses-component-model.interface';
import {
  NewListedSensesComponentModelComposer
} from '../../model/items_list/model-composer.interface';
import {SenseComp} from '../../model/sense/sense-comp.class';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleComp} from '../../model/example/example-comp.class';
import {
  NewListedSensesComponentModelComposerImpl
} from '../../model/items_list/model-composer.class';
import {List} from 'immutable';
import {SenseCompFactoryImpl} from '../../model/sense/sense-comp-factory.class';
import {SensePositionCompFactoryImpl} from '../../model/sense-position/sense-position-comp-factory.class';
import {ExampleCompFactoryImpl} from '../../model/example/example-comp-factory.class';
import {ID_SERVICE} from '../../../service/word_builder/tokens';

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component.html',
  styleUrls: [],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImpl},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: LISTED_SENSES_COMPONENT_MODEL_COMPOSER, useClass: NewListedSensesComponentModelComposerImpl},
    {provide: SENSE_FACTORY, useClass: SenseCompFactoryImpl},
    {provide: NEW_SENSE_POSITION_FACTORY, useClass: SensePositionCompFactoryImpl},
    {provide: EXAMPLE_FACTORY, useClass: ExampleCompFactoryImpl},
  ]
})
export class ListedSensesComponent implements OnInit {
  private model: WordBuilderListedSensesComponentModel;

  constructor(
    @Inject(ID_SERVICE) private idService: IDService,
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(LISTED_SENSES_COMPONENT_MODEL_COMPOSER) private newListedSensesModelComposer: NewListedSensesComponentModelComposer,
  ) {}

  public ngOnInit(): void {
    this.model = this.newListedSensesModelComposer.createNewModel();
  }

  public get senses(): List<SenseComp> {
    return this.model.senses;
  }

  private addStory() {
  }
  private deleteStory(id: number) {
  }
  private modifyStory(id: number, newStory: StoryComp) {
  }

  private addExample() {
  }
  private deleteExample(id: number) {
  }
  private modifyExample(id: number, newExample: ExampleComp) {
  }

  private addSense() {
  }
  private deleteSense(index: number) {
  }
  private modifySense(id: number, newSense: SenseComp) {
  }
}

