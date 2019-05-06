// import {AbstractSense} from '../base_models/abstract-sense.class';
// import {SensePositionComp} from '../sense-position/sense-position-comp.class';
// import {ExampleComp} from '../example/example-comp.class';
// import {StoryComp} from '../story/story-comp.class';
// import {List} from 'immutable';
//
// export class SenseComp extends AbstractSense {
//   protected _examples: Array<ExampleComp>;
//   protected _stories: Array<StoryComp>;
//   constructor(
//     id: number,
//     pos: number,
//     position: SensePositionComp,
//     summary: string,
//     text: string,
//     tags: Array<number>,
//     translations: Array<string>,
//     examples: Array<ExampleComp>,
//     stories: Array<StoryComp>,
//   ) {
//     super(id, text, translations, stories, examples, pos, position, summary, tags);
//   }
//
//   get examples() {
//     return List(this._examples);
//   }
//
//   get stories() {
//     return List(this._stories);
//   }
// }
