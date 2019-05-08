import {AfterViewChecked, AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExampleEditorComponent} from '../example_editor/example-editor.component';
import {EXAMPLE_PROPOSAL_SERVICE} from '../../../service/entity/example_proposal/injection-token';
import {ExampleProposalService} from '../../../service/entity/example_proposal/example-proposal.service';
import {List} from 'immutable';
import * as _ from 'lodash';
import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
import {ExampleProposalConstructorComponentDto} from './example-proposal-constructor.component.dto';
import {ExampleEditorComponentDto} from '../example_editor/example-editor.component.dto';
import {ExampleSourceComponentTypes} from '../example_source/example-source.component.types';

@Component({
  selector: 'app-example-proposal-constructor',
  template: `
    <div>
      <app-example-editor (exampleChange)="onExampleChange($event)"></app-example-editor>
      <button (click)="refresh()">New</button>
      <button (click)="submit()" [disabled]="disabled">Submit</button>
    </div>
  `
})
export class ExampleProposalConstructorComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild(ExampleEditorComponent) private exampleEditor: ExampleEditorComponent;
  private _exampleProposalIdentifier: number;
  private _exampleId: number;
  private _exampleVersion: number;
  private _text: string;
  private _italics: Array<[number, number]>;
  private _translations: Array<string>;
  private _keywords: Array<string>;
  private _note: string;
  private _comment: string;
  private _source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

  private subscription;

  private _canSubmit = true;

  constructor(@Inject(EXAMPLE_PROPOSAL_SERVICE) private exampleProposalService: ExampleProposalService) {}

  private get exampleProposalIdentifier() {
    return this._exampleProposalIdentifier;
  }

  private set exampleProposalIdentifier(newIdentifier: number) {
    if (this.exampleProposalIdentifier !== newIdentifier) {
      this._exampleProposalIdentifier = newIdentifier;
      this.updateProposalInService();
    }
  }

  private get exampleId() {
    return this._exampleId;
  }

  private set exampleId(newId: number) {
    if (newId !== this.exampleId) {
      this._exampleId = newId;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get exampleVersion() {
    return this._exampleVersion;
  }

  private set exampleVersion(newVersion: number) {
    if (newVersion !== this.exampleVersion) {
      this._exampleVersion = newVersion;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get text() {
    return this._text;
  }

  private set text(newText: string) {
    if (newText !== this.text) {
      this._text = newText;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get italics() {
    return List(this._italics);
  }

  private set italics(newItalics: List<[number, number]>) {
    if (!this.italics.equals(newItalics)) {
      this._italics = newItalics.toArray();
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get translations() {
    return List(this._translations);
  }

  private set translations(newTranslations: List<string>) {
    if (!this.translations.equals(newTranslations)) {
      this._translations = newTranslations.toArray();
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get keywords() {
    return List(this._keywords);
  }

  private set keywords(newKeywords: List<string>) {
    if (!this.keywords.equals(newKeywords)) {
      this._keywords = newKeywords.toArray();
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get note() {
    return this._note;
  }

  private set note(newNote: string) {
    if (this.note !== newNote) {
      this._note = newNote;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get comment() {
    return this._comment;
  }

  private set comment(newComment: string) {
    if (this.comment !== newComment) {
      this._comment = newComment;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private get source() {
    return this._source;
  }

  private set source(newSource: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto) {
    if (!_.isEqual(this.source, newSource)) {
      this._source = newSource;
      this.updateExampleEditor();
      this.updateProposalInService();
    }
  }

  private updateExampleEditor() {
    this.exampleEditor.update(
      this.exampleId,
      this.exampleVersion,
      this.text,
      this.italics,
      this.keywords,
      this.translations,
      null,
      this.note,
      this.comment,
      this.source,
    );
  }

  private updateProposalInService() {
    let source = null;
    if (this.source) {
      switch (this.source.type) {
        case ExampleSourceComponentTypes.book: {
          source = {
            type: this.exampleProposalService.types.ExampleProposalSourceType.book,
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
            type: this.exampleProposalService.types.ExampleProposalSourceType.journal,
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
    this.exampleProposalService.updateExampleProposalInService(
      this.exampleProposalIdentifier,
      this.text,
      this.italics.toArray(),
      this.translations.toArray(),
      this.keywords.toArray(),
      this.note,
      this.comment,
      source,
    );
  }

  private lock() {
    this.exampleEditor.lock();
  }

  public get disabled() {
    return !this._canSubmit;
  }

  public onExampleChange(data: ExampleEditorComponentDto) {
    console.log('heard example editor event');
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

  public fillData(data: ExampleProposalConstructorComponentDto) {
    this.exampleProposalIdentifier = data.identifier;
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

  public submit() {
    this.exampleProposalService.submitExampleProposal(this.exampleProposalIdentifier);
  }

  public refresh() {
    this._canSubmit = true;
    this.init();
  }

  private init(): void {

    this._exampleId = null;
    this._exampleVersion = null;
    this._text = 'Example Text Goes Here.';
    this._italics = [];
    this._translations = ['新翻译'];
    this._keywords = [''];
    this._note = '';
    this._comment = '';
    this._source = null;



    this._exampleProposalIdentifier = this.exampleProposalService.createExampleProposalInService(
      this.exampleId,
      this.exampleVersion,
      this.text,
      this.italics.toArray(),
      this.translations.toArray(),
      this.keywords.toArray(),
      this.note,
      this.comment,
      null,
    );

    this.subscription = this.exampleProposalService.exampleProposals.subscribe(proposals => {
      const serviceData = proposals.find(proposal => proposal.identifier === this.exampleProposalIdentifier);
      if (serviceData.purpose === this.exampleProposalService.types.ExampleProposalPurpose.review) {
        this.lock();
        this._canSubmit = false;
      }
      let newSourceData: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto;

      if (serviceData.source) {
        switch (serviceData.source.type) {
          case this.exampleProposalService.types.ExampleProposalSourceType.book: {
            newSourceData = {
              type: ExampleSourceComponentTypes.book,
              author: serviceData.source.author,
              title: serviceData.source.title,
              page: serviceData.source.page,
              initialPublishingYear: serviceData.source.initialPublishingYear,
              publishedYear: serviceData.source.publishedYear,
              publishedPlace: serviceData.source.publishedPlace,
            };
            break;
          }
          case this.exampleProposalService.types.ExampleProposalSourceType.journal: {
            newSourceData = {
              type: ExampleSourceComponentTypes.journal,
              author: serviceData.source.author,
              title: serviceData.source.title,
              page: serviceData.source.page,
              passageTitle: serviceData.source.passageTitle,
              publishingDate: serviceData.source.publishingDate,
            };
            break;
          }
        }
      } else {
        newSourceData = null;
      }

      const newProposalData: ExampleProposalConstructorComponentDto = {
        identifier: serviceData.identifier,
        id: serviceData.id,
        version: serviceData.version,
        text: serviceData.text,
        format: { italics: List(serviceData.format.italic) },
        translations: List(serviceData.translations),
        keywords: List(serviceData.keywords),
        comment: serviceData.comment,
        note: serviceData.note,
        source: newSourceData,
      };
      this.fillData(newProposalData);
    });





    this.updateExampleEditor();
    console.log('tried to update ee');

    this.exampleEditor.unlock();

  }

  ngOnInit(): void {
    console.log('constructor init');
  }

  ngAfterViewChecked(): void {
    console.log('view init');
    this.init();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
