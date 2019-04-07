import {Component, ContentChild, EventEmitter, Inject, Output} from '@angular/core';
import {List} from 'immutable';
import {SourceComponent} from '../example_source/abstract_source/source.component';
import {ExampleSourceTypeFactory} from '../../event/example_source_type/example-source-type-factory.class';
import {ExampleSourceType} from '../../event/example_source_type/example-source-type.class';
import {ExampleCompFactory} from '../../model/example/example-comp-factory.interface';
import {EXAMPLE_FACTORY} from '../../model/example/injection-token';
import {ExampleCompFactoryImpl} from '../../model/example/example-comp-factory.class';
import {ID_SERVICE} from '../../../service/word_builder/tokens';
import {IDServiceImpl} from '../../../service/word_builder/id.service.class';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ExampleServ} from '../../../service/model/example-serv.interface';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css'],
  providers: [
    {provide: EXAMPLE_FACTORY, useClass: ExampleCompFactoryImpl},
    {provide: ID_SERVICE, useClass: IDServiceImpl}
  ]
})
export class ExampleEditorComponent {
  private example = this.exampleFactory.createNewExample();
  private italicizedTextRanges: Array<[number, number]> = [];
  private _appliedWords: Array<string> = [''];
  private _note = '';
  private _comment = 'Comment Goes Here';
  @ContentChild(SourceComponent) private source: SourceComponent;
  private sourceInstructionFactory = new ExampleSourceTypeFactory();
  @Output() sourceChosen = new EventEmitter<ExampleSourceType>();

  constructor(@Inject(EXAMPLE_FACTORY) private exampleFactory: ExampleCompFactory) {}

  trackByFn(index: any, item: any) {
    return index;
  }

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

  public newItalicizedRanges(ranges: Array<[number, number]>) {
    this.italicizedTextRanges = ranges;
  }

  public modifyText(newText: string) {
    this.example.text = newText;
  }

  public modifyNote(newNote: string) {
    this._note = newNote;
  }

  public modifyComment(newComment: string) {
    this._comment = newComment;
  }

  public modifyTranslation(atIndex: number, to: string) {
    this.example.modifyTranslation(atIndex, to);
  }

  public translationDropped(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this.example.addTranslation(event.currentIndex, '新翻译');
    } else {
      this.example.changeTranslationsOrder(event.previousIndex, event.currentIndex);
    }
  }

  public modifyAppliedWord(atIndex: number, to: string) {
    this._appliedWords[atIndex] = to;
  }

  public appliedWordDropped(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      this._appliedWords.splice(event.currentIndex, 0, '');
    } else {
      moveItemInArray(this._appliedWords, event.previousIndex, event.currentIndex);
    }
  }

  public delete(event: CdkDragDrop<any>) {
    switch (event.previousContainer.data) {
      case 'translation':
        this.example.deleteTranslation(event.previousIndex);
        break;
      case 'appliedWord':
        this._appliedWords.splice(event.previousIndex, 1);
        break;
    }
  }

  public chooseSource(sourceType: string) {
    switch (sourceType) {
      case 'Newspaper':
        this.sourceChosen.emit(this.sourceInstructionFactory.createNewspaper());
        break;
      case 'Paperbook':
        this.sourceChosen.emit(this.sourceInstructionFactory.createPaperbook());
        break;
      case '':
        this.sourceChosen.emit(this.sourceInstructionFactory.createNull());
    }
  }

  public packData(): ExampleServ {
    const italicizedTextRanges = this.italicizedTextRanges;
    return {
      text: this.text.replace(/<i>/g, '').replace(/<\/i>/g, ''),
      format: {
        italic: italicizedTextRanges
      },
      translations: this.translations.toArray(),
      keywords: this.appliedWords.toArray(),
      source: this.source.getInfo()
    };
  }
}
