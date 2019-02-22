import {Component, Inject, OnInit} from '@angular/core';
import {IDService} from '../../core/id.service.interface';
import {OntologyService} from '../../core/ontology/ontology.service.interface';
import {WordBuilderService} from '../word-builder.service.interface';
import {IDServiceImplementation} from '../../core/id.service.implementation';
import {OntologyServiceImplementation} from '../../core/ontology/ontology-service.implementation';
import {WordBuilderServiceImpl} from '../word-builder.service.class';
import {
  ID_SERVICE,
  LISTED_SENSES_COMPONENT_MODEL_COMPOSER, NEW_EXAMPLE_FACTORY, NEW_SENSE_FACTORY, NEW_SENSE_POSITION_FACTORY,
  ONTOLOGY_SERVICE,
  WORD_BUILDER_SERVICE
} from '../tokens';
import {WordBuilderListedSensesComponentModel} from './models/listed-senses/word-builder-listed-senses-component-model.interface';
import {
  NewListedSensesComponentModelComposer
} from './models/factories/interfaces/new-component-model-composer.interface';
import {ComponentSense} from './models/component-sense.class';
import {ComponentStory} from './models/component-story.class';
import {ComponentExample} from './models/component-example.class';
import {
  NewListedSensesComponentModelComposerImpl
} from './models/factories/implementations/word-builder-new-component-model-composer.class';
import {List} from 'immutable';
import {WordBuilderNewSenseFactoryImpl} from './models/factories/implementations/word-builder-new-sense-factory.class';
import {WordBuilderNewSensePositionFactoryImpl} from './models/factories/implementations/word-builder-new-sense-position-factory.class';
import {NewComponentExampleFactoryImpl} from './models/factories/implementations/word-builder-new-example-factory.class';

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component.html',
  styleUrls: [],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImplementation},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: LISTED_SENSES_COMPONENT_MODEL_COMPOSER, useClass: NewListedSensesComponentModelComposerImpl},
    {provide: NEW_SENSE_FACTORY, useClass: WordBuilderNewSenseFactoryImpl},
    {provide: NEW_SENSE_POSITION_FACTORY, useClass: WordBuilderNewSensePositionFactoryImpl},
    {provide: NEW_EXAMPLE_FACTORY, useClass: NewComponentExampleFactoryImpl},
    {provide: WORD_BUILDER_SERVICE, useClass: WordBuilderServiceImpl}
  ]
})
export class ListedSensesComponent implements OnInit {
  private model: WordBuilderListedSensesComponentModel;

  constructor(
    @Inject(ID_SERVICE) private idService: IDService,
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(LISTED_SENSES_COMPONENT_MODEL_COMPOSER) private newListedSensesModelComposer: NewListedSensesComponentModelComposer,
    @Inject(WORD_BUILDER_SERVICE) private wordBuilderService: WordBuilderService,
  ) {}

  public ngOnInit(): void {
    this.model = this.newListedSensesModelComposer.createNewModel();
  }

  public get senses(): List<ComponentSense> {
    return this.model.senses;
  }

  private addStory() {
  }
  private deleteStory(id: number) {
  }
  private modifyStory(id: number, newStory: ComponentStory) {
  }

  private addExample() {
  }
  private deleteExample(id: number) {
  }
  private modifyExample(id: number, newExample: ComponentExample) {
  }

  private addSense() {
  }
  private deleteSense(index: number) {
  }
  private modifySense(id: number, newSense: ComponentSense) {
  }
}

