import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {OntologyServiceImplementation} from '../../../core/ontology/ontology-service.implementation';
import {ListedItemsCompModel} from '../../model/items_list/listed-items-comp-model.interface';
import {
  ListedItemsCompModelComposer
} from '../../model/items_list/listed-items-comp-model-composer.interface';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleComp} from '../../model/example/example-comp.class';
import {
  ListedItemsCompModelComposerImpl
} from '../../model/items_list/listed-items-comp-model-composer.class';
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
import {ListedItemCompFactory} from '../../model/listed_item/listed-item-comp-factory.interface';
import {ExampleCompFactory} from '../../model/example/example-comp-factory.interface';
import {StoryCompFactory} from '../../model/story/story-comp-factory.interface';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component.html',
  styleUrls: ['./listed-senses.component.css'],
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
  readonly senseBase: ListedItemComp = this.listedItemFactory.createNewListedItem(true);
  readonly exampleBase: ExampleComp[] = [this.exampleFactory.createNewExample()];
  readonly storyBase: StoryComp[] = [this.storyFactory.createNewStory()];
  readonly separatorBase: ListedItemComp[] = [this.listedItemFactory.createNewListedItem(false)];
  constructor(
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(EXAMPLE_FACTORY) private exampleFactory: ExampleCompFactory,
    @Inject(STORY_FACTORY) private storyFactory: StoryCompFactory,
    @Inject(LISTED_ITEM_FACTORY) private listedItemFactory: ListedItemCompFactory,
    @Inject(LISTED_ITEMS_COMP_MODEL_COMPOSER) private listedItemsModelComposer: ListedItemsCompModelComposer,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.listedItemsModel = this.listedItemsModelComposer.createNewModel();
    this.cdr.detectChanges();
  }

  public get items() {
    return this.listedItemsModel.items;
  }

  public modifySenseSummary(atIndex: number, newSummary: string) {
    this.listedItemsModel.modifySenseSummary(atIndex, newSummary);
  }

  public modifySenseText(atIndex: number, newText: string) {
    this.listedItemsModel.modifySenseText(atIndex, newText);
  }

  public modifySenseTranslation(ofSense: number, atIndex: number, newTranslation: string) {
    this.listedItemsModel.modifySenseTranslation(ofSense, atIndex, newTranslation);
  }

  public modifyExampleText(ofSense: number, atIndex: number, newText: string) {
    this.listedItemsModel.modifyExampleText(atIndex, ofSense, newText);
  }

  public modifyExampleTranslation(ofSense: number, inExample: number, atIndex: number, newTranslation: string) {
    this.listedItemsModel.modifyExampleTranslation(ofSense, inExample, atIndex, newTranslation);
  }

  public modifyExampleStoryTitle(ofSense: number, atExample: number, atIndex: number, newTitle: string) {
    this.listedItemsModel.modifyStoryTitleInExample(atExample, ofSense, atIndex, newTitle);
  }

  public modifyExampleStoryText(ofSense: number, atExample: number, atIndex: number, newText: string) {
    this.listedItemsModel.modifyStoryTextInExample(atExample, ofSense, atIndex, newText);
  }

  public modifySenseStoryTitle(ofSense: number, atIndex: number, newTitle: string) {
    this.listedItemsModel.modifyStoryTitleInSense(ofSense, atIndex, newTitle);
  }

  public modifySenseStoryText(ofSense: number, atIndex: number, newText: string) {
    this.listedItemsModel.modifyStoryTextInSense(ofSense, atIndex, newText);
  }

  public itemDrop(event: CdkDragDrop<ListedItemComp>) {
    if (event.previousContainer === event.container) {
      this.listedItemsModel.changeSenseOrder(event.previousIndex, event.currentIndex);
    } else {
      this.listedItemsModel.addSense(event.currentIndex, event.previousContainer.data);
    }
  }
}

