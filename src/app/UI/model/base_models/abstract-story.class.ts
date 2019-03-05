import {BuilderComponentModelTypes} from './model-types.enum';
import {TextedItem} from './texted-item.class';

export abstract class AbstractStory extends TextedItem {
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
    if (newTitle !== '') {
      this._title = newTitle;
    } else {
      alert('Story Title Shall Not Be Empty');
    }
  }
}
