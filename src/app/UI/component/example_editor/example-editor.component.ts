import {Component, ComponentFactoryResolver, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ExampleEditor} from './example-editor';
import {ExampleComp} from '../../model/example/example-comp.class';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import * as _ from 'lodash';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceJournalComponent} from '../example_source/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../example_source/example_source_book/example-source-book.component';
import {SourceDirective} from '../../../toolkit/source_directive/source.directive';
import {ExampleSourceBookComponentModel} from '../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../model/example_source_journal/example-source-journal-component.model';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css'],
})
export class ExampleEditorComponent implements ExampleEditor, OnInit {
  private example: ExampleComp;
  private italicizedTextRanges: Array<[number, number]>;
  private _appliedWords: Array<string>;
  private _note;
  private _comment;
  private source: SourceComponent;
  @ViewChild(SourceDirective) private sourceHost: SourceDirective;
  public unlocked: boolean;
  @Output() public readonly exampleChange: EventEmitter<>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
  ) {}

  private loadEmptyExample() {
    this.example = new ExampleComp(null, null, 'Example Text Goes Here', ['新翻译'], []);
    this.italicizedTextRanges = [];
    this._appliedWords = [''];
    this._comment = '';
    this._note = '';
    this.loadSource();
    this.unlock();
  }

  private loadSource(data?: ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel) {
    const viewContainerRef = this.sourceHost.viewContainerRef;
    viewContainerRef.clear();
    this.source = null;
    if (data) {
      switch (data.type) {
        case 'book': {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
          this.source = viewContainerRef.createComponent(componentFactory).instance;
          this.source.fillData(data);
          this.source.dataChange.subscribe(
            (source: ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel) => this.onSourceChange(source)
          );
          break;
        }
        case 'journal': {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
          this.source = viewContainerRef.createComponent(componentFactory).instance;
          this.source.fillData(data);
          this.source.dataChange.subscribe(
            (source: ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel) => this.onSourceChange(source)
          );
          break;
        }
      }
    } else {
      this.onSourceChange();
    }
  }

  private onSourceChange(data?: ExampleSourceJournalComponentModel | ExampleSourceBookComponentModel) {
    if (data) {
      this.onExampleChange(data);
    } else {
      this.onExampleChange();
    }
  }

  public trackByFn(index: any, item: any) {
    return index;
  }

  private getUnitalicizedText(text: string) {
    return text.replace(/<i>/g, '').replace(/<\/i>/g, '');
  }

  private onExampleChange(source?: ExampleSourceBookComponentModel | ExampleSourceJournalComponentModel) {
    let newExample;
    if (source) {
      newExample = {
        id: this.example.id,
        version: this.example.version,
        text: this.getUnitalicizedText(this.example.text),
        format: { italics: this.italicizedTextRanges },
        translations: this.example.translations,
        keywords: this._appliedWords,
        comment: this._comment,
        note: this._note,
        source: source
      };
    } else {
      newExample = {
        id: this.example.id,
        version: this.example.version,
        text: this.getUnitalicizedText(this.example.text),
        format: { italics: this.italicizedTextRanges },
        translations: this.example.translations,
        keywords: this._appliedWords,
        comment: this._comment,
        note: this._note,
        source: null,
      };
    }
    this.exampleChange.emit(newExample);
  }

  /**
   * View Methods
   */
  public get text() {
    return this.example.text;
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

  public onItalicizedRangesChange(newRanges: Array<[number, number]>) {
    this.italicizedTextRanges = newRanges;
  }

  public onTextModify(newText: string) {
    this.example.text = newText;
  }

  public onNoteModify(newNote: string) {
    this._note = newNote;
  }

  public onCommentModify(newComment: string) {
    this._comment = newComment;
  }

  public onTranslationModify(atIndex: number, to: string) {
    this.example.modifyTranslation(atIndex, to);
  }

  public onTranslationDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this.example.addTranslation(event.currentIndex, '新翻译');
    } else {
      this.example.changeTranslationsOrder(event.previousIndex, event.currentIndex);
    }
  }

  public onAppliedWordModify(atIndex: number, to: string) {
    this._appliedWords[atIndex] = to;
  }

  public onAppliedWordDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this._appliedWords.splice(event.currentIndex, 0, '');
    } else {
      moveItemInArray(this._appliedWords, event.previousIndex, event.currentIndex);
    }
  }

  public onTrashDrop(event: CdkDragDrop<any>) {
    switch (event.previousContainer.data) {
      case 'translation':
        this.example.deleteTranslation(event.previousIndex);
        break;
      case 'appliedWord':
        this._appliedWords.splice(event.previousIndex, 1);
        break;
    }
  }

  public onSourceChoose(sourceType: string) {
    this.loadSource(sourceType);
    this.source.unlock();
  }

  /**
   * Interface Methods
   */
  public ngOnInit() {
    this.loadEmptyExample();
    // const proposalServ = this.exampleProposalService.getNewExampleProposalServ(
    //   this.text,
    //   this.italicizedTextRanges,
    //   this.translations.toArray(),
    //   this.appliedWords.toArray(),
    //   this.note,
    //   this.comment,
    //   undefined
    // );
    // this.identifier = proposalServ.identifier;
    // this.exampleProposalService.createExampleProposalInService(proposalServ);
    // this.exampleProposalService.subscribeToExampleProposalInService(this.identifier, proposal => {
    //   this.example = new ExampleComp(
    //     null,
    //     null,
    //     ItalicizeText(proposal.text, proposal.format.italic),
    //     proposal.translations,
    //     []
    //   );
    //   this.italicizedTextRanges = proposal.format.italic;
    //   this._appliedWords = proposal.keywords;
    //   this._note = proposal.note;
    //   this._comment = proposal.comment;
    //   if (proposal.source) {
    //     this.loadSource(proposal.source.type, {
    //       author: proposal.source.author,
    //       title: proposal.source.title,
    //       page: proposal.source.page,
    //       initialPublishingYear: proposal.source.initialPublishingYear,
    //       publishedYear: proposal.source.publishedYear,
    //       publishedPlace: proposal.source.publishedPlace,
    //       passageTitle: proposal.source.passageTitle,
    //       publishingDate: proposal.source.publishingDate
    //     });
    //     this.source.unlock();
    //   } else {
    //     this.loadSource('');
    //   }
    // });
  }

  public fillData(
    exampleId: number,
    text: string,
    italic: Array<[number, number]>,
    keywords: Array<string>,
    translations: Array<string>,
    stories: Array<StoryComp>,
    note: string,
    comment: string,
    source: {
      type: string,
      author: string,
      title: string,
      page: number,
      initialPublishingYear?: number,
      publishedYear?: number,
      publishedPlace?: string,
      passageTitle?: string,
      publishingDate?: string
    }
  ) {
    this.example = new ExampleComp(
      exampleId,
      null,
      text,
      translations,
      stories
    );
    this.italicizedTextRanges = italic;
    this._appliedWords = keywords;
    this._comment = comment;
    this._note = note;
    this.loadSource(source ? source.type : '', source);
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
