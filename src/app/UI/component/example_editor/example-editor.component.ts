import {AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ExampleSourceJournalComponent} from '../example_source/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../example_source/example_source_book/example-source-book.component';
import {SourceDirective} from '../../../toolkit/source_directive/source.directive';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';
import {italicizeText} from './italicize-text';
import {USER_SERVICE, UserService} from '../../../core';
import {SourceComponentFactory} from '../example_source/source-component-factory';
import {ExampleHandle} from '../../../service/example';
import {SourceComponent} from '../example_source/abstract_source/source-component';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css'],
})
export class ExampleEditorComponent implements OnInit, AfterViewInit {
  @Input() private handle: ExampleHandle;
  private _ID: number;
  private _unlocked: boolean;
  private _italicizedExampleText: string;
  private _translations: Array<{id: number, text: string}>;
  private _italicizedTextRanges: Array<[number, number]>;
  private _appliedWords: Array<string>;
  private _note: string;
  private _comment: string;
  private sourceComponent: SourceComponent;
  private sourceComponentFactory: SourceComponentFactory;
  @ViewChild(SourceDirective) private sourceHost: SourceDirective;

  // @Output() public readonly idChange: EventEmitter<number>;
  // @Output() public readonly versionChange: EventEmitter<number>;
  // @Output() public readonly textChange: EventEmitter<string>;
  // @Output() public readonly italicizedTextRangesChange: EventEmitter<List<[number, number]>>;
  // @Output() public readonly translationsChange: EventEmitter<List<{id: number, text: string}>>;
  // @Output() public readonly keywordsChange: EventEmitter<List<string>>;
  // @Output() public readonly noteChange: EventEmitter<string>;
  // @Output() public readonly commentChange: EventEmitter<string>;
  // @Output() public readonly sourceChange: EventEmitter<ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this._exampleId = null;
    this._exampleVersion = null;
    this._italicizedExampleText = null;
    this._translations = null;
    this._italicizedTextRanges = null;
    this._appliedWords = null;
    this._note = null;
    this._comment = null;
    this.sourceComponent = null;
    // this.idChange = new EventEmitter();
    // this.versionChange = new EventEmitter();
    // this.textChange = new EventEmitter();
    // this.italicizedTextRangesChange = new EventEmitter();
    // this.translationsChange = new EventEmitter();
    // this.keywordsChange = new EventEmitter();
    // this.noteChange = new EventEmitter();
    // this.commentChange = new EventEmitter();
    // this.sourceChange = new EventEmitter();
  }
  ngOnInit(): void {
    this.handle.$ID.subscribe(ID => this.ID = ID);
    this.handle.$text.subscribe(text => italicizeText(text, this.italicizedTextRanges.toArray()));
    this.handle.$keywords.subscribe(keywords => this.appliedWords = keywords);
    this.handle.$translations.subscribe(translations => this.translations = translations);
    this.handle.$italics.subscribe(italics => this.italicizedTextRanges = italics);
    this.handle.$comment.subscribe(comment => this.comment = comment);
    this.handle.$note.subscribe(note => this.note = note);
  }

  ngAfterViewInit(): void {
    this.sourceComponentFactory = new SourceComponentFactory(this.sourceHost.viewContainerRef, this.componentFactoryResolver);
  }

  private get unlocked() {
    return this._unlocked;
  }

  private get ID() {
    return this._ID;
  }

  private set ID(newID: number) {
    if (this.ID !== newID) {
      this.ID = newID;
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
      this.handle.text = this.exampleText;
    }
  }

  private get italicizedTextRanges() {
    return List(this._italicizedTextRanges);
  }

  private set italicizedTextRanges(newRanges: List<[number, number]>) {
    if (!this.italicizedTextRanges.equals(newRanges)) {
      this._italicizedTextRanges = newRanges.toArray();
      this.handle.italics = newRanges;
    }
  }

  private get translations() {
    return List(this._translations);
  }

  private set translations(newTranslations: List<{id: number, text: string}>) {
    if (!this.translations.equals(newTranslations)) {
      this._translations = newTranslations.toArray();
      this.handle.translations = newTranslations;
    }
  }

  private get appliedWords() {
    return List(this._appliedWords);
  }

  private set appliedWords(newWords: List<string>) {
    if (!this.appliedWords.equals(newWords)) {
      this._appliedWords = newWords.toArray();
      this.handle.keywords = newWords;
    }
  }

  private get note() {
    return this._note;
  }

  private set note(newNote: string) {
    if (this.note !== newNote) {
      this._note = newNote;
      this.handle.note = newNote;
    }
  }

  private get comment() {
    return this._comment;
  }

  private set comment(newComment: string) {
    if (this.comment !== newComment) {
      this._comment = newComment;
      this.handle.comment = newComment;
    }
  }

  private get sourceNull() {
    return !this.sourceComponent;
  }
  private loadSourceComponent() {
    this.sourceComponentFactory.createSourceComponent(this.handle.source.getType());
  }

  // private loadNewExampleBookSourceComponent() {
  //   const viewContainerRef = this.sourceHost.viewContainerRef;
  //   viewContainerRef.clear();
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
  //   this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
  //   this.sourceComponent.dataChange.subscribe((dto: ExampleSourceBookComponentDto) => this.sourceChange.emit(dto));
  // }
  //
  // private loadNewExampleJournalSourceComponent() {
  //   const viewContainerRef = this.sourceHost.viewContainerRef;
  //   viewContainerRef.clear();
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
  //   this.sourceComponent = viewContainerRef.createComponent(componentFactory).instance;
  //   this.sourceComponent.dataChange.subscribe((dto: ExampleSourceJournalComponentDto) => this.sourceChange.emit(dto));
  // }
  //
  // private loadSourceComponentBasedOnData(source: ExampleSourceJournalComponentDto | ExampleSourceBookComponentDto) {
  //   switch (source.type) {
  //     case ExampleSourceComponentTypes.book: {
  //       this.loadNewExampleBookSourceComponent();
  //       this.sourceComponent.update(source);
  //       break;
  //     }
  //     case ExampleSourceComponentTypes.journal: {
  //       this.loadNewExampleJournalSourceComponent();
  //       this.sourceComponent.update(source);
  //       break;
  //     }
  //   }
  // }

  private killSourceComponent() {
    this.sourceHost.viewContainerRef.clear();
    this.sourceComponent = null;
  }


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
    this.translations = this.translations.update(atIndex, (translation) => {
      return {
        id: translation.id,
        text: to
      };
    });
  }

  private onTranslationDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this.translations = this.translations.insert(event.currentIndex, {id: undefined, text: '新翻译'});
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
    if (type) {
      this.sourceComponent = this.sourceComponentFactory.createSourceComponent(type);
      this.sourceComponent.sourceHandle = this.handle.source;
    } else {
      this.killSourceComponent();
    }
    // let previousData: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
    // if (this.sourceComponent) {
    //   previousData = this.sourceComponent.getDto();
    // }
    // switch (type) {
    //   case ExampleSourceComponentTypes.book: {
    //     this.loadNewExampleBookSourceComponent();
    //     this.sourceComponent.update({
    //       type: ExampleSourceComponentTypes.book,
    //       author: previousData ? previousData.author : null,
    //       title: previousData ? previousData.title : null,
    //       page: previousData ? previousData.page : null,
    //       initialPublishingYear: null,
    //       publishedPlace: null,
    //       publishedYear: null,
    //     });
    //     break;
    //   }
    //   case ExampleSourceComponentTypes.journal: {
    //     this.loadNewExampleJournalSourceComponent();
    //     this.sourceComponent.update({
    //       type: ExampleSourceComponentTypes.book,
    //       author: previousData ? previousData.author : null,
    //       title: previousData ? previousData.title : null,
    //       page: previousData ? previousData.page : null,
    //       passageTitle: null,
    //       publishingDate: null,
    //     });
    //     break;
    //   }
    //   case '': {
    //     this.killSourceComponent();
    //     break;
    //   }
    // }
  }


  // public update(
  //   exampleId: number,
  //   version: number,
  //   normalizedText: string,
  //   italics: List<[number, number]>,
  //   keywords: List<string>,
  //   translations: List<{id: number, text: string}>,
  //   note: string,
  //   comment: string,
  //   source: ExampleSourceJournalComponentDto | ExampleSourceBookComponentDto,
  // ) {
  //   this.exampleId = exampleId;
  //   this.exampleVersion = version;
  //   this.italicizedExampleText = italicizeText(normalizedText, italics.toArray());
  //   this.italicizedTextRanges = italics;
  //   this.translations = translations;
  //   this.appliedWords = keywords;
  //   this.comment = comment;
  //   this.note = note;
  //
  //   if (this.sourceComponent || source) {
  //     if (this.sourceComponent && source) {
  //       if (this.sourceComponent.getDto().type === source.type) {
  //         this.sourceComponent.update(source);
  //       } else {
  //         this.loadSourceComponentBasedOnData(source);
  //       }
  //
  //     } else if (!this.sourceComponent) {
  //       this.loadSourceComponentBasedOnData(source);
  //     } else {
  //       this.killSourceComponent();
  //     }
  //   }
  // }
  //
  // public getData(): ExampleEditorComponentDto {
  //   return {
  //     id: this.exampleId,
  //     version: this.exampleVersion,
  //     text: this.exampleText,
  //     format: { italics: this.italicizedTextRanges },
  //     translations: this.translations,
  //     keywords: this.appliedWords,
  //     comment: this.comment,
  //     note: this.note,
  //     source: this.sourceComponent ? this.sourceComponent.getDto() : null,
  //   };
  // }

  public lock(): void {
    this._unlocked = false;
    if (this.sourceComponent) {
      this.sourceComponent.lock();
    }
  }

  public unlock(): void {
    this._unlocked = true;
    if (this.sourceComponent) {
      this.sourceComponent.unlock();
    }
  }

}
