import {AfterViewInit, Component, ComponentFactoryResolver, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SourceDirective} from '../../../toolkit/source_directive/source.directive';
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

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {
    this._italicizedExampleText = null;
    this._translations = null;
    this._italicizedTextRanges = null;
    this._appliedWords = null;
    this._note = null;
    this._comment = null;
    this.sourceComponent = null;
  }
  ngOnInit(): void {
    this.handle.$text.subscribe(text => italicizeText(text, this.italicizedTextRanges.toArray()));
    this.handle.$keywords.subscribe(keywords => this.appliedWords = keywords);
    this.handle.$translations.subscribe(translations => this.translations = translations);
    this.handle.$italics.subscribe(italics => this.italicizedTextRanges = italics);
    this.handle.$comment.subscribe(comment => this.comment = comment);
    this.handle.$note.subscribe(note => this.note = note);
    this.handle.$source.subscribe(
      (sourceHandle) => {
        this.sourceComponent = this.sourceComponentFactory.createSourceComponent(sourceHandle.getType());
        this.sourceComponent.sourceHandle = sourceHandle;
      }
    );
  }

  ngAfterViewInit(): void {
    this.sourceComponentFactory = new SourceComponentFactory(this.sourceHost.viewContainerRef, this.componentFactoryResolver);
  }

  private get unlocked() {
    return this._unlocked;
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
  }
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
