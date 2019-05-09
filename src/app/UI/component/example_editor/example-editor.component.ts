import {ChangeDetectorRef, Component, ComponentFactoryResolver, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
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
export class ExampleEditorComponent {
  private _exampleId: number;
  private _exampleVersion: number;
  private _italicizedExampleText: string;
  private _translations: Array<string>;
  private _italicizedTextRanges: Array<[number, number]>;
  private _appliedWords: Array<string>;
  private _note: string;
  private _comment: string;
  private sourceComponent: SourceComponent;

  @ViewChild(SourceDirective) private sourceHost: SourceDirective;
  public unlocked: boolean;
  @Output() public readonly exampleChange: EventEmitter<ExampleEditorComponentDto>;

  // private static getNormalizedText(text: string) {
  //   return text.replace(/<i>/g, '').replace(/<\/i>/g, '');
  // }
  //
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this.exampleChange = new EventEmitter();
  }




  private get exampleId() {
    return this._exampleId;
  }

  private set exampleId(newId: number) {
    if (this.exampleId !== newId) {
      this._exampleId = newId;
      this.fireExampleUpdatedEvent();
    }
  }

  private get exampleVersion() {
    return this._exampleVersion;
  }

  private set exampleVersion(newVersion: number) {
    if (this.exampleVersion !== newVersion) {
      this._exampleVersion = newVersion;
      this.fireExampleUpdatedEvent();
    }
  }

  private get exampleText() {
    return this.italicizedExampleText.replace(/<i>/g, '').replace(/<\/i>/g, '');
  }

  private get italicizedExampleText() {
    return this._italicizedExampleText;
  }

  private set italicizedExampleText(newText: string) {
    if (this.italicizedExampleText !== newText) {
      this._italicizedExampleText = newText;
      this.fireExampleUpdatedEvent();
    }
  }

  private get italicizedTextRanges() {
    return List(this._italicizedTextRanges);
  }

  private set italicizedTextRanges(newRanges: List<[number, number]>) {
    if (!this.italicizedTextRanges.equals(newRanges)) {
      this._italicizedTextRanges = newRanges.toArray();
      this.fireExampleUpdatedEvent();
    }
  }

  private get translations() {
    return List(this._translations);
  }

  private set translations(newTranslations: List<string>) {
    if (!this.translations.equals(newTranslations)) {
      this._translations = newTranslations.toArray();
      this.fireExampleUpdatedEvent();
    }
  }

  private get appliedWords() {
    return List(this._appliedWords);
  }

  private set appliedWords(newWords: List<string>) {
    if (!this.appliedWords.equals(newWords)) {
      this._appliedWords = newWords.toArray();
      this.fireExampleUpdatedEvent();
    }
  }

  private get note() {
    return this._note;
  }

  private set note(newNote: string) {
    if (this.note !== newNote) {
      this._note = newNote;
      this.fireExampleUpdatedEvent();
    }
  }

  private get comment() {
    return this._comment;
  }

  private set comment(newComment: string) {
    if (this.comment !== newComment) {
      this._comment = newComment;
      this.fireExampleUpdatedEvent();
    }
  }


  private get sourceNull() {
    return !this.sourceComponent;
  }


  public init(
    exampleId: number,
    exampleVersion: number,
    exampleText: string,
    italicizedTextRanges: List<[number, number]>,
    translations: List<string>,
    appliedWords: List<string>,
    comment: string,
    note: string,
  ) {
    this._exampleId = exampleId;
    this._exampleVersion = exampleVersion;
    this._italicizedExampleText = italicizeText(exampleText, italicizedTextRanges.toArray());
    this._italicizedTextRanges = italicizedTextRanges.toArray();
    this._translations = translations.toArray();
    this._appliedWords = appliedWords.toArray();
    this._comment = comment;
    this._note = note;
    this.sourceHost.viewContainerRef.clear();
    this.sourceComponent = null;
  }

  private loadNewExampleBookSourceComponent() {
    const viewContainerRef = this.sourceHost.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
    this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
    this.sourceComponent.dataChange.subscribe(() => this.fireExampleUpdatedEvent());
  }

  private loadNewExampleJournalSourceComponent() {
    const viewContainerRef = this.sourceHost.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
    this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
    this.sourceComponent.dataChange.subscribe(() => this.fireExampleUpdatedEvent());
  }

  private killSourceComponent() {
    this.sourceHost.viewContainerRef.clear();
    this.sourceComponent = undefined;
  }

  // private loadSourceComponent(data?: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
  //   if (!_.isEqual(this.sourceComponent ? this.sourceComponent.getDto() : this.sourceComponent, data)) {
  //     const viewContainerRef = this.sourceHost.viewContainerRef;
  //     viewContainerRef.clear();
  //     this.sourceComponent = undefined;
  //     if (data) {
  //       switch (data.type) {
  //         case ExampleSourceComponentTypes.book: {
  //           const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
  //           this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
  //           this.sourceComponent.dataChange.subscribe(
  //             (source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) => this.fireExampleUpdatedEvent(source)
  //           );
  //           this.sourceComponent.update(data);
  //           break;
  //         }
  //         case ExampleSourceComponentTypes.journal: {
  //           const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
  //           this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
  //           this.sourceComponent.dataChange.subscribe(
  //             (source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) => this.fireExampleUpdatedEvent(source)
  //           );
  //           this.sourceComponent.update(data);
  //           break;
  //         }
  //       }
  //     } else {
  //       this.fireExampleUpdatedEvent();
  //     }
  //   }
  // }

  private fireExampleUpdatedEvent() {
    const newExample: ExampleEditorComponentDto = {
      id: this.exampleId,
      version: this.exampleVersion,
      text: this.exampleText,
      format: { italics: this.italicizedTextRanges },
      translations: this.translations,
      keywords: this.appliedWords,
      comment: this.comment,
      note: this.note,
      source: this.sourceComponent ? this.sourceComponent.getDto() : null,
    };
    this.exampleChange.emit(newExample);
  }

  /**
   * View Methods
   */
  private trackByFn(index: any) {
    return index;
  }

  private onItalicizedRangesChange(newRanges: List<[number, number]>) {
    this.italicizedTextRanges = newRanges;
  }

  private onTextModify(newText: string) {
    this.italicizedExampleText = newText;
  }

  private onNoteModify(newNote: string) {
    this.note = newNote;
  }

  private onCommentModify(newComment: string) {
    this.comment = newComment;
  }

  private onTranslationModify(atIndex: number, to: string) {
    this.translations = this.translations.update(atIndex, () => to);
  }

  private onTranslationDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this.translations = this.translations.insert(event.currentIndex, '新翻译');
    } else {
      const array = this.translations.toArray();
      moveItemInArray(array, event.previousIndex, event.currentIndex);
      this.translations = List(array);
    }
  }

  private onAppliedWordModify(atIndex: number, to: string) {
    this.appliedWords = this.appliedWords.update(atIndex, () => to);
  }

  private onAppliedWordDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this.appliedWords = this.appliedWords.insert(event.currentIndex, 'Keyword');
    } else {
      const array = this.appliedWords.toArray();
      moveItemInArray(array, event.previousIndex, event.currentIndex);
      this.appliedWords = List(array);
    }
  }

  public onTrashDrop(event: CdkDragDrop<any>) {
    switch (event.previousContainer.data) {
      case 'translation':
        this.translations = this.translations.delete(event.previousIndex);
        break;
      case 'appliedWord':
        this.appliedWords = this.appliedWords.delete(event.previousIndex);
        break;
    }
  }

  private onSourceChoose(type: string) {
    let previousData: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
    if (this.sourceComponent) {
      previousData = this.sourceComponent.getDto();
    }
    switch (type) {
      case ExampleSourceComponentTypes.book: {
        const sourceData: ExampleSourceBookComponentDto = {
          type: ExampleSourceComponentTypes.book,
          author: previousData ? previousData.author : '',
          title: previousData ? previousData.title : '',
          page: previousData ? previousData.page : null,
          initialPublishingYear: null,
          publishedYear: null,
          publishedPlace: '',
        };
        this.loadNewExampleBookSourceComponent();
        this.sourceComponent.update(sourceData);
        break;
      }
      case ExampleSourceComponentTypes.journal: {
        const sourceData: ExampleSourceJournalComponentDto = {
          type: ExampleSourceComponentTypes.journal,
          author: previousData ? previousData.author : '',
          title: previousData ? previousData.title : '',
          page: previousData ? previousData.page : null,
          passageTitle: '',
          publishingDate: '',
        };
        this.loadNewExampleJournalSourceComponent();
        this.sourceComponent.update(sourceData);
        break;
      }
      case '': {
        this.killSourceComponent();
        break;
      }
    }
  }

  /**
   * Interface Methods
   */

  public update(
    exampleId: number,
    version: number,
    normalizedText: string,
    italics: List<[number, number]>,
    keywords: List<string>,
    translations: List<string>,
    stories: List<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceJournalComponentDto | ExampleSourceBookComponentDto,
  ) {
    this.exampleId = exampleId;
    this.exampleVersion = version;
    this.italicizedExampleText = italicizeText(normalizedText, italics.toArray());
    this.italicizedTextRanges = italics;
    this.appliedWords = keywords;
    this.comment = comment;
    this.note = note;
    if (source) {
      switch (source.type) {
        case ExampleSourceComponentTypes.book: {
          this.loadNewExampleBookSourceComponent();
          this.sourceComponent.update(source);
          break;
        }
        case ExampleSourceComponentTypes.journal: {
          this.loadNewExampleJournalSourceComponent();
          this.sourceComponent.update(source);
          break;
        }
      }
    } else {
      this.killSourceComponent();
    }
  }

  public getData(): ExampleEditorComponentDto {
    return {
      id: this.exampleId,
      version: this.exampleVersion,
      text: this.exampleText,
      format: { italics: this.italicizedTextRanges },
      translations: this.translations,
      keywords: this.appliedWords,
      comment: this.comment,
      note: this.note,
      source: this.sourceComponent ? this.sourceComponent.getDto() : null,
    };
  }

  public lock(): void {
    this.unlocked = false;
    if (this.sourceComponent) {
      this.sourceComponent.lock();
    }
  }

  public unlock(): void {
    this.unlocked = true;
    if (this.sourceComponent) {
      this.sourceComponent.unlock();
    }
  }

  public reset(): void {
  }


}
