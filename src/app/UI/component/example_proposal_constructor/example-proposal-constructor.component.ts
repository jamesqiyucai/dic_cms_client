import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {List} from 'immutable';
import * as _ from 'lodash';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleProposalConstructorComponentDto} from './example-proposal-constructor.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';
import {PROPOSAL_REPOSITORY, ProposalHandle, ProposalRepository} from '../../../service/proposal';

@Component({
  selector: 'app-example-proposal-constructor',
  template: `
    <div>
      <app-example-editor
        (idChange)="onIdChange($event)"
        (versionChange)="onVersionChange($event)"
        (textChange)="onTextChange($event)"
        (italicizedTextRangesChange)="onItalicizedTextRangesChange($event)"
        (translationsChange)="onTranslationsChange($event)"
        (keywordsChange)="onKeywordsChange($event)"
        (noteChange)="onNoteChange($event)"
        (commentChange)="onCommentChange($event)"
        (sourceChange)="onSourceChange($event)"
      ></app-example-editor>
      <button (click)="onNew()">New</button>
      <button (click)="onSubmit()" [disabled]="!canSubmit">Submit</button>
    </div>
  `
})
export class ExampleProposalConstructorComponent implements OnInit, OnDestroy {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private proposalHandle: ProposalHandle;
  private _exampleId: number;
  private _exampleVersion: number;
  private _text: string;
  private _italics: Array<[number, number]>;
  private _translations: Array<{id: number, text: string}>;
  private _keywords: Array<string>;
  private _note: string;
  private _comment: string;
  private _source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;
  private _canSubmit = true;

  private subscription;


  constructor(@Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository) {}

  private updateView() {
    this.exampleEditor.update(
      this.exampleId,
      this.exampleVersion,
      this.text,
      this.italics,
      this.keywords,
      this.translations,
      this.note,
      this.comment,
      this.source,
    );
  }

  private updateModel() {
    let source = null;
    if (this.source) {
      switch (this.source.type) {
        case ExampleSourceComponentTypes.book: {
          source = {
            type: 'book',
            author: this.source.author,
            title: this.source.title,
            page: this.source.page,
            initialPublishingYear: (this.source as ExampleSourceBookComponentDto).initialPublishingYear,
            publishedYear: (this.source as ExampleSourceBookComponentDto).publishedYear,
            publishedPlace: (this.source as ExampleSourceBookComponentDto).publishedPlace,
          };
          break;
        }
        case ExampleSourceComponentTypes.journal: {
          source = {
            type: 'journal',
            author: this.source.author,
            title: this.source.title,
            page: this.source.page,
            passageTitle: (this.source as ExampleSourceJournalComponentDto).passageTitle,
            publishingDate: (this.source as ExampleSourceJournalComponentDto).publishingDate,
          };
          break;
        }
      }
    }
    this.proposalHandle.text = this.text;
    this.proposalHandle.keywords = this.keywords;
    this.proposalHandle.italics = this.italics;
    this.proposalHandle.translations = this.translations;
    this.proposalHandle.note = this.note;
    this.proposalHandle.comment = this.comment;
    this.proposalHandle.source = this.source;
  }

  private init(): void {

    this._exampleId = null;
    this._exampleVersion = null;
    this._text = 'Example Text Goes Here.';
    this._italics = [];
    this._translations = [{id: undefined, text: '新翻译'}];
    this._keywords = [''];
    this._note = '';
    this._comment = '';
    this._source = null;

    this.updateView();
    this.proposalHandle = this.proposalRepository.createProposal();

    this.proposalHandle = this.exampleProposalService.createExampleProposalInService(
      this.exampleId,
      this.exampleVersion,
      this.text,
      this.italics,
      this.translations,
      this.keywords,
      this.note,
      this.comment,
      null,
    );



    this.subscription = this.exampleProposalService.exampleProposals.subscribe(proposals => {
      const serviceData = proposals.find(proposal => proposal.identifier === this.proposalHandle);
      if (serviceData.purpose === this.exampleProposalService.types.ExampleProposalPurpose.review) {
        this.lock();
        this._canSubmit = false;
      }
      let newSourceData: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto = null;

      if (serviceData.source) {
        if (this.exampleProposalService.isBook(serviceData.source)) {
          newSourceData = {
            type: ExampleSourceComponentTypes.book,
            author: serviceData.source.author,
            title: serviceData.source.title,
            page: serviceData.source.page,
            initialPublishingYear: serviceData.source.initialPublishingYear,
            publishedYear: serviceData.source.publishedYear,
            publishedPlace: serviceData.source.publishedPlace,
          };
        } else if (this.exampleProposalService.isJournal(serviceData.source)) {
          newSourceData = {
            type: ExampleSourceComponentTypes.journal,
            author: serviceData.source.author,
            title: serviceData.source.title,
            page: serviceData.source.page,
            passageTitle: serviceData.source.passageTitle,
            publishingDate: serviceData.source.publishingDate,
          };
        }
      }

      const newProposalData: ExampleProposalConstructorComponentDto = {
        identifier: serviceData.identifier,
        id: serviceData.id,
        version: serviceData.version,
        text: serviceData.text,
        format: { italics: serviceData.italic },
        translations: serviceData.translations,
        keywords: serviceData.keywords,
        comment: serviceData.comment,
        note: serviceData.note,
        source: newSourceData,
      };
      this.update(newProposalData);
    });
  }

  private get canSubmit() {
    return this._canSubmit;
  }

  // private get proposalHandle() {
  //   return this._proposalHandle;
  // }
  //
  // private set proposalHandle(newIdentifier: number) {
  //   if (this.proposalHandle !== newIdentifier) {
  //     this._proposalHandle = newIdentifier;
  //     this.updateModel();
  //   }
  // }

  private get exampleId() {
    return this._exampleId;
  }

  private set exampleId(newId: number) {
    if (newId !== this.exampleId) {
      this._exampleId = newId;
      this.updateView();
    }
  }

  private get exampleVersion() {
    return this._exampleVersion;
  }

  private set exampleVersion(newVersion: number) {
    if (newVersion !== this.exampleVersion) {
      this._exampleVersion = newVersion;
      this.updateView();
      this.updateModel();
    }
  }

  private get text() {
    return this._text;
  }

  private set text(newText: string) {
    if (newText !== this.text) {
      this._text = newText;
      this.updateView();
      this.updateModel();
    }
  }

  private get italics() {
    return List(this._italics);
  }

  private set italics(newItalics: List<[number, number]>) {
    if (!this.italics.equals(newItalics)) {
      this._italics = newItalics.toArray();
      this.updateView();
      this.updateModel();
    }
  }

  private get translations() {
    return List(this._translations);
  }

  private set translations(newTranslations: List<{id: number, text: string}>) {
    if (!this.translations.equals(newTranslations)) {
      this._translations = newTranslations.toArray();
      this.updateView();
      this.updateModel();
    }
  }

  private get keywords() {
    return List(this._keywords);
  }

  private set keywords(newKeywords: List<string>) {
    if (!this.keywords.equals(newKeywords)) {
      this._keywords = newKeywords.toArray();
      this.updateView();
      this.updateModel();
    }
  }

  private get note() {
    return this._note;
  }

  private set note(newNote: string) {
    if (this.note !== newNote) {
      this._note = newNote;
      this.updateView();
      this.updateModel();
    }
  }

  private get comment() {
    return this._comment;
  }

  private set comment(newComment: string) {
    if (this.comment !== newComment) {
      this._comment = newComment;
      this.updateView();
      this.updateModel();
    }
  }

  private get source() {
    return this._source;
  }

  private set source(newSource: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
    if (!_.isEqual(this.source, newSource)) {
      this._source = newSource;
      this.updateView();
      this.updateModel();
    }
  }

  private onIdChange(newId: number) {
    this.exampleId = newId;
  }

  private onVersionChange(newVersion: number) {
    this.exampleVersion = newVersion;
  }

  private onTextChange(newText: string) {
    this.text = newText;
  }

  private onItalicizedTextRangesChange(newRanges: List<[number, number]>) {
    this.italics = newRanges;
  }

  private onTranslationsChange(newTranslations: List<{id: number, text: string}>) {
    this.translations = newTranslations;
  }

  private onKeywordsChange(newKeywords: List<string>) {
    this.keywords = newKeywords;
  }

  private onNoteChange(newNote: string) {
    this.note = newNote;
  }

  private onCommentChange(newComment: string) {
    this.comment = newComment;
  }

  private onSourceChange(newSource: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
    this.source = newSource;
  }

  private onSubmit() {
    this.exampleProposalService.submitExampleProposal(this.proposalHandle);
    this.lock();
  }

  private onNew() {
    this.init();
    this.unlock();
  }

  /*****************************************************************************/
  public ngOnInit(): void {
    this.init();
    this.unlock();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public lock() {
    this.exampleEditor.lock();
    this._canSubmit = false;
  }

  public unlock() {
    this.exampleEditor.unlock();
    this._canSubmit = true;
  }

  public update(data: ExampleProposalConstructorComponentDto) {
    this.proposalHandle = data.identifier;
    this.exampleId = data.id;
    this.exampleVersion = data.version;
    this.text = data.text;
    this.italics = data.format.italics;
    this.translations = data.translations;
    this.keywords = data.keywords;
    this.note = data.note;
    this.comment = data.comment;
    this.source = data.source;
  }

}
