import {StoryComp} from '../../model/story/story-comp.class';
import {ExampleSourceBookComponentModel} from '../../model/example_source_book/example-source-book-component.model';
import {ExampleSourceJournalComponentModel} from '../../model/example_source_journal/example-source-journal-component.model';
import {List} from 'immutable';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {EventEmitter} from '@angular/core';

export interface ExampleEditor {
  text: string;
  translations: List<string>;
  appliedWords: List<string>;
  note: string;
  comment: string;
  unlocked: boolean;

  exampleChange: EventEmitter<>;

  onTextModify(newText: string): void;
  onItalicizedRangesChange(newRanges: Array<[number, number]>): void;
  onTranslationModify(atIndex: number, to: string): void;
  onTranslationDrop(event: CdkDragDrop<any>): void;
  onNoteModify(newNote: string): void;
  onCommentModify(newComment: string): void;
  onAppliedWordModify(atIndex: number, to: string): void;
  onAppliedWordDrop(event: CdkDragDrop<any>): void;
  onSourceChoose(sourceType: string): void;
  onTrashDrop(event: CdkDragDrop<any>): void;

  fillData(
    exampleId: number,
    text: string,
    italic: Array<[number, number]>,
    keywords: Array<string>,
    translations: Array<string>,
    stories: Array<StoryComp>,
    note: string,
    comment: string,
    source: ExampleSourceBookComponentModel & ExampleSourceJournalComponentModel
  ): void;

  lock(): void;

  unlock(): void;

  reset(): void;
}
