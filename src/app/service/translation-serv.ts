import {AbstractTranslation} from '../common_entities/abstract-translation';

export class TranslationServ extends AbstractTranslation {
  public changeID(newID: number) {
    super.changeID(newID);
  }
  public changeText(newText: string) {
    super.changeText(newText);
  }
}
