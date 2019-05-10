// import {StoryComp} from '../../model/story/story-comp.class';
// import {List} from 'immutable';
// import {CdkDragDrop} from '@angular/cdk/drag-drop';
// import {EventEmitter} from '@angular/core';
// import {ExampleEditorComponentDto} from './example-editor.component.dto';
// import {ExampleSourceBookComponentDto} from '../example_source/example_source_book/example-source-book.component.dto';
// import {ExampleSourceJournalComponentDto} from '../example_source/example_source_journal/example-source-journal.component.dto';
//
// export interface ExampleEditor {
//   text: string;
//   translations: List<string>;
//   appliedWords: List<string>;
//   note: string;
//   comment: string;
//   unlocked: boolean;
//
//   exampleChange: EventEmitter<ExampleEditorComponentDto>;
//
//   onTextModify(newText: string): void;
//   onItalicizedRangesChange(newRanges: Array<[number, number]>): void;
//   onTranslationModify(atIndex: number, to: string): void;
//   onTranslationDrop(event: CdkDragDrop<any>): void;
//   onNoteModify(newNote: string): void;
//   onCommentModify(newComment: string): void;
//   onAppliedWordModify(atIndex: number, to: string): void;
//   onAppliedWordDrop(event: CdkDragDrop<any>): void;
//   onSourceChoose(sourceType: string): void;
//   onTrashDrop(event: CdkDragDrop<any>): void;
//
//   update(
//     exampleId: number,
//     version: number,
//     italicizedText: string,
//     italic: List<[number, number]>,
//     keywords: List<string>,
//     translations: List<string>,
//     stories: List<StoryComp>,
//     note: string,
//     comment: string,
//     source: ExampleSourceBookComponentDto | ExampleSourceJournalComponentDto
//   ): void;
//
//   lock(): void;
//
//   unlock(): void;
//
//   reset(): void;
// }
