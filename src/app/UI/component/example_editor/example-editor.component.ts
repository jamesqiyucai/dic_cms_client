import {Component, ComponentFactoryResolver, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ExampleEditor} from './example-editor';
import {ExampleComp} from '../../model/example/example-comp.class';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceJournalComponent} from '../example_source/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../example_source/example_source_book/example-source-book.component';
import {SourceDirective} from '../../../toolkit/source_directive/source.directive';
import {ExampleEditorComponentDto} from './example-editor.component.dto';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';
import {italicizeText} from './italicize-text';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css'],
})
export class ExampleEditorComponent implements ExampleEditor, OnInit {
  private example: ExampleComp;
  private _italicizedTextRanges: Array<[number, number]>;
  private _appliedWords: Array<string>;
  private _note;
  private _comment;
  private source: SourceComponent;
  @ViewChild(SourceDirective) private sourceHost: SourceDirective;
  public unlocked: boolean;
  @Output() public readonly exampleChange: EventEmitter<ExampleEditorComponentDto>;

  private static getNormalizedText(text: string) {
    return text.replace(/<i>/g, '').replace(/<\/i>/g, '');
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this.exampleChange = new EventEmitter();
  }

  private loadEmptyExample() {
    this.example = new ExampleComp(null, null, 'Example Text Goes Here', ['新翻译'], []);
    this._italicizedTextRanges = [];
    this._appliedWords = [''];
    this._comment = '';
    this._note = '';
    this.sourceHost.viewContainerRef.clear();
    this.source = null;
  }

  private loadSourceComponent(data?: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
    const viewContainerRef = this.sourceHost.viewContainerRef;
    viewContainerRef.clear();
    this.source = null;
    if (data) {
      switch (data.type) {
        case ExampleSourceComponentTypes.book: {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
          this.source = viewContainerRef.createComponent(componentFactory).instance;
          this.source.dataChange.subscribe(
            (source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) => this.onSourceChange(source)
          );
          this.source.fillData(data);
          break;
        }
        case ExampleSourceComponentTypes.journal: {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
          this.source = viewContainerRef.createComponent(componentFactory).instance;
          this.source.dataChange.subscribe(
            (source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) => this.onSourceChange(source)
          );
          this.source.fillData(data);
          break;
        }
      }
    } else {
      this.onSourceChange(null);
    }
  }

  private onSourceChange(changedSource: ExampleSourceJournalComponentDto | ExampleSourceBookComponentDto) {
    this.onExampleChange(changedSource);
  }

  private onExampleChange(source?: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
    const newExample: ExampleEditorComponentDto = {
      id: this.example.id,
      version: this.example.version,
      text: ExampleEditorComponent.getNormalizedText(this.example.text),
      format: { italics: this.italicizedTextRanges },
      translations: this.example.translations,
      keywords: this.appliedWords,
      comment: this.comment,
      note: this.note,
      source: source ? source : this.source ? this.source.getDto() : null,
    };
    this.exampleChange.emit(newExample);
    console.log('child event fired');
  }

  /**
   * View Methods
   */
  public trackByFn(index: any) {
    return index;
  }

  public get text() {
    return this.example.text;
  }

  public get italicizedTextRanges() {
    return List(this._italicizedTextRanges);
  }

  public get translations() {
    return this.example.translations;
  }

  public get appliedWords() {
    return List(this._appliedWords);
  }

  public get note() {
    return this._note;
  }

  public get comment() {
    return this._comment;
  }

  public get sourceNull() {
    return !this.source;
  }

  public onItalicizedRangesChange(newRanges: Array<[number, number]>) {
    console.log('italic called');
    this._italicizedTextRanges = newRanges;
    this.onExampleChange();
  }

  public onTextModify(newText: string) {
    console.log('text called');

    this.example.text = newText;
    this.onExampleChange();
  }

  public onNoteModify(newNote: string) {
    console.log('note called');

    this._note = newNote;
    this.onExampleChange();
  }

  public onCommentModify(newComment: string) {
    console.log('comment called');

    this._comment = newComment;
    this.onExampleChange();
  }

  public onTranslationModify(atIndex: number, to: string) {
    console.log('trans called');

    this.example.modifyTranslation(atIndex, to);
    this.onExampleChange();
  }

  public onTranslationDrop(event: CdkDragDrop<any>) {
    console.log('trans drop called');

    if (event.previousContainer !== event.container) {
      this.example.addTranslation(event.currentIndex, '新翻译');
    } else {
      this.example.changeTranslationsOrder(event.previousIndex, event.currentIndex);
    }
    this.onExampleChange();
  }

  public onAppliedWordModify(atIndex: number, to: string) {
    console.log('keyword called');

    this._appliedWords[atIndex] = to;
    this.onExampleChange();
  }

  public onAppliedWordDrop(event: CdkDragDrop<any>) {
    console.log('keyword drop called');

    if (event.previousContainer !== event.container) {
      this._appliedWords.splice(event.currentIndex, 0, '');
    } else {
      moveItemInArray(this._appliedWords, event.previousIndex, event.currentIndex);
    }
    this.onExampleChange();
  }

  public onTrashDrop(event: CdkDragDrop<any>) {
    console.log('trash called');

    switch (event.previousContainer.data) {
      case 'translation':
        this.example.deleteTranslation(event.previousIndex);
        break;
      case 'appliedWord':
        this._appliedWords.splice(event.previousIndex, 1);
        break;
    }
    this.onExampleChange();
  }

  public onSourceChoose(type: string) {
    console.log('source choose called');

    switch (type) {
      case ExampleSourceComponentTypes.book: {
        const sourceData: ExampleSourceBookComponentDto = {
          type: ExampleSourceComponentTypes.book,
          author: '',
          title: '',
          page: null,
          initialPublishingYear: null,
          publishedYear: null,
          publishedPlace: '',
        };
        this.loadSourceComponent(sourceData);
        break;
      }
      case ExampleSourceComponentTypes.journal: {
        const sourceData: ExampleSourceJournalComponentDto = {
          type: ExampleSourceComponentTypes.journal,
          author: '',
          title: '',
          page: null,
          passageTitle: '',
          publishingDate: '',
        };
        this.loadSourceComponent(sourceData);
        break;
      }
      case '': {
        this.loadSourceComponent();
        break;
      }
    }
  }

  /**
   * Interface Methods
   */
  public ngOnInit() {
    console.log('editor init');
    // this.loadEmptyExample();
    this.unlock();
  }

  public fillData(
    exampleId: number,
    version: number,
    normalizedText: string,
    italic: List<[number, number]>,
    keywords: List<string>,
    translations: List<string>,
    stories: List<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceJournalComponentDto | ExampleSourceBookComponentDto,
  ) {
    this.example = new ExampleComp(
      exampleId,
      version,
      italicizeText(normalizedText, italic.toArray()),
      translations ? translations.toArray() : null,
      stories ? stories.toArray() : null,
    );
    this._italicizedTextRanges = italic.toArray();
    this._appliedWords = keywords.toArray();
    this._comment = comment;
    this._note = note;
    this.onExampleChange();
    if (source) {
      this.loadSourceComponent(source);
    } else {
      this.loadSourceComponent();
    }
  }

  public getData(): ExampleEditorComponentDto {
    return {
      id: this.example.id,
      version: this.example.version,
      text: ExampleEditorComponent.getNormalizedText(this.example.text),
      format: { italics: this.italicizedTextRanges },
      translations: this.example.translations,
      keywords: this.appliedWords,
      comment: this.comment,
      note: this.note,
      source: this.source ? this.source.getDto() : null,
    };
  }

  public lock(): void {
    this.unlocked = false;
    if (this.source) {
      this.source.lock();
    }
  }

  public unlock(): void {
    this.unlocked = true;
    if (this.source) {
      this.source.unlock();
    }
  }

  public reset(): void {
    this.loadEmptyExample();
  }

}
