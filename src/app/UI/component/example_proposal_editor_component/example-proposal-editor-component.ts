import {ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../source_component';
import {ListManipulatorComponent} from '../list_manipulator_component/list-manipulator-component';
import {combineLatest} from 'rxjs';
import {italicizeText} from './italicize-text';
import {map} from 'rxjs/operators';
import {ProposalSourceType} from '../../../service/proposal/proposal-source-type';
import {ExampleProposalEditorComponentModel} from './example-proposal-editor-component-model';

@Component({
  selector: 'app-example-proposal-editor',
  templateUrl: './example-proposal-editor-component.html',
  styleUrls: ['./example-proposal-editor-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleProposalEditorComponent {
  private _model?: ExampleProposalEditorComponentModel;
  private _editable: boolean;
  private sourceComponent: SourceComponent | null;
  private componentFactoryResolver: ComponentFactoryResolver;
  @ViewChild('translations', { static: true }) private translationsComponent?: ListManipulatorComponent;
  @ViewChild('keywords', { static: true }) private keywordsComponent?: ListManipulatorComponent;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this._editable = false;
    this.sourceComponent = null;
    this.componentFactoryResolver = componentFactoryResolver;
  }
  @Input() public set model(model: ExampleProposalEditorComponentModel) {
    this._model = model;
  }
  @Input()
  public set editable(newVal: boolean) {
    this._editable = newVal;
    if (this.sourceComponent) {
      this.sourceComponent.editable = newVal;
    }
  }
  public get editable() {
    return this._editable;
  }
  public set text(newText: string) {
    if (this._model) {
      this._model.text = newText;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public get comment$() {
    if (this._model) {
      return this._model.comment$;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public set comment(newComment: string) {
    if (this._model) {
      this._model.comment = newComment;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public get note$() {
    if (this._model) {
      return this._model.note$;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public set note(newNote: string) {
    if (this._model) {
      this._model.note = newNote;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public set italics(newItalics: List<[number, number]>) {
    if (this._model) {
      this._model.italics = newItalics;
    } else {
      throw new Error('proposal editor component model can not be undefined');
    }
  }
  public get italicizedText$() {
    if (this._model) {
      return combineLatest([this._model.italics$, this._model.text$])
        .pipe(
          map(([italic, text]) => italicizeText(text, italic.toArray()))
        );
    }
  }
  public get translationsComponentModel() {
    return this._model?.translationsComponentModel;
  }
  public get keywordsComponentModel() {
    return this._model?.translationsComponentModel;
  }
  public onItalicsChange(newRanges: List<[number, number]>) {
    this.italics = newRanges;
  }
  public onTextChange(newText: string) {
    this.text = newText;
  }
  public onNoteChange(newNote: string) {
    this.note = newNote;
  }
  public onCommentChange(newComment: string) {
    this.comment = newComment;
  }
  public onSourceChoose(type: string) {
    if (type === '') {
      this._model?.switchSource(null);
    } else {
      const sourceType = <ProposalSourceType>type;
      this._model?.switchSource(sourceType);
    }
  }
  public save() {
    this._model?.save();
  }
  public reset() {
    this._model?.reset();
    this.sourceHost?.viewContainerRef.clear();
    this.sourceComponent = null;
  }
}
