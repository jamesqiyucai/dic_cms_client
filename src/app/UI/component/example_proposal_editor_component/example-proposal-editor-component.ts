import {AfterViewInit, Component, ComponentFactoryResolver, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceDirective} from '../source_component/source.directive';
import {SourceComponentFactory} from '../source_component';
import {SourceComponent} from '../source_component';
import {PROPOSAL_REPOSITORY, ProposalHandle, ProposalRepository} from '../../../service/proposal';
import {AbstractPresenterContent} from '../example_presenter_component/abstract-presenter-content';
import {ListManipulatorComponent} from '../list_manipulator_component/list-manipulator-component';
import {ProposalTranslationsAdapter} from './proposal-translations-adapter';
import {ProposalKeywordsAdapter} from './proposal-keywords-adapter';

@Component({
  selector: 'app-example-proposal-editor',
  templateUrl: './example-proposal-editor-component.html',
  styleUrls: ['./example-proposal-editor-component.css'],
})
export class ExampleProposalEditorComponent extends AbstractPresenterContent implements OnInit, AfterViewInit {
  // protected _text: string;
  // protected _comment: string;
  // protected _note: string;
  // protected _italics: [number, number][];
  protected _handle: ProposalHandle;
  private keywordsAdapter: ProposalKeywordsAdapter;
  private translationsAdapter: ProposalTranslationsAdapter;
  private sourceComponent: SourceComponent;
  private sourceComponentFactory: SourceComponentFactory;
  private componentFactoryResolver: ComponentFactoryResolver;
  @Input() private unlocked: boolean;
  @ViewChild(SourceDirective) private sourceHost: SourceDirective;
  @ViewChild('translations') private translationsComponent: ListManipulatorComponent;
  @ViewChild('keywords') private keywordsComponent: ListManipulatorComponent;
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    @Inject(PROPOSAL_REPOSITORY) private proposalRepository: ProposalRepository
  ) {
    super();
    this.componentFactoryResolver = componentFactoryResolver;
    this.unlocked = true;
  }
  ngOnInit() {
    this._handle = this.proposalRepository.createProposal();
    this._handle.text = '';
    this._handle.keywords = List();
    this._handle.translations = List();
    this._handle.italics = List([]);
    this._handle.note = '';
    this._handle.comment = '';
    this._handle.source = null;
    this._handle.$text.subscribe(text => this.text = text);
    this._handle.$comment.subscribe(comment => this.comment = comment);
    this._handle.$note.subscribe(note => this.note = note);
    this._handle.$italics.subscribe(italics => this._italics = italics.toArray());
    this.keywordsAdapter = new ProposalKeywordsAdapter(this._handle);
    this.translationsAdapter = new ProposalTranslationsAdapter(this._handle);
  }
  ngAfterViewInit(): void {
    this.sourceComponentFactory = new SourceComponentFactory(this.sourceHost.viewContainerRef, this.componentFactoryResolver);
    this._handle.$translations.subscribe(() => this.translationsComponent.handle = new ProposalTranslationsAdapter(this._handle));
    this._handle.$keywords.subscribe(() => this.keywordsComponent.handle = new ProposalKeywordsAdapter(this._handle));
    this._handle.$source.subscribe(
      (sourceHandle) => {
        if (sourceHandle) {
          this.sourceComponent = this.sourceComponentFactory.createSourceComponent(sourceHandle.getType());
          this.sourceComponent.sourceHandle = sourceHandle;
        } else {
          this.sourceComponent = null;
          this.sourceComponentFactory.createSourceComponent(null);
        }
      }
    );
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
    if (type) {
      this.sourceComponent = this.sourceComponentFactory.createSourceComponent(type);
      this.sourceComponent.sourceHandle = this._handle.source;
    } else {
      this.sourceHost.viewContainerRef.clear();
      this.sourceComponent = null;
    }
  }
  private onSubmit() {
    this.lock();
  }
  private onNew() {
    this.unlock();
  }
  private lock(): void {
    this.unlocked = false;
    if (this.sourceComponent) {
      this.sourceComponent.lock();
    }
  }
  private unlock(): void {
    this.unlocked = true;
    if (this.sourceComponent) {
      this.sourceComponent.unlock();
    }
  }
}
