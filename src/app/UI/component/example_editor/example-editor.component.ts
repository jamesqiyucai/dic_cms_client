import {Component, ContentChild, EventEmitter, Output} from '@angular/core';
import {ExampleComp} from '../../model/example/example-comp.class';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {ExampleSourceTypeFactory} from '../../event/example_source_type/example-source-type-factory.class';
import {ExampleSourceType} from '../../event/example_source_type/example-source-type.class';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html'
})
export class ExampleEditorComponent {
  private example: ExampleComp;
  private _appliedWords: Array<string>;
  private _note: string;
  private _comment: string;
  @ContentChild(SourceComponent) private source: SourceComponent;
  private sourceInstructionFactory = new ExampleSourceTypeFactory();
  @Output() sourceChosen = new EventEmitter<ExampleSourceType>();

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

  public changeText(newText: string) {
    this.example.text = newText;
  }

  public changeNote(newNote: string) {
    this._note = newNote;
  }

  public changeComment(newComment: string) {
    this._comment = newComment;
  }

  public changeTranslation(atIndex: number, to: string) {
    this.example.modifyTranslation(atIndex, to);
  }

  public changeAppliedWord(atIndex: number, to: string) {
    this._appliedWords[atIndex] = to;
  }

  public chooseSource(sourceType: string) {
    switch (sourceType) {
      case 'Newspaper':
        this.sourceChosen.emit(this.sourceInstructionFactory.createNewspaper());
        break;
      case 'Paperbook':
        this.sourceChosen.emit(this.sourceInstructionFactory.createPaperbook());
        break;
    }
  }
}
