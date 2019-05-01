import {Component, ComponentFactoryResolver, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ExampleEditor} from './example-editor.interface';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal-service.interface';
import {ExampleComp} from '../../model/example/example-comp.class';
import {EXAMPLE_SERVICE} from '../../../service/entity/example/injection-token';
import {ExampleService} from '../../../service/entity/example/example-service.interface';
import {USER_SERVICE} from '../../../core/user/injection-token';
import {UserService} from '../../../core/user/user-service.interface';
import {ItalicizeText} from './italicize-text-range.function';
import * as _ from 'lodash';
import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceBookComponentModel} from '../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../model/example_source_journal/example-source-journal-component.model';
import {ExampleSourceJournalComponent} from '../example_source/example_source_journal/example-source-journal.component';
import {ExampleSourceBookComponent} from '../example_source/example_source_book/example-source-book.component';
import {SourceDirective} from '../../../toolkit/source_directive/source.directive';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css'],
})
export class ExampleEditorComponent implements ExampleEditor, OnInit, OnDestroy {
  private identifier: number;
  private example: ExampleComp;
  private italicizedTextRanges: Array<[number, number]>;
  private _appliedWords: Array<string>;
  private _note;
  private _comment;
  private source: SourceComponent;
  @ViewChild(SourceDirective) sourceHost: SourceDirective;
  @Input() public editingEnabled;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(USER_SERVICE) private userService: UserService,
    @Inject(EXAMPLE_SERVICE) private exampleService: ExampleService
  ) {}

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

  public onItalicizedRangesChange(ranges: Array<[number, number]>) {
    this.italicizedTextRanges = ranges;
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
    this.source.enableEditing();
  }

  /**
   * Helper Methods
   */
  // private updateProposalServiceData() {
  //   this.exampleProposalService.updateExampleProposalInService(
  //     this.identifier,
  //     this.exampleProposalService.getNewExampleProposalServ(
  //       this.getUnitalicizedText(this.text),
  //       this.italicizedTextRanges,
  //       this.translations.toArray(),
  //       this.appliedWords.toArray(),
  //       this.note,
  //       this.comment,
  //       this.source ? this.source.getData() : undefined
  //     )
  //   );
  // }

  private loadSource(type: string, data?: {
    author: string,
    title: string,
    page: number,
    initialPublishingYear?: number,
    publishedYear?: number,
    publishedPlace?: string,
    passageTitle?: string,
    publishingDate?: string
  }) {
    const viewContainerRef = this.sourceHost.viewContainerRef;
    viewContainerRef.clear();
    switch (type) {
      case 'book': {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
        this.source = viewContainerRef.createComponent(componentFactory).instance;
        if (data) {
          this.source.fillData(
            data.author,
            data.title,
            data.page,
            data.initialPublishingYear,
            data.publishedYear,
            data.publishedPlace,
            null,
            null
          );
        }
        break;
      }
      case 'journal': {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
        this.source = viewContainerRef.createComponent(componentFactory).instance;
        if (data) {
          this.source.fillData(
            data.author,
            data.title,
            data.page,
            null,
            null,
            null,
            data.passageTitle,
            `${data.publishingDate.slice(0, 3)}-${data.publishingDate.slice(4, 5)}-${data.publishingDate.slice(6, 7)}`
          );
        }
        break;
      }
      default: {
        this.source = undefined;
      }
    }
  }

  private loadEmptyExample() {
    this.example = new ExampleComp(null, null, 'Example Text Goes Here', ['新翻译'], []);
    this.italicizedTextRanges = [];
    this._appliedWords = [''];
    this._comment = '';
    this._note = '';
    this.source = undefined;
  }

  public trackByFn(index: any, item: any) {
    return index;
  }

  private getUnitalicizedText(text: string) {
    return text.replace(/<i>/g, '').replace(/<\/i>/g, '');
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
    // this.exampleProposalService.createNewExampleProposalInService(proposalServ);
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
    //     this.source.enableEditing();
    //   } else {
    //     this.loadSource('');
    //   }
    // });
  }

  public ngOnDestroy(): void {
  }

  public getData() {
    return _.cloneDeep({
      exampleId: this.example.id,
      version: this.example.version,
      text: this.example.text,
      italic: this.italicizedTextRanges,
      keywords: this._appliedWords,
      translations: this.example.translations.toArray(),
      stories: this.example.stories.toArray(),
      note: this.note,
      comment: this.comment,
      source: this.source ? this.source.getData() : undefined
    });
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

  // public loadPersistentExampleProposal(id: number): void {
  //   this.exampleProposalService.getPersistentExampleProposal(id).subscribe(data => {
  //     const proposalServ = this.exampleProposalService.getNewExampleProposalServ(
  //       data.text,
  //       data.format.italic,
  //       data.translations,
  //       data.keywords,
  //       data.note,
  //       data.comment,
  //       data.source
  //     );
  //     this.exampleProposalService.createNewExampleProposalInService(proposalServ);
  //     this.identifier = proposalServ.identifier;
  //     this.exampleProposalService.subscribeToExampleProposalInService(this.identifier, proposal => {
  //       this.example = new ExampleComp(
  //         null,
  //         null,
  //         ItalicizeText(proposal.text, proposal.format.italic),
  //         proposal.translations,
  //         []
  //       );
  //       this.italicizedTextRanges = proposal.format.italic;
  //       this._appliedWords = proposal.keywords;
  //       this._note = proposal.note;
  //       this._comment = proposal.comment;
  //       this.loadSource(proposal.source.type, {
  //         author: proposal.source.author,
  //         title: proposal.source.title,
  //         page: proposal.source.page,
  //         initialPublishingYear: proposal.source.initialPublishingYear,
  //         publishedYear: proposal.source.publishedYear,
  //         publishedPlace: proposal.source.publishedPlace,
  //         passageTitle: proposal.source.passageTitle,
  //         publishingDate: proposal.source.publishingDate
  //       });
  //     });
  //   });
  // }

  // public approvePersistentExampleProposal() {
  //   this.exampleProposalService.approvePersistentExampleProposal(this.identifier).subscribe(() => {
  //     this.refresh();
  //   });
  // }

  // public rejectPersistentExampleProposal() {
  //   this.exampleProposalService.rejectPersistentExampleProposal(this.identifier).subscribe(() => {
  //     this.refresh();
  //   });
  // }

  public createExampleInService() {
    const newServiceExample = this.exampleService.getNewExample(
      this.example.id,
      this.example.version,
      this.example.text,
      this.italicizedTextRanges,
      this.translations.toArray(),
      this.appliedWords.toArray(),
      this.comment,
      this.note,
      this.source ? this.source.getData() : undefined
    );
  }

  public loadPersistentExample(id: number): void {
    this.exampleService.getPersistentExample(id).subscribe(data => {
      this.example = new ExampleComp(
        data.id,
        data.version,
        data.text,
        data.translations,
        []
      );
      this.italicizedTextRanges = data.format.italic;
      this._appliedWords = data.keywords;
      this._comment = data.comment;
      this._note = data.note;
      this.loadSource(data.source.type, {
        author: data.source.author,
        title: data.source.title,
        page: data.source.page,
        initialPublishingYear: data.source.initialPublishingYear,
        publishedYear: data.source.publishedYear,
        publishedPlace: data.source.publishedPlace,
        passageTitle: data.source.passageTitle,
        publishingDate: data.source.publishingDate
      });
      this.source.disableEditing();
    });
  }

  public refresh() {
    this.exampleProposalService.unsubscribeFromExampleProposalInService(this.identifier);
    this.exampleProposalService.removeExampleProposalInService(this.identifier);
    this.loadEmptyExample();
    this.identifier = undefined;
    this.italicizedTextRanges = [];
    this._appliedWords = [];
    this._comment = '';
    this._note = '';
    this.source = undefined;
  }

}
