import {ExampleSourceServiceModelTypes} from './model/example_source/example-source.service.model.types';
import {BookSourceService} from './book-source-service';
import {ExampleSourceJournalServiceModel} from './model/example_source/example-source-journal.service.model';
import {TranslationServiceImpl} from './translation-service.impl';
import {ExampleService} from './example-service';
import {TranslationService} from './translation-service';
import {SourceService} from './source-service';
import {List} from 'immutable';

export class ExampleServiceImpl implements ExampleService {
  constructor(
    private _ID: number,
    private _version: number,
    private _text: string,
    private _keywords: string[],
    private _italics: [number, number][],
    private _translations: TranslationService[],
    private _note: string,
    private _comment: string,
    private _source: SourceService
  ) {}
  public get ID() {
    return this._ID;
  }
  public set ID(newID: number) {
    this._ID = newID;
  }
  public get version() {
    return this._version;
  }
  public set version(newVersion: number) {
    if (newVersion < this._version) {
      throw new Error('ExampleServiceImpl: the new version shall never be smaller than the current version');
    }
  }
  public get text() {
    return this._text;
  }
  public set text(newText: string) {
    this._text = newText;
  }
  public get keywords() {
    return List<string>(this._keywords);
  }
  public get italics() {
    return List<[number, number]>(this._italics);
  }
  public get translations() {
    return List<TranslationService>(this._translations);
  }
  public get note() {
    return this._note;
  }
  public set note(newNote: string) {
    this._note = newNote;
  }
  public get comment() {
    return this._comment;
  }
  public set comment(newComment: string) {
    this._comment = newComment;
  }
  public get source() {
    return this._source;
  }
  public setSource(newSource: SourceService) {

  }
//   public format: {
//     italic: Array<[number, number]>
//   };
//   constructor(
//     public readonly identifier: number,
//     public id: number,
//     public version: number,
//     public text: string,
//     italic: Array<[number, number]>,
//     public translations: TranslationServiceImpl[],
//     public keywords: string[],
//     public note: string,
//     public comment: string,
//     public source: {
//       type: ExampleSourceServiceModelTypes,
//       author: string,
//       title: string,
//       page: number,
//       passageTitle?: string,
//       publishingDate?: string,
//       initialPublishingYear?: number,
//       publishedYear?: number,
//       publishedPlace?: string,
//     }
// ) {
//     this.format = {
//       italic: []
//     };
//     this.format.italic = italic;
//     if (source) {
//       switch (source.type) {
//         case ExampleSourceServiceModelTypes.book: {
//           this.source = new BookSourceService(
//             source.author,
//             source.title,
//             source.page,
//             source.initialPublishingYear,
//             source.publishedYear,
//             source.publishedPlace,
//           );
//           break;
//         }
//         case ExampleSourceServiceModelTypes.journal: {
//           this.source = new ExampleSourceJournalServiceModel(
//             source.author,
//             source.title,
//             source.page,
//             source.publishingDate,
//             source.passageTitle,
//           );
//           break;
//         }
//       }
//     }
//   }
}
