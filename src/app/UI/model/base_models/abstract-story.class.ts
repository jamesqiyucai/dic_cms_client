import {BuilderComponentModelTypes} from './model-types.enum';
import {Textable} from './textable.class';

export abstract class AbstractStory extends Textable {
  protected constructor(
    id: number,
    text: string,
    protected _title: string
  ) {
    super(id, BuilderComponentModelTypes.story, text);
  }

  get title() {
    return this._title;
  }
  set title(newTitle: string) {
    this._title = newTitle;
  }
}
