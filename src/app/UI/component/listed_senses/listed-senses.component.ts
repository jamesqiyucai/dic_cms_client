import {Component, Inject, OnInit} from '@angular/core';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {OntologyServiceImplementation} from '../../../core/ontology/ontology-service.implementation';
import {ListedItemsCompModel} from '../../model/items_list/listed-items-comp-model.interface';
import {
  ListedItemsCompModelComposer
} from '../../model/items_list/listed-items-comp-model-composer.interface';
import {SenseComp} from '../../model/sense/sense-comp.class';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleComp} from '../../model/example/example-comp.class';
import {
  ListedItemsCompModelComposerImpl
} from '../../model/items_list/listed-items-comp-model-composer.class';
import {List} from 'immutable';
import {SenseCompFactoryImpl} from '../../model/sense/sense-comp-factory.class';
import {SensePositionCompFactoryImpl} from '../../model/sense-position/sense-position-comp-factory.class';
import {ExampleCompFactoryImpl} from '../../model/example/example-comp-factory.class';
import {ID_SERVICE} from '../../../service/word_builder/tokens';
import {ONTOLOGY_SERVICE} from '../../../core/tokens';
import {EXAMPLE_FACTORY} from '../../model/example/injection-token';
import {LISTED_ITEMS_COMP_MODEL_COMPOSER} from '../../model/items_list/injection-token';
import {SENSE_FACTORY} from '../../model/sense/injection-token';
import {SENSE_POSITION_FACTORY} from '../../model/sense-position/injection-token';
import {STORY_FACTORY} from '../../model/story/injection-token';
import {StoryCompFactoryImpl} from '../../model/story/story-comp-factory.class';
import {ListedItemComp} from '../../model/listed_item/listed-item-comp.interface';
import {LISTED_ITEM_FACTORY} from '../../model/listed_item/injection-token';
import {ListedItemCompFactoryImpl} from '../../model/listed_item/listed-item-comp-factory.class';

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component.html',
  styleUrls: [],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImpl},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: LISTED_ITEMS_COMP_MODEL_COMPOSER, useClass: ListedItemsCompModelComposerImpl},
    {provide: LISTED_ITEM_FACTORY, useClass: ListedItemCompFactoryImpl},
    {provide: SENSE_FACTORY, useClass: SenseCompFactoryImpl},
    {provide: SENSE_POSITION_FACTORY, useClass: SensePositionCompFactoryImpl},
    {provide: EXAMPLE_FACTORY, useClass: ExampleCompFactoryImpl},
    {provide: STORY_FACTORY, useClass: StoryCompFactoryImpl}
  ]
})
export class ListedSensesComponent implements OnInit {
  private listedItemsModel: ListedItemsCompModel;

  constructor(
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(LISTED_ITEMS_COMP_MODEL_COMPOSER) private listedSensesModelComposer: ListedItemsCompModelComposer,
  ) {}

  public ngOnInit(): void {
    this.listedItemsModel = this.listedSensesModelComposer.createNewModel();
  }

  public get items(): List<ListedItemComp> {
    return this.listedItemsModel.items;
  }

  public addStoryToExample(index: number, ofItem: number, atIndex: number): void {
    this.listedItemsModel.addStoryToExample(index, ofItem, atIndex);
  }

  public addStoryToSense(index: number, atIndex: number): void {
    this.listedItemsModel.addStoryToSense(index, atIndex);
  }

  public modifyStoryInExample(index: number, ofItem: number, atIndex: number, to: StoryComp): void {
    this.listedItemsModel.modifyStoryInExample(index, ofItem, atIndex, to);
  }

  public modifyStoryInSense(index: number, atIndex: number, to: StoryComp): void {
    this.listedItemsModel.modifyStoryInSense(index, atIndex, to);
  }

  public deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void {
    this.listedItemsModel.deleteStoryFromExample(index, ofItem, atIndex);
  }

  public deleteStoryFromSense(index: number, atIndex: number): void {
    this.listedItemsModel.deleteStoryFromSense(index, atIndex);
  }

  public addExample(toItem: number, atIndex: number): void {
    this.listedItemsModel.addExample(toItem, atIndex);
  }

  public modifyExample(atIndex: number, ofItem: number, to: ExampleComp): void {
    this.listedItemsModel.modifyExample(atIndex, ofItem, to);
  }

  public deleteExample(fromItem: number, atIndex: number): void {
    this.listedItemsModel.deleteExample(fromItem, atIndex);
  }

  public addSense(atIndex: number): void {
    this.listedItemsModel.addSense(atIndex);
  }

  public modifySense(atIndex: number, to: SenseComp): void {
    this.listedItemsModel.modifySense(atIndex, to);
  }

  public deleteSense(atIndex: number): void {
    this.listedItemsModel.deleteSense(atIndex);
  }

  public addSeparator(atIndex: number): void {
    this.listedItemsModel.addSeparator(atIndex);
  }

  public deleteSeparator(atIndex: number): void {
    this.listedItemsModel.deleteSeparator(atIndex);
  }
}

aaa
