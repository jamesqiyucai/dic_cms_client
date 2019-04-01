import {AbstractStory} from './abstract-story.class';
import {BuilderComponentModelTypes} from './model-types.enum';
import {Storable} from './storable.class';

export abstract class AbstractExample extends Storable {
  protected constructor(
    id: number,
    text: string,
    translations: Array<string>,
    stories: Array<AbstractStory>,
  ) {
    super(id, BuilderComponentModelTypes.example, text, translations, stories);
  }
}
