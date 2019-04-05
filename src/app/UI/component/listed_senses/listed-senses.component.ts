import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {OntologyService} from '../../../core/ontology/ontology.service.interface';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {OntologyServiceImplementation} from '../../../core/ontology/ontology-service.implementation';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleComp} from '../../model/example/example-comp.class';
import {SenseCompFactoryImpl} from '../../model/sense/sense-comp-factory.class';
import {SensePositionCompFactoryImpl} from '../../model/sense-position/sense-position-comp-factory.class';
import {ExampleCompFactoryImpl} from '../../model/example/example-comp-factory.class';
import {ID_SERVICE} from '../../../service/word_builder/tokens';
import {ONTOLOGY_SERVICE} from '../../../core/tokens';
import {EXAMPLE_FACTORY} from '../../model/example/injection-token';
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
import {CdkDragDrop, copyArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {List} from 'immutable';
import {SenseComp} from '../../model/sense/sense-comp.class';
import {ExamplePosition} from './positions/example-position.class';
import {ExampleStoryPosition} from './positions/example-story-position.class';
import {SenseStoryPosition} from './positions/sense-story-position.class';
import {SensePosition} from './positions/sense-position.class';

@Component({
  selector: 'app-listed-senses',
  templateUrl: './listed-senses.component.html',
  styleUrls: ['./listed-senses.component.css'],
  providers: [
    {provide: ID_SERVICE, useClass: IDServiceImpl},
    {provide: ONTOLOGY_SERVICE, useClass: OntologyServiceImplementation},
    {provide: LISTED_ITEM_FACTORY, useClass: ListedItemCompFactoryImpl},
    {provide: SENSE_FACTORY, useClass: SenseCompFactoryImpl},
    {provide: SENSE_POSITION_FACTORY, useClass: SensePositionCompFactoryImpl},
    {provide: EXAMPLE_FACTORY, useClass: ExampleCompFactoryImpl},
    {provide: STORY_FACTORY, useClass: StoryCompFactoryImpl}
  ]
})
export class ListedSensesComponent implements OnInit {
  private _items: ListedItemComp[] = [this.listedItemFactory.createNewListedItem(true)];
  readonly senseBase: SenseComp = this.listedItemFactory.createNewListedItem(true).sense;
  readonly exampleBase: ExampleComp = this.exampleFactory.createNewExample();
  public senseDropListDisabled = false;
  constructor(
    @Inject(ONTOLOGY_SERVICE) private ontologyService: OntologyService,
    @Inject(EXAMPLE_FACTORY) private exampleFactory: ExampleCompFactory,
    @Inject(STORY_FACTORY) private storyFactory: StoryCompFactory,
    @Inject(LISTED_ITEM_FACTORY) private listedItemFactory: ListedItemCompFactory,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public get items() {
    return List(this._items);
  }

  // Methods on Separator
  public addSeparator(atIndex: number, separator: ListedItemComp): void {
    this._items.splice(atIndex, 0, separator);
  }

  public deleteSeparator(atIndex: number): void {
    this._items.splice(atIndex, 1);
  }

  // Methods on Sense
  public addSense(atIndex: number, newSense: ListedItemComp): void {
    this._items.splice(atIndex, 0, newSense);
  }

  public deleteSense(atIndex: number): void {
    this._items.splice(atIndex, 1);
  }

  public changeSenseOrder(fromIndex: number, toIndex: number): void {
    moveItemInArray(this._items, fromIndex, toIndex);
  }

  public modifySenseSummary(atIndex: number, to: string): void {
    this._items[atIndex].sense.summary = to;
  }

  public modifySenseText(atIndex: number, to: string): void {
    this._items[atIndex].sense.text = to;
  }

  public addSenseTag(toSense: number): void {
    this._items[toSense].sense.addTag(1);
  }

  public deleteSenseTag(fromSense: number, atIndex: number): void {
    this._items[fromSense].sense.deleteTag(atIndex);
  }

  public modifySenseTag(atSense: number, atIndex: number, to: number): void {
    this._items[atSense].sense.modifyTag(atIndex, to);
  }

  public changeSenseTagOrder(atSense: number, fromIndex: number, toIndex: number): void {
    this._items[atSense].sense.changeTagsOrder(fromIndex, toIndex);
  }

  public addSenseTranslation(atSense: number): void {
    this._items[atSense].sense.addTranslation(atSense, '');
  }

  public modifySenseTranslation(atSense: number, atIndex: number, to: string) {
    this._items[atSense].sense.modifyTranslation(atIndex, to);
  }

  public deleteSenseTranslation(atSense: number, atIndex: number): void {
    this._items[atSense].sense.deleteTranslation(atIndex);
  }

  public changeSenseTranslationOrder(atSense: number, fromIndex: number, toIndex: number): void {
    this._items[atSense].sense.changeTranslationsOrder(fromIndex, toIndex);
  }

  // Methods on Example
  public addExample(toItem: number, atIndex: number, newExample: ExampleComp): void {
    this._items[toItem].sense.addExample(atIndex, newExample);
  }

  public deleteExample(fromItem: number, atIndex: number): void {
    this._items[fromItem].sense.deleteExample(atIndex);
  }

  public changeExampleOrder(ofItem: number, fromIndex: number, toIndex: number): void {
    this._items[ofItem].sense.changeExamplesOrder(fromIndex, toIndex);
  }

  public modifyExampleText(atExample: number, ofSense: number, to: string): void {
    this._items[ofSense].sense.examples[atExample].text = to;
  }

  public modifyExampleTranslation(inSense: number, example: number, atIndex: number, to: string): void {
    this._items[inSense].sense.modifyExampleTranslation(example, atIndex, to);
  }

  public addExampleTranslation(inSense: number, toExample: number, atIndex: number): void {
    this._items[inSense].sense.addExampleTranslation(toExample, atIndex, '');
  }

  public deleteExampleTranslation(inSense: number, fromExample: number, atIndex: number): void {
    this._items[inSense].sense.deleteExampleTranslation(fromExample, atIndex);
  }

  public changeExampleTranslationOrder(inSense: number, atIndex: number, fromIndex: number, toIndex: number): void {
    this._items[inSense].sense.changeExampleTranslationOrder(atIndex, fromIndex, toIndex);
  }

  // Methods on Story
  public addStoryToExample(index: number, ofItem: number, atIndex: number, newStory: StoryComp): void {
    this._items[ofItem].sense.addExampleStory(index, atIndex, newStory);
  }

  public addStoryToSense(index: number, atIndex: number, newStory): void {
    this._items[index].sense.addStory(atIndex, newStory);
  }

  public deleteStoryFromExample(index: number, ofItem: number, atIndex: number): void {
    this._items[ofItem].sense.deleteExampleStory(index, atIndex);
  }

  public deleteStoryFromSense(index: number, atIndex: number): void {
    this._items[index].sense.deleteStory(atIndex);
  }

  public modifyStoryTitleInSense(index: number, atIndex: number, to: string): void {
    this._items[index].sense.modifyStoryTitle(atIndex, to);
  }

  public modifyStoryTextInSense(index: number, atIndex: number, to: string): void {
    this._items[index].sense.modifyStoryText(atIndex, to);
  }

  public modifyStoryTitleInExample(index: number, inSense: number, atIndex: number, to: string): void {
    this._items[inSense].sense.modifyExampleStoryTitle(index, atIndex, to);
  }

  public modifyStoryTextInExample(index: number, inSense: number, atIndex: number, to: string): void {
    this._items[inSense].sense.modifyExampleStoryText(index, atIndex, to);
  }

  public changeStoryOrderInExample(index: number, ofItem: number, fromIndex: number, toIndex: number): void {
    this._items[ofItem].sense.changeExampleStoryOrder(index, fromIndex, toIndex);
  }

  public changeStoryOrderInSense(index: number, fromIndex: number, toIndex: number): void {
    this._items[index].sense.changeStoryOrder(fromIndex, toIndex);
  }

  public itemDrop(event: CdkDragDrop<ListedItemComp>) {
    if (event.item.data.type === 'SENSE') {
      console.log('sense dropped');
      if (event.previousContainer === event.container) {
        moveItemInArray(this._items, event.previousIndex, event.currentIndex);
      } else {
        this._items.splice(event.currentIndex, 0, this.listedItemFactory.createNewListedItem(true));
      }
    }
  }

  public getSensePosition(senseIndex: number): SensePosition {
    return new SensePosition(senseIndex);
  }

  public getExamplePosition(senseIndex: number, exampleIndex: number): ExamplePosition {
    return new ExamplePosition(senseIndex, exampleIndex);
  }

  public getSenseStoryPosition(senseIndex: number, storyIndex: number): SenseStoryPosition {
    return new SenseStoryPosition(senseIndex, storyIndex);
  }

  public getExampleStoryPosition(senseIndex: number, exampleIndex: number, storyIndex: number): ExampleStoryPosition {
    return new ExampleStoryPosition(senseIndex, exampleIndex, senseIndex);
  }

  public throwAway(event: CdkDragDrop<any>) {
    if (event.item.data instanceof ExamplePosition) {
      this.deleteExample(event.previousContainer.data, event.previousIndex);
    } else if (event.item.data instanceof ExampleStoryPosition) {
      this.deleteStoryFromExample(event.item.data.exampleIndex, event.item.data.senseIndex, event.item.data.storyIndex);
    } else if (event.item.data instanceof SenseStoryPosition) {
      this.deleteStoryFromSense(event.item.data.senseIndex, event.item.data.storyIndex);
    } else if (event.item.data instanceof SensePosition) {
      this.deleteSense(event.item.data.senseIndex);
    }
  }
}

