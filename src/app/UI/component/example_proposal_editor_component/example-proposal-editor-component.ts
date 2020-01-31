import {AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceDirective} from '../source_component/source.directive';
import {SourceComponent} from '../source_component';
import {
  PROPOSAL_REPOSITORY,
  ProposalBookSourceHandle,
  ProposalHandle,
  ProposalJournalSourceHandle,
  ProposalRepository
} from '../../../service/proposal';
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
  private keywordsAdapter: ProposalKeywordsAdapter;
  private translationsAdapter: ProposalTranslationsAdapter;
  private sourceComponent: SourceComponent;
  private componentFactoryResolver: ComponentFactoryResolver;
  private _editable: boolean = undefined;
  @ViewChild(SourceDirective) private sourceHost: SourceDirective;
  @ViewChild('translations') private translationsComponent: ListManipulatorComponent;
  @ViewChild('keywords') private keywordsComponent: ListManipulatorComponent;
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    @Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository
  ) {
    super();
    this.componentFactoryResolver = componentFactoryResolver;
  }
  ngOnInit() {
    if (!this._handle) {
      this._handle = this.proposalRepository.createProposal();
      this.resetContent();
    }
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
          this.generateSourceComponent(sourceHandle.getType(), true);
        } else {
          this.sourceComponent = null;
        }
      }
    );
  }
  public get editable() {
    return this._editable;
  }
  @Input() public set editable(newVal: boolean) {
    this._editable = newVal;
    if (this.sourceComponent) {
      this.sourceComponent.editable = newVal;
    }
  }
  private onItalicsChange(newRanges: List<[number, number]>) {
    this.italics = newRanges;
  }
  private onTextChange(newText: string) {
    this.text = newText;
  }
  private onNoteChange(newNote: string) {
    this.note = newNote;
  }
  private onCommentChange(newComment: string) {
    this.comment = newComment;
  }
  private onSourceChoose(type: string) {
    this._handle.changeSource(type);
    console.log(this._handle);
    this.generateSourceComponent(type, true);
  }
  private generateSourceComponent(type: string, editable: boolean) {
    if (type === '' || null || undefined) {
      this.sourceHost.viewContainerRef.clear();
      this.sourceComponent = null;
    } else if (type === 'book') {
      this.sourceHost.viewContainerRef.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
      const componentRef = this.sourceHost.viewContainerRef.createComponent(factory);
      (<ExampleSourceBookComponent>componentRef.instance).sourceHandle = <ProposalBookSourceHandle>this._handle.source;
    } else if (type === 'journal') {
      this.sourceHost.viewContainerRef.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
      const componentRef = this.sourceHost.viewContainerRef.createComponent(factory);
      (<ExampleSourceJournalComponent>componentRef.instance).sourceHandle = <ProposalJournalSourceHandle>this._handle.source;
    }
    if (this.sourceComponent) {
      this.sourceComponent.editable = editable;
    }
  }
  private resetContent() {
    this._handle.text = 'Example Text';
    this._handle.keywords = List();
    this._handle.translations = List();
    this._handle.italics = List([]);
    this._handle.note = '';
    this._handle.comment = '';
    this._handle.source = null;
    this.generateSourceComponent(null, true);
  }
  public save() {
    this._handle.save().subscribe(
      () => this.editable = false,
      (err) => {}
    );
  }
  public reset() {
    this.resetContent();
  }
  public onNew() {
    this._handle = this.proposalRepository.createProposal();
    this.resetContent();
    this.keywordsAdapter = new ProposalKeywordsAdapter(this._handle);
    this.translationsAdapter = new ProposalTranslationsAdapter(this._handle);
    this._handle.$text.subscribe(text => this.text = text);
    this._handle.$comment.subscribe(comment => this.comment = comment);
    this._handle.$italics.subscribe(italics => this._italics = italics.toArray());
    this._handle.$translations.subscribe(() => this.translationsComponent.handle = new ProposalTranslationsAdapter(this._handle));
    this._handle.$keywords.subscribe(() => this.keywordsComponent.handle = new ProposalKeywordsAdapter(this._handle));
    this._handle.$source.subscribe(
      (sourceHandle) => {
        if (sourceHandle) {
          this.generateSourceComponent(sourceHandle.getType(), true);
        } else {
          this.sourceComponent = null;
        }
      }
    );
    this.editable = true;
  }
}
