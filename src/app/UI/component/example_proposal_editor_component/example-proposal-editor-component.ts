import {AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceDirective} from '../source_component/source.directive';
import {SourceComponent} from '../source_component';
import {ProposalBookSourceHandle, ProposalHandle, ProposalJournalSourceHandle} from '../../../service/proposal';
import {AbstractPresenterContent} from '../example_presenter_component/abstract-presenter-content';
import {ListManipulatorComponent} from '../list_manipulator_component/list-manipulator-component';
import {ProposalTranslationsAdapter} from './proposal-translations-adapter';
import {ProposalKeywordsAdapter} from './proposal-keywords-adapter';
import {ExampleSourceBookComponent} from '../source_component/example_source_book/example-source-book.component';
import {ExampleSourceJournalComponent} from '../source_component/example_source_journal/example-source-journal.component';

@Component({
  selector: 'app-example-proposal-editor',
  templateUrl: './example-proposal-editor-component.html',
  styleUrls: ['./example-proposal-editor-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorComponent extends AbstractPresenterContent implements OnInit, AfterViewInit {
  protected _handle: ProposalHandle;
  private sourceComponent: SourceComponent;
  private componentFactoryResolver: ComponentFactoryResolver;
  private _editable: boolean = undefined;
  @ViewChild(SourceDirective, { static: true }) private sourceHost: SourceDirective;
  @ViewChild('translations', { static: true }) private translationsComponent: ListManipulatorComponent;
  @ViewChild('keywords', { static: true }) private keywordsComponent: ListManipulatorComponent;
  public keywordsAdapter: ProposalKeywordsAdapter;
  public translationsAdapter: ProposalTranslationsAdapter;
  public _onItalicsChange(newRanges: List<[number, number]>) {
    this.italics = newRanges;
  }
  public _onTextChange(newText: string) {
    this.text = newText;
  }
  public _onNoteChange(newNote: string) {
    this.note = newNote;
  }
  public _onCommentChange(newComment: string) {
    this.comment = newComment;
  }
  public _onSourceChoose(type: string) {
    this._handle.changeSource(type);
    this._generateSourceComponent(type, this._editable);
  }
  private _generateSourceComponent(type: string, editable: boolean) {
    if (type === '' || null || undefined) {
      this.sourceHost.viewContainerRef.clear();
      this.sourceComponent = null;
    } else if (type === 'book') {
      this.sourceHost.viewContainerRef.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
      const componentRef = this.sourceHost.viewContainerRef.createComponent(factory);
      (<ExampleSourceBookComponent>componentRef.instance).sourceHandle = <ProposalBookSourceHandle>this._handle.source;
      this.sourceComponent = componentRef.instance;
    } else if (type === 'journal') {
      this.sourceHost.viewContainerRef.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
      const componentRef = this.sourceHost.viewContainerRef.createComponent(factory);
      (<ExampleSourceJournalComponent>componentRef.instance).sourceHandle = <ProposalJournalSourceHandle>this._handle.source;
      this.sourceComponent = componentRef.instance;
    }
    if (this.sourceComponent) {
      this.sourceComponent.editable = editable;
    }
  }
  private _reset() {
    this._handle.text = 'Please edit the text of your proposed example sentence here.';
    this._handle.keywords = List();
    this._handle.translations = List();
    this._handle.italics = List([]);
    this._handle.note = '';
    this._handle.comment = '';
    this._handle.source = null;
    this._generateSourceComponent(null, true);
  }
  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.componentFactoryResolver = componentFactoryResolver;
  }
  ngOnInit() {
    this._handle.$text.subscribe(text => this.text = text);
    this._handle.$comment.subscribe(comment => this.comment = comment);
    this._handle.$italics.subscribe(italics => this._italics = italics.toArray());
    this.keywordsAdapter = new ProposalKeywordsAdapter(this._handle);
    this.translationsAdapter = new ProposalTranslationsAdapter(this._handle);
  }
  ngAfterViewInit(): void {
    this._handle.$translations.subscribe(() => this.translationsComponent.handle = new ProposalTranslationsAdapter(this._handle));
    this._handle.$keywords.subscribe(() => this.keywordsComponent.handle = new ProposalKeywordsAdapter(this._handle));
    this._handle.$source.subscribe(
      (sourceHandle) => {
        if (sourceHandle) {
          this._generateSourceComponent(sourceHandle.getType(), this._editable);
        } else {
          this.sourceComponent = null;
        }
      }
    );
  }
  public get editable() {
    return this._editable;
  }
  @Input()
  public set editable(newVal: boolean) {
    this._editable = newVal;
    if (this.sourceComponent) {
      this.sourceComponent.editable = newVal;
    }
  }
  @Input()
  public set handle(newHandle: ProposalHandle) {
    this._handle = newHandle;
  }
  public save() {
    this._handle.save().subscribe(
      () => this.editable = false,
      () => {}
    );
  }
  public reset() {
    this._reset();
  }
}
